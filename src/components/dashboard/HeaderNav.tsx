"use client";
import Logo from "../ui/Logo";
import Link from "next/link";
import { useMediaQuery } from "@/lib/mediaQuery";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const HeaderNav = () => {
  const notDesktop = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {notDesktop ? (
        <MobileMenu />
      ) : (
        <>
          <Link href="/dashboard">
            <Logo />
          </Link>
          <nav>
            <ul className="hidden items-center gap-8 text-sm text-muted-foreground font-medium *:hover:text-foreground md:flex *:transition">
              <li>
                <Link href="/transactions">Transactions</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default HeaderNav;
