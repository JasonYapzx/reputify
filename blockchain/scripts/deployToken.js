import {
  AccountAllowanceApproveTransaction,
  AccountBalanceQuery,
  AccountCreateTransaction,
  AccountId,
  Client,
  ContractCreateTransaction,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  Hbar,
  PrivateKey,
  TokenAssociateTransaction,
  TokenCreateTransaction,
  TokenType,
} from "@hashgraph/sdk";
import dotenv from "dotenv";
import fs from "fs";
import * as fsPromise from "node:fs/promises";
const envFilePath = '../.env';

async function deployTokenHTS() {
  dotenv.config({ path: envFilePath });
  const accountIdTest = AccountId.fromString(process.env.TOKEN_OPERATOR_ID);
  const accountKeyTest = PrivateKey.fromStringED25519(
    process.env.TOKEN_OPERATOR_KEY
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
  const treasuryAccount = new AccountCreateTransaction()
    .setKey(treasuryKey)
    .setInitialBalance(new Hbar(5))
    .setAccountMemo("treasury account");
  const submitAccountCreateTx = await treasuryAccount.execute(client);
  //Get the receipt of the transaction
  const newAccountReceipt = await submitAccountCreateTx.getReceipt(client);
  const treasuryAccountId = newAccountReceipt.accountId;
  console.log("The new account ID is " + treasuryAccountId);

  //Create a token setup
  const createToken = new TokenCreateTransaction()
    .setTokenName("Reputify")
    .setTokenSymbol("RPT")
    .setTokenType(TokenType.FungibleCommon)
    .setTreasuryAccountId(treasuryAccountId)
    .setInitialSupply(1000000);
  const signTokenTx = await createToken.freezeWith(client).sign(treasuryKey);
  const submitTokenTx = await signTokenTx.execute(client);
  const tokenId = await (await submitTokenTx.getReceipt(client)).tokenId;
  console.log("The new token ID is " + tokenId);

  // Deploy Smart contract
  const solidityFileName = "Reputify_sol_Reputify";
  const evmBytecode = await fsPromise.readFile(
    `../contracts/${solidityFileName}.bin`,
    {
      encoding: "utf8",
    }
  );
  const scDeploy = new ContractCreateTransaction()
    .setBytecode(Buffer.from(evmBytecode.toString(), "hex"))
    .setGas(1_000_000);
  const scDeployTx = await scDeploy.execute(client);
  const scDeployReceipt = await scDeployTx.getReceipt(client);
  console.log("HSCS ContractCreateTransaction", scDeployReceipt);
  const newContractId = scDeployReceipt.contractId;
  console.log("The smart contract ID is " + newContractId);

  // update the env file with the new contract ID, token ID, and treasury account ID and private key
  let envConfig = {};
  if (fs.existsSync(envFilePath)) {
    envConfig = dotenv.parse(fs.readFileSync(envFilePath));
  }

  // Update the necessary key-value pairs
  // NOTE: Storing treasury key in the env file is not a common practice due to security reasons. Since this is a hackathon, we will momentarily disregard jarring security concerns.
  envConfig["TOKEN_ID"] = tokenId;
  envConfig["TOKEN_TREASURY_ACCOUNT_ID"] = treasuryAccountId;
  envConfig["TOKEN_CONTRACT_ID"] = newContractId;
  envConfig["TOKEN_TREASURY_KEY"] = treasuryKey;

  // Convert the updated config back to a string
  const updatedEnvConfig = Object.keys(envConfig)
    .map((key) => `${key}=${envConfig[key]}`)
    .join("\n");

  // Write the updated config back to the .env file
  fs.writeFileSync(envFilePath, updatedEnvConfig, (err) => {
    if (err) {
      console.error("Error writing to .env file:", err);
    } else {
      console.log(".env file updated successfully");
    }
  });

  //Associate the token with Operator account
  const transaction = new TokenAssociateTransaction()
    .setAccountId(accountIdTest)
    .setTokenIds([tokenId])
    .freezeWith(client);
  const signTx = await transaction.sign(accountKeyTest);
  const submitAssociateTx = await signTx.execute(client);
  const txReceipt = await submitAssociateTx.getReceipt(client);
  const txStatus = txReceipt.status;
  console.log("The associate transaction was " + txStatus.toString());

  //Approve smart contract to withdraw tokens from treasury account
  const testTransferAmount = Math.floor(Math.random() * 10) + 1;
  const transactionAllowance = new AccountAllowanceApproveTransaction()
    .approveTokenAllowance(
      tokenId,
      treasuryAccountId,
      newContractId,
      testTransferAmount
    )
    .freezeWith(client);
  const signTxAllowance = await transactionAllowance.sign(treasuryKey);
  const txResponseAllowance = await signTxAllowance.execute(client);
  const receiptAllowance = await txResponseAllowance.getReceipt(client);
  const transactionStatusAllowance = receiptAllowance.status;
  console.log(
    "The transaction consensus status for the allowance function is " +
      transactionStatusAllowance.toString()
  );

  //Transfer the new token to the account
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
        .addInt64(testTransferAmount)
    );
  const signTokenTransfer = await tokenTransfer
    .freezeWith(client)
    .sign(treasuryKey);
  const submitTransfer = await signTokenTransfer.execute(client);
  const transferTxStatus = await (
    await submitTransfer.getReceipt(client)
  ).status;
  console.log("The transfer transaction status " + transferTxStatus.toString());

  //Verify your account received the x tokens
  const newAccountBalance = new AccountBalanceQuery()
    .setAccountId(accountIdTest)
    .execute(client);
  console.log(
    "My new account balance is " + (await newAccountBalance).tokens.toString()
  );
  process.exit(0)
}

void deployTokenHTS();
