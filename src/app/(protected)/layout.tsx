import Header from "@/components/dashboard/Header";
import { auth } from "../../../auth";
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    if (!session) {
        redirect('/signIn');
    }

    return (
        <div className="bg-[#f2f2f2] h-screen">
            <Header />
            {children}
        </div>
    )
}

export default Layout;