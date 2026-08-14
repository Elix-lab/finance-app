/* 
Dropdown button to manage user's session
Uses DropdownMenu from ShadCn
*/

import { auth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/shadCn/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { SignOutButton } from "../auth/SignOutButton";
import { Button } from "../ui/shadCn/button";

const UserDropDown = async () => {
  const session = await auth();
  const userImgSrc = session?.user?.image ?? "";
  const userName = session?.user?.name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Button shows user's image or generic icon */}
        <Button className="overflow-hidden rounded-full p-0 size-10">
          {session?.user?.image ? (
            <img
              src={userImgSrc}
              alt="user image"
              referrerPolicy="no-referrer"
            />
          ) : (
            <FaUser />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* User name */}
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* SignOut button */}
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
