import Header from "@/components/dashboard/Header";
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="bg-[#f2f2f2] h-screen">
            <Header />
            {children}
        </div>
    )
}

export default Layout;