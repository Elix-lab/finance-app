import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <div className="bg-[#fafafa] h-screen">{children}</div>
                {/* {children} */}
            </main>
        </SidebarProvider>

    )
}

export default Layout;