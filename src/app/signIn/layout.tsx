import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Sign in to CashWell",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
