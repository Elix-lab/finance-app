import { auth } from "@/lib/auth";
import { SignOutButton } from "../auth/SignOutButton";
import Image from "next/image";

const Header = async () => {
    const session = await auth();


    return (
        <div className="bg flex justify-end py-2 px-5">
            {session?.user?.image ?
                (
                    <div className="flex items-center gap-2">
                        <img
                            src={session.user.image}
                            alt={session.user.name ? session.user.name : 'user image'}
                            referrerPolicy="no-referrer"
                            className="w-10 rounded-full"
                        />
                        <SignOutButton />
                    </div>
                )
                :
                (
                    <SignOutButton />
                )
            }
        </div>
    )
}

export default Header;