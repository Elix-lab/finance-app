/* 
Menu for small devices(e.g.: Mobile) 
Displays a 'hamburguer' collapsible menu
Uses ShadCN sheet
*/

import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "../ui/shadCn/sheet";
import clsx from "clsx";

const MobileMenu = ({path}: {path: string}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer rounded-lg">
          <IoIosMenu className="size-8 p-1" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-card">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="border-b border-boder pb-4"></SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-y-1 px-4 text-xl *:focus-within:outline-none *:w-fit [&>li>a]:focus-within:outline-none">
            <li>
              <Link href="/dashboard" className={clsx('focus-within:text-primary hover:text-primary transition-colors',path === '/dashboard' ? 'text-foreground':'text-muted-foreground')}>Dashboard</Link>
            </li>
            <li>
              <Link href="/transactions" className={clsx('focus-within:text-primary hover:text-primary transition-colors',path === '/transactions' ? 'text-foreground':'text-muted-foreground')}>Transactions</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
