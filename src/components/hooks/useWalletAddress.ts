import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

export function useWalletAddress() {
    const { primaryWallet } = useDynamicContext();
    const isLoggedIn = useIsLoggedIn();

    return primaryWallet?.address;
}