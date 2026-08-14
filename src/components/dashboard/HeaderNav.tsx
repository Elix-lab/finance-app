/* 
   Header Navigation - authenticated view
   Changes based on window width
*/

"use client";

import Logo from "../ui/Logo";
import Link from "next/link";
import { useMediaQuery } from "@/lib/mediaQuery";
import MobileMenu from "./MobileMenu";

const HeaderNav = () => {
  // Boolean based on window width
  const notDesktop = useMediaQuery("(max-width: 640px)");
  return (
    <>
      {notDesktop ? (
        // Mobile view
        <MobileMenu />
      ) : (
        // Desktop view
        <>
          <Link href="/dashboard">
            <Logo />
          </Link>
          <nav>
            <ul className="hidden items-center gap-8 text-sm text-muted-foreground font-medium *:hover:text-foreground sm:flex *:transition">
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
