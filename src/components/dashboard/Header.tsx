import UserDropDown from "../user/UserDropDown";
import Link from "next/link";

const Header = async () => {
  // const session = await auth();

  return (
    <div className="flex items-center justify-between w-full py-3 px-5 lg:max-w-6xl m-auto">
      <Link href="/dashboard">
        <img src="/CashWell.png" alt="CashWell logo" className="w-12" />
      </Link>
      <div className="">
        <UserDropDown />
      </div>
    </div>
  );
};

export default Header;
