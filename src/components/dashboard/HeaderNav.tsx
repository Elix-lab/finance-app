/* 
   Header Navigation - authenticated view
   Changes based on window width
*/

"use client";

import Logo from "../ui/Logo";
import Link from "next/link";
import { useMediaQuery } from "@/lib/mediaQuery";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const HeaderNav = () => {
  const path = usePathname()
  // Boolean based on window width
  const notDesktop = useMediaQuery("(max-width: 640px)");
  return (
    <>
      {notDesktop ? (
        // Mobile view
        <MobileMenu path={path}/>
      ) : (
        // Desktop view
        <>
          <Link href="/dashboard">
            <Logo />
          </Link>
          <nav>
            <ul className="hidden items-center gap-8 text-sm font-light *:hover:text-foreground sm:flex *:transition">
              <li>
                <Link href="/transactions" className={clsx(path === '/transactions' ? 'text-foreground':'text-muted-foreground')}>Transactions</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default HeaderNav;
