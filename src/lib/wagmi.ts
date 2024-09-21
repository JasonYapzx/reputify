
import { http, createConfig } from "wagmi";

import { mainnet } from "wagmi/chains";

import { getOrMapViemChain } from '@dynamic-labs/ethereum-core';

const customEvmNetworks = [
  {
    blockExplorerUrls: ['https://hashscan.io/testnet'],
    chainId: 296,
    chainName: 'Hedera Testnet',
    iconUrls: ["https://cryptologos.cc/logos/hedera-hbar-logo.svg?v=035"],
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

export const config = createConfig({
  chains: [mainnet, ...customEvmNetworks.map(getOrMapViemChain)],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [mainnet.id]: http('https://testnet.hashio.io/api'),
    [296]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
