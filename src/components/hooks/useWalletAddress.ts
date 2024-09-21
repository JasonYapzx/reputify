import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

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
