import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-8 text-center px-4">
      <h1 className="text-4xl font-bold text-balance">
        The simplest way to track your finances
      </h1>
      <p className="text-balance text-lg">
        Log income and expenses in seconds, and always know where you stand
        financially
      </p>
      <Button asChild>
        <Link href="/dashboard">Start Now</Link>
      </Button>
    </div>
  );
}

export default Hero;
