'use client'

import Link from "next/link";
import { Button } from "../ui/shadCn/button";

function NavBar() {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
    }

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: "smooth"})
    }

  return (
    <header className="sticky top-0 border-b border-gray-200 bg-background/80 backdrop-blur-md ">
      <div className="flex justify-between items-center py-2 px-4 max-w-6xl lg:px-12 m-auto">
        {/* Logo */}
        <Link href="/">
          <img src="/CashWell.png" alt="CashWell logo" className="w-12" onClick={scrollToTop}/>
        </Link>
        {/* Nav */}
        <nav>
          <ul className="hidden md:flex gap-5 text-sm text-muted-foreground font-medium">
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('valueProposition')}>Benefits</button>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('thePlan')}>How it works</button>
            </li>
          </ul>
        </nav>
        <Button asChild className="bg-brand font-semibold hover:bg-brand/80">
          <Link href="/dashboard">Start Tracking</Link>
        </Button>
      </div>
    </header>
  );
}

export default NavBar;
