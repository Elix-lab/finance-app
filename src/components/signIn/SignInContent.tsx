/* 
Content to show in SignIn page
In case the signIn is processing it renders a loading screen
*/

"use client";
import LoadingScreen from "../LoadingScreen";
import { FcGoogle } from "react-icons/fc";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/shadCn/button";
import Link from "next/link";
import Logo from "../ui/Logo";
import { signInAction } from "@/_actions/auth/actions";

// Prop´s type
type ErrorMsg = {
  errorMessage: string | null;
};

const SignInContent = ({ errorMessage }: ErrorMsg) => {
  const { pending } = useFormStatus();

  // CASE: form is pending, show Loading Screen
  if (pending) return <LoadingScreen />;

  // CASE: default
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
            <h1 className="text-2xl font-bold tracking-tight">Welcome</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to start tracking!
            </p>
          </div>

          {/* Form */}
          <form action={signInAction} className="mt-8">
            <>
              <Button
                type="submit"
                variant="outline"
                size="lg"
                className="w-full rounded-xl border border-border h-10 sm:gap-3 "
              >
                <FcGoogle className="w-4" aria-hidden />
                Continue with Google
              </Button>
              <p className="text-red-500 text-xs">{errorMessage}</p>
            </>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignInContent;
