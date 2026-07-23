"use client";

import Link from "next/link";
import ThemeButton from "../ThemeButton";
import { Button } from "../ui/shadCn/button";
import Logo from "../ui/Logo";

function NavBar() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 border-b border-border bg-background/80 backdrop-blur-md ">
      <div className="flex justify-between items-center h-16 px-6 max-w-6xl m-auto">
        {/* Logo */}
        <Link href="/" onClick={scrollToTop}>
          <Logo />
        </Link>
        {/* Nav */}
        <nav>
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground font-medium *:hover:text-foreground md:flex">
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
        <div className="flex items-center gap-2">
          <div className="hidden sm:inline">
          <ThemeButton />
          </div>
          <Link
            href="/dashboard"
            className="text-xs font-medium bg-primary text-primary-foreground rounded-full px-2.5 py-1.5"
          >
            Start Tracking
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
