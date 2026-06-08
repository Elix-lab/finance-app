import { auth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { SignOutButton } from "../auth/SignOutButton";

async function UserDropDown() {
  const session = await auth();
  const userImgSrc = session?.user?.image;
  const userName = session?.user?.name;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          {session?.user ? (
            <img
              src={userImgSrc}
              alt='user image'
              referrerPolicy="no-referrer"
              className="w-10 rounded-full"
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
