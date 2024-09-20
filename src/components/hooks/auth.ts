// 'use client'
// import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

// export function useWalletAddress() {
//     const { primaryWallet } = useDynamicContext();
//     const isLoggedIn = useIsLoggedIn();
//     if (!isLoggedIn || !primaryWallet) {
//         throw new Error('User not logged in')
//     }

//     return primaryWallet.address
// }

// export function useAuthToken() {
//     const { authToken } = useDynamicContext();
//     const isLoggedIn = useIsLoggedIn();
//     if (!isLoggedIn) {
//         throw new Error('User not logged in')
//     }

//     return authToken
// }