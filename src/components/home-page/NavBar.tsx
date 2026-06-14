import Link from "next/link";
import { Button } from "../ui/button";

function NavBar() {
    return(
        <header className="flex justify-between items-center py-3 px-4 border-b-2 border-gray-200">
            {/* Logo */}
            <Link href="/">
                <img src="/CashWell.png" alt="CashWell logo" className="w-12"/>
            </Link>
            {/* Nav */}
            <nav>
                <ul>
                    <Button asChild className="bg-brand font-semibold p-4">
                        <Link href="/dashboard">Start Tracking</Link>
                    </Button>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;