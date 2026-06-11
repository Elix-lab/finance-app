import Link from "next/link";
import { Button } from "../ui/button";

function NavBar() {
    return(
        <header className="flex justify-between items-center py-3 px-5 bg-white">
            {/* Logo */}
            <Link href="/">
                <img src="/CashWell.png" alt="CashWell logo" className="w-12"/>
            </Link>
            {/* Nav */}
            <nav>
                <ul>
                    <Button asChild>
                        <Link href="/dashboard">Start Now</Link>
                    </Button>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;