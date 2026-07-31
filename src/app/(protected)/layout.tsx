import Header from "@/components/dashboard/Header";
import SessionGuard from "@/components/auth/SessionGuard";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background min-h-dvh">
      <SessionGuard>
        <Header />
        {children}
      </SessionGuard>
    </div>
  );
};

export default Layout;
