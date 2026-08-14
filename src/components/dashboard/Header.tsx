import UserDropDown from "../user/UserDropDown";
import ThemeButton from "../ThemeButton";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="relative flex justify-between items-center w-full m-auto h-16 max-w-3xl px-4 sm:px-6">
        <HeaderNav />
        <div className="flex items-center gap-3">
          <ThemeButton />
          <UserDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
