import { signInAction } from "@/_actions/auth/actions";
import SignInContent from "@/components/signIn/SignInContent";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const errorMessage = error ? 'SignIn error, please try again in a few minutes' : null;

  return (
    <form
      action={signInAction}
      className="flex items-center justify-center p-4 bg-background min-h-screen"
    >
      <SignInContent errorMessage={errorMessage}/>
    </form>
  );
}
