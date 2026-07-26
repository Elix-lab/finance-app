"use client";

import Link from "next/link";
import Logo from "../ui/Logo";

function Footer() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="grid md:grid-cols-3 items-center gap-6 py-12 px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={scrollToTop}>
          <Logo />
        </Link>
        {/* Nav */}
        <nav>
          <ul className="flex flex-col gap-1 md:flex-row md:gap-5 text-sm text-muted-foreground font-medium justify-center *:hover:text-foreground *:transition">
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

      {/* Company rights */}
      <div className="border-t border-border/60 py-6">
        <p className="text-center text-sm text-muted-foreground">© 2026 CashWell. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
