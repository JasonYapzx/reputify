/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useAuthToken } from "@/components/hooks/useAuthToken";
import { useWalletAddress } from "@/components/hooks/useWalletAddress";

export default function WalletPage() {
    const walletAddress = useWalletAddress();
    const authToken = useAuthToken();
    return (
        <>
            {walletAddress && authToken && (
                <div>
                    <div>Get Wallet Address: {walletAddress}</div>
                    <div>Get Auth Token: {authToken}</div>
                </div>
            )}
        </>
    );
}
