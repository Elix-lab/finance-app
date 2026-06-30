"use client";
import LoadingScreen from "../LoadingScreen";
import { FcGoogle } from "react-icons/fc";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type errorMsg = {
  errorMessage: string | null
}

function SignInContent({ errorMessage }: errorMsg) {
  const { pending } = useFormStatus();

  if (pending) return <LoadingScreen />;

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-8 shadow-sm shadow-gray-300 w-sm sm:w-lg max-w-lg h-96 max-h-96">
      <img src="/CashWell.png" alt="CashWell logo" className="w-30 sm:w-40" />
      <div className="text-center">
        <h2 className="font-medium text-lg sm:text-xl">Welcome</h2>
        <p className="text-xs sm:text-sm">Sign In with your Google account.</p>
      </div>

      <Button
        type="submit"
        variant="default"
        size="lg"
        className="cursor-pointer"
      >
        <FcGoogle className="w-4" aria-hidden />
        Continue with Google
      </Button>
      <p className="text-red-500 text-xs">{errorMessage}</p>
    </div>
  );
}

export default SignInContent;
