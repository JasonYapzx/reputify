//singular place where frontend and blockchain talk to each other
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
// import { contractABI, contractAddress } from "../utils/constants";
// export const TransactionContext = React.createContext();
// const { ethereum } = window; // we have this because we have metamask

export const contractAddress = "0x922932A05d6De78C94eB6CbedB99B72957B752f8"; // EVM-compatible address
export const contractABI = [
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "address", name: "initialOwner", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "reward",
        type: "int64",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "amount",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPositive",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "postId",
        type: "string",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "amount",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "reward",
        type: "int64",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "posts",
    outputs: [
      { internalType: "address", name: "originalPoster", type: "address" },
      { internalType: "int64", name: "totalStaked", type: "int64" },
      { internalType: "int64", name: "totalPositiveStake", type: "int64" },
      { internalType: "int64", name: "totalNegativeStake", type: "int64" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int64", name: "amount", type: "int64" },
      { internalType: "bool", name: "isPositive", type: "bool" },
      { internalType: "string", name: "postId", type: "string" },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakes",
    outputs: [
      { internalType: "int64", name: "amount", type: "int64" },
      { internalType: "bool", name: "isPositive", type: "bool" },
      { internalType: "string", name: "postId", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract Reputify", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "predictionOutcome", type: "bool" },
      { internalType: "string", name: "postId", type: "string" },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// export const getHederaContract = () => {
//   const provider = new ethers.providers.Web3Provider(ethereum); // TODO: Use Dynamic
//   const signer = provider.getSigner();

//   const transactionContract = new ethers.Contract(
//     contractAddress,
//     contractABI,
//     signer
//   );

//   return transactionContract;
// };

// export const checkIfTransactionsExists = async () => {
//   try {
//     if (ethereum) {
//       const transactionsContract = getEthereumContract();
//       const currentTransactionCount =
//         await transactionsContract.getTransactionCount();
//       console.log(currentTransactionCount);
//       // window.localStorage.setItem("transactionCount", currentTransactionCount);
//     }
//   } catch (error) {
//     console.log(error);

//     throw new Error("No ethereum object");
//   }
// };

export const checkIfWalletIsConnected = () => {
  if (!ethereum) return alert("Please connect to a metamask wallet");
};

// const checkIfTransactionsExists = async () => {
//     try {
//       if (ethereum) {
//         const transactionsContract = getEthereumContract();
//         const currentTransactionCount = await transactionsContract.getTransactionCount();

//         window.localStorage.setItem("transactionCount", currentTransactionCount);
//       }
//     } catch (error) {
//       console.log(error);

//       throw new Error("No ethereum object");
//     }
//   };

// TODO: Check Dynamic wallet connection
// export const connectWallet = async () => {
//   try {
//     if (!ethereum) return alert("Please connect to a metamask wallet");

//     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//     setcurrentAccount(accounts[0]);
//     window.location.reload();
//   } catch (error) {
//     console.log(error);
//     throw new Error("No ethereum object");
//   }
// };

// export const sendTransaction = async (
//   amount: number,
//   isPositive: Boolean,
//   postId: number
// ) => {
//   try {
//     if (!ethereum) return alert("Please connect to a metamask wallet");
//     const transactionContract = getEthereumContract();

    // await ethereum.request({ //used to send ethereum from one address to another
    //     method: 'eth_sendTransaction',
    //     params: [{
    //         from: currentAccount,
    //         to: addressTo,
    //         gas:'0x5208', //values in ETH network are in hexadecimal
    //         value:parsedAmount._hex
    //     }]
    // })

//     const transactionHash = await transactionContract.stake(
//       amount,
//       isPositive,
//       postId
//     );
//     console.log(transactionHash);
//   } catch (error) {
//     console.log(error);
//     throw new Error("Stake failed");
//   }
// };
