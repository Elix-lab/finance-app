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
        {/* <button className="cursor-pointer w-9 ring-1 ring-border rounded-full overflow-hidden hover:ring-primary focus-visible:outline-primary transition"> */}
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
        {/* </button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
