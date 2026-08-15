/* Main SignIn page */

import SignInContent from "@/components/signIn/SignInContent";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) => {
  // Capturing possible error
  const { error } = await searchParams;
  const errorMessage = error
    ? "SignIn error, please try again in a few minutes"
    : null;

  return (
    <>
      <SignInContent errorMessage={errorMessage} />
    </>
    
  );
}

export default Page;