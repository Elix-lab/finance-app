import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col gap-5 py-12 px-4 m-auto items-center max-w-2xl lg:max-w-4xl lg:grid lg:grid-cols-2 xl:max-w-6xl">
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <h1 className="text-4xl font-bold text-center text-balance md:text-5xl lg:text-6xl lg:text-start xl:text-7xl">
          The simplest way to track your finances
        </h1>
        <p className="text-base text-muted-foreground text-center text-balance lg:text-start lg:text-xl">
          Log income and expenses in seconds, and always know where you stand
          financially
        </p>
        <Button asChild className="bg-brand font-semibold md:p-4 lg:text-lg xl:font-bold xl:p-5">
          <Link href="/dashboard">Start Tracking</Link>
        </Button>
      </div>
      <img src="/CashWell-screenshot.svg" alt="CashWell app screenshot" className="w-sm m-auto rounded-lg border border-green-200 shadow-md shadow-green-100"/>
    </section>
  );
}

export default Hero;
