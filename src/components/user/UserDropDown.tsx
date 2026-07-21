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

async function UserDropDown() {
  const session = await auth();
  const userImgSrc = session?.user?.image ?? "";
  const userName = session?.user?.name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer w-9 ring-1 ring-border rounded-full overflow-hidden hover:ring-primary transition">
          {session?.user?.image ? (
            <img
              src={userImgSrc}
              alt='user image'
              referrerPolicy="no-referrer"
              // className="w-9 rounded-full ring-1 ring-border hover:ring-primary transition-colors"
            />
          ) : (
            <FaUser />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropDown;
