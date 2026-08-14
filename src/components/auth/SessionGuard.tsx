/* 
  Render content base on the user's Session.
  - If session is loading: shows loading screen
  - If session doesn't exist(expired): Displays a page to make the user aware of that and a button that redirects to the signIn page.
*/

"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/shadCn/button";
import LoadingScreen from "../LoadingScreen";
import Logo from "../ui/Logo";

const SessionGuard = ({ children }: { children: React.ReactNode }) => {
  // Session object and status
  const { data: session, status } = useSession();

  // Renders loading screen
  if (status === "loading") {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <LoadingScreen />
      </main>
    );
  }

  // Renders expired session page
  if (!session) {
    return (
      <main className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <Link href="/" className="mb-5">
          <Logo />
        </Link>

        {/* Main Card */}
        <div className="bg-card border border-border max-w-md rounded-2xl w-full overflow-hidden">
          {/* Top green line */}
          <div className="h-1.5 bg-primary w-full"></div>
          {/* Content */}
          <div className="p-8 sm:p-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight">
                Your session has expired
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in again to continue.
              </p>
            </div>

            {/* Back to signIn button */}
            <div className="mt-8">
              <>
                <Link href="/signIn">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl border border-border h-10 sm:gap-3 "
                  >
                    Go to Sign In Page
                  </Button>
                </Link>
              </>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
};

export default SessionGuard;
