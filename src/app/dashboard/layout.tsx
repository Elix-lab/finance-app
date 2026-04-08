import Header from "@/components/dashboard/Header";
import SessionGuard from "@/components/auth/SessionGuard";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SessionGuard>
        <Header />
        {children}
      </SessionGuard>
    </div>
  );
};

export default Layout;
