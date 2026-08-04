import UserDropDown from "../user/UserDropDown";
import ThemeButton from "../ThemeButton";
import Link from "next/link";
import Logo from "../ui/Logo";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex justify-between items-center w-full m-auto h-16 max-w-3xl px-4 sm:px-6">
        <Link href="/dashboard">
          <Logo />
        </Link>
        <nav>
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground font-medium *:hover:text-foreground md:flex *:transition">
            <li>
              <Link href='/transactions'>Transactions</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeButton />
          <UserDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
