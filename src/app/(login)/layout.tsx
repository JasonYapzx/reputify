import Providers from "@/lib/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import { NavbarApp } from "@/components/layout/navbarApp";

export const metadata: Metadata = {
  title: "Reputify",
  description: "Your reputation tokenized",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <Providers>
        <body className={cn("min-h-screen w-full bg-background flex flex-col justify-start items-center", inter.className)}>
          <NavbarApp />
          {children}
        </body>
      </Providers>
    </html>
  );
}
