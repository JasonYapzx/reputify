import { NavbarApp } from "@/components/layout/navbarApp";
import Providers from "@/lib/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
// import initWeb3 from "./initWeb3";
// import {
//   checkIfTransactionsExists,
//   checkIfWalletIsConnected,
//   connectWallet,
//   contractABI,
//   contractAddress,
//   getHederaContract
// } from "@/utils/transaction";
import { useContract } from "@/components/hooks/useSigner";

export const metadata: Metadata = {
  title: "Shadcn - Landing template",
  description: "Landing template from Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
