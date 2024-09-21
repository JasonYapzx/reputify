"use client";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { QueryClient } from "@tanstack/react-query";
import { Github, Menu, VenetianMask } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { hederaTestnet } from "viem/chains";
import { createConfig, http } from "wagmi";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  // {
  //   href: "/form",
  //   label: "Form",
  // },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/user",
    label: "User",
  },
];

export const NavbarApp = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <VenetianMask className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 p-1 border text-white" />
        Reputify
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div className="h-full">
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <VenetianMask className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 p-1 border text-white" />
                    Reputify
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
              <div className="flex items-end pt-5">
                <DynamicWidget />
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/JasonYapzx/reputify"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
      <div className="pl-5">
        <DynamicWidget />
      </div>
    </header>
  );
};
