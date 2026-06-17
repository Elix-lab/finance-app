"use client";

import Link from "next/link";
import { Button } from "../ui/button";

function Footer() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="sticky top-0 border-t border-gray-200">
      <div className="flex flex-col gap-3 md:grid grid-cols-3 md:items-center py-2 px-4 max-w-6xl lg:px-12 m-auto min-h-30">
        {/* Logo */}
        <Link href="/" className="col-start-1">
          <img
            src="/CashWell.png"
            alt="CashWell logo"
            className="w-12"
            onClick={scrollToTop}
          />
        </Link>
        {/* Nav */}
        <nav className="col-start-2">
          <ul className="flex flex-col gap-1 md:flex-row md:gap-5 text-sm text-muted-foreground font-medium justify-center">
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("valueProposition")}
              >
                Benefits
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => handleScroll("thePlan")}
              >
                How it works
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-gray-100">
        <p className="py-5 text-center text-sm text-muted-foreground">2026 CashWell. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
