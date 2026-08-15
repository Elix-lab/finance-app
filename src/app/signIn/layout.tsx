/* SignIn Layout */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to CashWell",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
}

export default Layout;