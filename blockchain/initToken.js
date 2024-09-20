import dotenv from "dotenv"; // Import dotenv explicitly
import fs from "fs";
import {
  Hbar,
  Client,
  AccountId,
  TokenType,
  PrivateKey,
  AccountBalanceQuery,
  FileCreateTransaction,
  TokenCreateTransaction,
  ContractCreateTransaction,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  AccountCreateTransaction,
  AccountAllowanceApproveTransaction,
  TokenAssociateTransaction,
} from "@hashgraph/sdk";
import Reputify from "./Reputify.json";

async function initHTSToken() {
  dotenv.config();

  const accountIdTest = AccountId.fromString(process.env.ED25519_ID);
  const accountKeyTest = PrivateKey.fromStringED25519(
    process.env.ED25519_PRIVATE_KEY
  );

  if (accountIdTest == null || accountKeyTest == null) {
    throw new Error(
      "Environment variables myAccountId and myPrivateKey must be present"
    );
  }

  // set client operator
  const client = Client.forTestnet();
  client.setOperator(accountIdTest, accountKeyTest);

  // Treasury Account Setup
  const treasuryKey = PrivateKey.generateED25519();
  //Create token treasury account
  const treasuryAccount = new AccountCreateTransaction()
    .setKey(treasuryKey)
    .setInitialBalance(new Hbar(5))
    .setAccountMemo("treasury account");
  //Submit the transaction to a Hedera network
  const submitAccountCreateTx = await treasuryAccount.execute(client);
  //Get the receipt of the transaction
  const newAccountReceipt = await submitAccountCreateTx.getReceipt(client);
  //Get the account ID from the receipt
  const treasuryAccountId = newAccountReceipt.accountId;

  console.log("The new account ID is " + treasuryAccountId);

  //Create a token setup
  const createToken = new TokenCreateTransaction()
    .setTokenName("Reputify")
    .setTokenSymbol("RPT")
    .setTokenType(TokenType.FungibleCommon)
    .setTreasuryAccountId(treasuryAccountId)
    .setInitialSupply(1000);
  //Sign with the treasury key
  const signTokenTx = await createToken.freezeWith(client).sign(treasuryKey);
  //Submit the transaction to a Hedera network
  const submitTokenTx = await signTokenTx.execute(client);
  //Get the token ID from the receipt
  const tokenId = await (await submitTokenTx.getReceipt(client)).tokenId;

  console.log("The new token ID is " + tokenId);

  //Create a file on Hedera and store the hex-encoded bytecode
  //Get the contract bytecode
  const bytecode = Reputify.data.bytecode.object;
  const fileCreateTx = new FileCreateTransaction().setContents(bytecode);
  console.log("fileCreateTx");
  //Submit the file to the Hedera test network signing with the transaction fee payer key specified with the client
  const submitTx = await fileCreateTx.execute(client);
  console.log("submit tx");
  //Get the receipt of the file create transaction
  const fileReceipt = await submitTx.getReceipt(client);
  console.log("file receipt");
  //Get the file ID from the receipt
  const bytecodeFileId = fileReceipt.fileId;
  console.log("bytecodeFileId");
  //Log the file ID
  console.log("The smart contract byte code file ID is " + bytecodeFileId);

  //Deploy the contract instance
  const contractTx = await new ContractCreateTransaction()
    //The bytecode file ID
    .setBytecodeFileId(bytecodeFileId)
    //The max gas to reserve
    .setGas(2000000);
  //Submit the transaction to the Hedera test network
  const contractResponse = await contractTx.execute(client);
  //Get the receipt of the file create transaction
  const contractReceipt = await contractResponse.getReceipt(client);
  //Get the smart contract ID
  const newContractId = contractReceipt.contractId;

  //Log the smart contract ID
  console.log("The smart contract ID is " + newContractId);

  // update the env file with the new contract ID, token ID, and treasury account ID and private key
  let envConfig = {};
  if (fs.existsSync(".env")) {
    envConfig = dotenv.parse(fs.readFileSync(".env"));
  }

  // Update the necessary key-value pairs
  envConfig["TOKEN_ID"] = tokenId;
  envConfig["TREASURY_ACCOUNT_ID"] = treasuryAccountId;
  envConfig["CONTRACT_ID"] = newContractId;
  envConfig["TREASURY_PRIVATE_KEY"] = treasuryKey;

  // Convert the updated config back to a string
  const updatedEnvConfig = Object.keys(envConfig)
    .map((key) => `${key}=${envConfig[key]}`)
    .join("\n");

  // Write the updated config back to the .env file
  fs.writeFileSync(".env", updatedEnvConfig, (err) => {
    if (err) {
      console.error("Error writing to .env file:", err);
    } else {
      console.log(".env file updated successfully");
    }
  });

  //Associate the token to an account using the SDK
  const transaction = new TokenAssociateTransaction()
    .setAccountId(accountIdTest)
    .setTokenIds([tokenId])
    .freezeWith(client);
  console.log("transaction");
  //Sign the transaction with the client
  const signTx = await transaction.sign(accountKeyTest);
  console.log("signTx");
  //Submit the transaction
  const submitAssociateTx = await signTx.execute(client);
  console.log("submitAssociateTx");
  //Get the receipt
  const txReceipt = await submitAssociateTx.getReceipt(client);
  console.log("txReceipt");
  //Get transaction status
  const txStatus = txReceipt.status;

  console.log("The associate transaction was " + txStatus.toString());

  //Approve the token allowance
  const transactionAllowance = new AccountAllowanceApproveTransaction()
    .approveTokenAllowance(tokenId, treasuryAccountId, newContractId, 5) //approve 5 tokens
    .freezeWith(client);
  //Sign the transaction with the owner account key
  const signTxAllowance = await transactionAllowance.sign(treasuryKey);
  //Sign the transaction with the client operator private key and submit to a Hedera network
  const txResponseAllowance = await signTxAllowance.execute(client);
  //Request the receipt of the transaction
  const receiptAllowance = await txResponseAllowance.getReceipt(client);
  //Get the transaction consensus status
  const transactionStatusAllowance = receiptAllowance.status;

  console.log(
    "The transaction consensus status for the allowance function is " +
      transactionStatusAllowance.toString()
  );

  //Transfer the new token to the account
  //Contract function params need to be in the order of the parameters provided in the tokenTransfer contract function
  const tokenTransfer = new ContractExecuteTransaction()
    .setContractId(newContractId)
    .setGas(2000000)
    .setFunction(
      "tokenTransfer",
      new ContractFunctionParameters()
        //The ID of the token
        .addAddress(tokenId.toSolidityAddress())
        //The account to transfer the tokens from
        .addAddress(treasuryAccountId.toSolidityAddress())
        //The account to transfer the tokens to
        .addAddress(accountIdTest.toSolidityAddress())
        //The number of tokens to transfer
        .addInt64(5)
    );
  console.log("tokenTransfer");
  //Sign the token transfer transaction with the treasury account to authorize the transfer and submit
  const signTokenTransfer = await tokenTransfer
    .freezeWith(client)
    .sign(treasuryKey);
  console.log("signTokenTransfer");
  //Submit transfer transaction
  const submitTransfer = await signTokenTransfer.execute(client);
  console.log("submittransfer");
  //Get transaction status
  const transferTxStatus = await (
    await submitTransfer.getReceipt(client)
  ).status;

  //Get the transaction status
  console.log("The transfer transaction status " + transferTxStatus.toString());

  //Verify your account received the 10 tokens
  const newAccountBalance = new AccountBalanceQuery()
    .setAccountId(accountIdTest)
    .execute(client);

  console.log(
    "My new account balance is " + (await newAccountBalance).tokens.toString()
  );
  process.exit(0);
}

void initHTSToken();
