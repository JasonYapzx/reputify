import { JsonRpcApiProvider } from "ethers/providers";
import { Contract } from "ethers";
import { url } from "inspector";

export default async function initWeb3() {
  //   const connectWallet = async () => {
  //     if (window.ethereum) {
  //       try {
  //         // Request account access if needed
  //         await window.ethereum.request({ method: "eth_requestAccounts" });

  //         console.log("Connected to MetaMask");
  //       } catch (error) {
  //         console.error("User denied account access:", error);
  //       }
  //     } else {
  //       alert("Please install MetaMask to use this feature.");
  //     }
  //   };
  //   await connectWallet();

  const provider = new JsonRpcApiProvider("https://testnet.hashio.io/api/");

  const signer = provider.getSigner();

  const stakeTokens = async () => {
    try {
      setLoading(true);

      // Get contract instance
      const stakingContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // Call the stake function on the contract
      const tx = await stakingContract.stake(amount, isPositive, postId);

      // Wait for transaction to be mined
      await tx.wait();
      console.log("Staked successfully:", tx);
      alert("Tokens staked successfully!");
    } catch (error) {
      console.error("Error staking tokens:", error);
      alert("Failed to stake tokens");
    } finally {
      setLoading(false);
    }
  };

  // Function to Unstake Tokens
  const unstakeTokens = async (predictionOutcome) => {
    try {
      setLoading(true);

      // Get contract instance
      const stakingContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // Call the unstake function on the contract
      const tx = await stakingContract.unstake(predictionOutcome, postId);

      // Wait for transaction to be mined
      await tx.wait();
      console.log("Unstaked successfully:", tx);
      alert("Tokens unstaked successfully!");
    } catch (error) {
      console.error("Error unstaking tokens:", error);
      alert("Failed to unstake tokens");
    } finally {
      setLoading(false);
    }
  };
  return { stakeTokens, unstakeTokens };
  //   // Smart contract address on the Hedera testnet (replace with your contract's address)
  //   const contractAddress = "0x922932A05d6De78C94eB6CbedB99B72957B752f8"; // EVM-compatible address

  //   // Contract ABI (replace with your contract's ABI)
  //   const contractABI = [
  //     {
  //       inputs: [
  //         { internalType: "address", name: "tokenAddress", type: "address" },
  //         { internalType: "address", name: "initialOwner", type: "address" },
  //       ],
  //       stateMutability: "nonpayable",
  //       type: "constructor",
  //     },
  //     {
  //       inputs: [{ internalType: "address", name: "owner", type: "address" }],
  //       name: "OwnableInvalidOwner",
  //       type: "error",
  //     },
  //     {
  //       inputs: [{ internalType: "address", name: "account", type: "address" }],
  //       name: "OwnableUnauthorizedAccount",
  //       type: "error",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "previousOwner",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "newOwner",
  //           type: "address",
  //         },
  //       ],
  //       name: "OwnershipTransferred",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "user",
  //           type: "address",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "int64",
  //           name: "reward",
  //           type: "int64",
  //         },
  //       ],
  //       name: "RewardPaid",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "user",
  //           type: "address",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "int64",
  //           name: "amount",
  //           type: "int64",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "bool",
  //           name: "isPositive",
  //           type: "bool",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "string",
  //           name: "postId",
  //           type: "string",
  //         },
  //       ],
  //       name: "Staked",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "user",
  //           type: "address",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "int64",
  //           name: "amount",
  //           type: "int64",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "int64",
  //           name: "reward",
  //           type: "int64",
  //         },
  //       ],
  //       name: "Unstaked",
  //       type: "event",
  //     },
  //     {
  //       inputs: [],
  //       name: "owner",
  //       outputs: [{ internalType: "address", name: "", type: "address" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "string", name: "", type: "string" }],
  //       name: "posts",
  //       outputs: [
  //         { internalType: "address", name: "originalPoster", type: "address" },
  //         { internalType: "int64", name: "totalStaked", type: "int64" },
  //         { internalType: "int64", name: "totalPositiveStake", type: "int64" },
  //         { internalType: "int64", name: "totalNegativeStake", type: "int64" },
  //       ],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "renounceOwnership",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "int64", name: "amount", type: "int64" },
  //         { internalType: "bool", name: "isPositive", type: "bool" },
  //         { internalType: "string", name: "postId", type: "string" },
  //       ],
  //       name: "stake",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "address", name: "", type: "address" }],
  //       name: "stakes",
  //       outputs: [
  //         { internalType: "int64", name: "amount", type: "int64" },
  //         { internalType: "bool", name: "isPositive", type: "bool" },
  //         { internalType: "string", name: "postId", type: "string" },
  //       ],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "token",
  //       outputs: [
  //         { internalType: "contract Reputify", name: "", type: "address" },
  //       ],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
  //       name: "transferOwnership",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "bool", name: "predictionOutcome", type: "bool" },
  //         { internalType: "string", name: "postId", type: "string" },
  //       ],
  //       name: "unstake",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //   ];

  //   async function callContractFunction() {
  //     try {
  //       // Example of calling a read-only function (e.g., getValue())
  //       const value = await contract.getValue();
  //       console.log("Contract value:", value.toString());

  //       // Example of calling a state-changing function (e.g., setValue)
  //       const signer = provider.getSigner();

  //       const stakingContract = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         signer
  //       );
  //       const tx = await stakingContract.unstake(predictionOutcome, postId);

  //       //   const contractWithSigner = contract.connect(signer);

  //       // Send a transaction to update the contract
  //       //   const tx = await contractWithSigner.setValue(42); // Replace with your contract function
  //       //   await tx.wait(); // Wait for the transaction to be mined
  //       //   console.log("Transaction hash:", tx.hash);
  //     } catch (error) {
  //       console.error("Error interacting with the contract:", error);
  //     }
  //   }

  //   callContractFunction();
}
