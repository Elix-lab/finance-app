import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "../ui/shadCn/sheet";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer rounded-lg">
          <IoIosMenu className="size-8 p-1" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-card">
          <SheetHeader>
            <SheetTitle className="border-b border-boder pb-4">Menu</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-y-1 px-4 text-xl *:focus-within:outline-none *:focus-within:text-primary *:hover:text-primary *:transition *:w-fit [&>li>a]:focus-within:outline-none">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/transactions">Transactions</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
