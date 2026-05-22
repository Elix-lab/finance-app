import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Providers({ children }: {children: ReactNode}) {
  <SessionProvider>
    {children}
  </SessionProvider>;
}
