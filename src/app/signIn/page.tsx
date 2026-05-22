import { Button } from "@/components/ui/button";
import { GiMoneyStack } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { signInAction } from '@/_actions/auth/actions';

export const metadata = {
  title: "signIn",
};

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2f2f2] p-4">
      <form
        action={signInAction}
        className="flex w-full max-w-sm flex-col gap-6 rounded-xl border border-border/60 bg-white p-8 shadow-md"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <GiMoneyStack className="size-14 text-emerald-600" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Hi there!😁
          </span>
          <p className="text-sm text-muted-foreground">
            Sign In with your Google account.
          </p>
        </div>

        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="w-full gap-2 cursor-pointer"
        >
          <FcGoogle className="size-5 shrink-0" aria-hidden />
          Continue with Google
        </Button>
      </form>
    </div>
  );
}
