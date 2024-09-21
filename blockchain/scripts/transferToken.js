import {
    AccountAllowanceApproveTransaction,
    AccountId,
    Client,
    ContractExecuteTransaction,
    ContractFunctionParameters,
    ContractId,
    PrivateKey,
    TokenAssociateTransaction,
    TokenId
} from "@hashgraph/sdk";
import dotenv from "dotenv";
const envFilePath = "../.env";

const transferTokens = async (recipientAccountId, amount) => {
  dotenv.config({ path: envFilePath });
  const accountIdTest = AccountId.fromString(process.env.TOKEN_OPERATOR_ID);
  const accountKeyTest = PrivateKey.fromStringED25519(
    process.env.TOKEN_OPERATOR_KEY
  );
  const client = Client.forTestnet();
  client.setOperator(accountIdTest, accountKeyTest);

  // Retrieve tokenId, treasuryAccountId, and contractId from .env
  const tokenId = TokenId.fromString(process.env.TOKEN_ID);
  const treasuryAccountId = AccountId.fromString(
    process.env.TOKEN_TREASURY_ACCOUNT_ID
  );
  const contractId = ContractId.fromString(process.env.TOKEN_CONTRACT_ID);
  const treasuryKey = PrivateKey.fromStringED25519(
    process.env.TOKEN_TREASURY_KEY
  );

  //Approve the token allowance
  const transactionAllowance = new AccountAllowanceApproveTransaction()
    .approveTokenAllowance(tokenId, treasuryAccountId, contractId, amount)
    .freezeWith(client);
  const signTxAllowance = await transactionAllowance.sign(treasuryKey);
  const txResponseAllowance = await signTxAllowance.execute(client);
  const receiptAllowance = await txResponseAllowance.getReceipt(client);
  const transactionStatusAllowance = receiptAllowance.status;
  console.log(
    "The transaction consensus status for the allowance function is " +
      transactionStatusAllowance.toString()
  );

  // Ensure recipient is associated with the token
  const associateTransaction = new TokenAssociateTransaction()
    .setAccountId(recipientAccountId)
    .setTokenIds([tokenId])
    .freezeWith(client);
  const signAssociateTx = await associateTransaction.sign(accountKeyTest);
  await signAssociateTx.execute(client);
  const tokenTransfer = new ContractExecuteTransaction()
    .setContractId(contractId)
    .setGas(2000000)
    .setFunction(
      "tokenTransfer",
      new ContractFunctionParameters()
        .addAddress(tokenId.toSolidityAddress()) // Token ID (in Solidity address format)
        .addAddress(treasuryAccountId.toSolidityAddress()) // Sender address (treasury account)
        .addAddress(recipientAccountId.toSolidityAddress()) // Recipient address
        .addInt64(amount) // Amount of tokens to transfer
    );
  const signTokenTransfer = await tokenTransfer
    .freezeWith(client)
    .sign(accountKeyTest);
  const submitTransfer = await signTokenTransfer.execute(client);
  const transferReceipt = await submitTransfer.getReceipt(client);
  console.log(
    "Transfer transaction status: " + transferReceipt.status.toString()
  );
  process.exit(0);
};

// Example usage: Transfer 10 tokens to account
await transferTokens(AccountId.fromString("0.0.4866141"), 10);
