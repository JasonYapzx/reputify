/*-
 *
 * Hedera Hardhat Example Project
 *
 * Copyright (C) 2023 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const { ethers } = require("hardhat");
const dotenv = require("dotenv");
const { TokenId, AccountId } = require("@hashgraph/sdk");
const fs = require("fs");

module.exports = async () => {
  const envFilePath = "../.env";
  dotenv.config({ path: envFilePath });
  //Assign the first signer, which comes from the first privateKey from our configuration in hardhat.config.js, to a wallet variable.
  let wallet = (await ethers.getSigners())[0];

  //Initialize a contract factory object
  //name of contract as first parameter
  //wallet/signer used for signing the contract calls/transactions with this contract
  const Lockup = await ethers.getContractFactory("StakingContract", wallet);

  //Using already initialized contract factory object with our contract, we can invoke deploy function to deploy the contract.
  //Accepts constructor parameters from our contract
  const reputifyTokenAddress = TokenId.fromString(process.env.TOKEN_ID);
  const ownerAddress = AccountId.fromString(process.env.STAKING_OPERATOR_ID);
  const lockup = await Lockup.deploy(
    reputifyTokenAddress.toSolidityAddress(),
    ownerAddress.toSolidityAddress()
  );

  //We use wait to receive the transaction (deployment) receipt, which contains contractAddress
  const contractAddress = (await lockup.deployTransaction.wait())
    .contractAddress;

  // update the env file with the new contract ID, token ID, and treasury account ID and private key
  let envConfig = {};
  if (fs.existsSync(envFilePath)) {
    envConfig = dotenv.parse(fs.readFileSync(envFilePath));
  }

  // Update the necessary key-value pairs
  // NOTE: Storing treasury key in the env file is not a common practice due to security reasons. Since this is a hackathon, we will momentarily disregard jarring security concerns.
  envConfig["STAKING_CONTRACT_ID"] = contractAddress;

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

  console.log(`Lockup deployed to: ${contractAddress}`);

  return contractAddress;
};
