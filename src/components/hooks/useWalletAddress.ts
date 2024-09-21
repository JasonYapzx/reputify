import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { getWeb3Provider, getSigner } from "@dynamic-labs/ethers-v6";
import { Contract, Interface, Wallet } from "ethers";

export async function useWalletAddress() {
  const { primaryWallet } = useDynamicContext();
//   if (!primaryWallet) {
//     return null;
//   }

//   const signer = await getSigner(primaryWallet);
  //   const contract = new Contract("", new Interface(["function .."]), signer);

//   return [primaryWallet?.address, signer];
return primaryWallet
}
