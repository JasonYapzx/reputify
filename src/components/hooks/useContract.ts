import { contractABI, contractAddress } from "@/utils/transaction";
import { getSigner } from "@dynamic-labs/ethers-v6";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Contract } from "ethers";

export async function useContract() {
  const { primaryWallet } = useDynamicContext();
  if (!primaryWallet) {
    return null;
  }
  const signer = await getSigner(primaryWallet);
  const contract = new Contract(contractAddress, contractABI, signer);
return contract;
}