import Providers from "@/lib/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import { NavbarApp } from "@/components/layout/navbarApp";
// import initWeb3 from "./initWeb3";
import {
  sendTransaction,
  checkIfTransactionsExists,
  checkIfWalletIsConnected,
  connectWallet,
  getHederaContract,
  contractAddress,
  contractABI,
} from "@/utils/transaction";
import { connect } from "http2";
import { useState, useEffect } from "react";
import { IEthereum } from "@dynamic-labs/ethereum";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useWalletAddress } from "@/components/hooks/useWalletAddress";
import { Contract } from "ethers";

export const metadata: Metadata = {
  title: "Shadcn - Landing template",
  description: "Landing template from Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [ethereum, setEthereum] = useState<IEthereum | null>(null);


  useEffect(() => {}, []);

  const [primaryWalletAddress, signer] = useWalletAddress();
  console.log(checkIfWalletIsConnected());
  console.log(connectWallet());
  console.log(checkIfTransactionsExists());
  console.log(getHederaContract());

  const contract = new Contract(contractAddress, contractABI, signer);
  console.log(contract)
  console.log(contract.stake(1, true, 1))

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <Providers>
        <body className={cn("min-h-screen bg-background", inter.className)}>
          <NavbarApp />
          {children}
        </body>
      </Providers>
    </html>
  );
}
