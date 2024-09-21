"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { config } from "@/lib/wagmi";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { WagmiProvider } from "wagmi";

const evmNetworks = [
  {
    blockExplorerUrls: ['https://hashscan.io/testnet'],
    chainId: 296,
    chainName: 'Hedera Testnet',
    iconUrls: ["https://app.dynamic.xyz/assets/networks/polygon.svg"],
    name: 'Hedera',
    nativeCurrency: {
      decimals: 18,
      name: 'HBAR',
      symbol: 'HBAR',
    },
    networkId: 296,
    rpcUrls: ['https://testnet.hashio.io/api'],
    vanityName: 'Hedera Testnet',
  },
]

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const router = useRouter();

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId: "c97fa46a-8444-4316-bfc9-b60f10098938",
        walletConnectors: [EthereumWalletConnectors],
        overrides: { evmNetworks },
        events: {
          onAuthFlowClose: () => {
            console.log("onAuthFlowClose was called");
          },
          onAuthSuccess: () => {
            router.push("/dashboard");
          },
          onLogout: () => {
            router.push("/")
          }
        },
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
