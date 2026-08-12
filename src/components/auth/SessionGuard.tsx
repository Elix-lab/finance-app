"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/shadCn/button";
import LoadingScreen from "../LoadingScreen";
import Logo from "../ui/Logo";

const SessionGuard = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <LoadingScreen />
      </main>
    );
  }

  if (!session) {
    return (
      <main className="min-h-dvh flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <Link href="/" className="mb-5">
        <Logo />
      </Link>

      {/* SignIn card */}
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

          {/* Form */}
          <form action="" className="mt-8">
            <>
              <Button
                type="submit"
                variant="outline"
                size="lg"
                className="cursor-pointer w-full rounded-xl border border-border h-10 sm:gap-3 "
              >
                <Link href="/signIn">
                  Go to Sign In Page
                </Link>
              </Button>
            </>
          </form>
        </div>
      </div>
    </main>
    );
  }

  return <>{children}</>;
};

export default SessionGuard;
