import { Navbar } from "@/components/layout/navbar";
import Providers from "@/lib/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

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
                <body
                    className={cn(
                        "min-h-screen bg-background",
                        inter.className
                    )}
                >
                    <Navbar />
                    {children}
                </body>
            </Providers>
        </html>
    );
}
