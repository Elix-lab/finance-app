"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import LoadingScreen from "../LoadingScreen";

export default function SessionGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center p-4 min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <div className="flex items-center justify-center p-4 min-h-screen">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-8 shadow-sm shadow-gray-300 w-sm sm:w-lg max-w-lg h-96 max-h-96">
            <div className="text-center">
              <h2 className="text-xl font-medium">Your session has expired</h2>
              <p className="text-sm">Please sign in again to continue.</p>
            </div>
            <Button variant="default" asChild>
              <Link href="/signIn">
                <img src="/CashWell.png" alt="CashWell logo" className="w-4" />
                Go to sign in
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
