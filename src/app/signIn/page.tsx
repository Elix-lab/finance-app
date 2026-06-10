import { signInAction } from "@/_actions/auth/actions";
import SignInContent from "@/components/signIn/SignInContent";

export default function Page() {
  return (
      <form action={signInAction} className="flex items-center justify-center p-4 bg-background min-h-screen">
        <SignInContent />
      </form>
  );
}
