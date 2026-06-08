import { auth } from "@/lib/auth";
import { SignOutButton } from "../auth/SignOutButton";
import Image from "next/image";
import UserDropDown from "../user/UserDropDown";

const Header = async () => {
  // const session = await auth();

  return (
    <div className="bg-red-200 flex justify-end py-2 px-10">
      <UserDropDown />
    </div>
  );
};

export default Header;
