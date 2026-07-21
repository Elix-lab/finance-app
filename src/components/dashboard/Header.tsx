import UserDropDown from "../user/UserDropDown";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex justify-between items-center w-full m-auto h-16 max-w-3xl px-4 sm:px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <img src="/CashWell.png" alt="CashWell logo" className="w-8" />
          <span className="font-semibold text-lg tracking-tight text-foreground">CashWell</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeButton />
          <UserDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
