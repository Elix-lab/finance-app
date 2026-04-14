"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

export default function SessionGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-full">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="h-full">
        <h2>Your session has expired</h2>
        <p>Please sign in again to continue.</p>
        <Link href="/signIn">Go to sign in</Link>
      </div>
    );
  }
  return <>{children}</>;
}
