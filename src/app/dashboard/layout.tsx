import Header from "@/components/dashboard/Header";
import SessionGuard from "@/components/SessionGuard";

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
