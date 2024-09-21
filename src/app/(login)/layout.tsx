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
} from "@/utils/transaction";
import { connect } from "http2";

export const metadata: Metadata = {
  title: "Shadcn - Landing template",
  description: "Landing template from Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(checkIfWalletIsConnected());
  console.log(connectWallet());
  console.log(checkIfTransactionsExists());
  console.log(getHederaContract());

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
