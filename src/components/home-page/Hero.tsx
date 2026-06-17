import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="">
      <div className="flex flex-col items-center gap-5 py-12 px-4 sm:px-8 lg:px-12 m-auto md:grid grid-cols-2 max-w-6xl">
        <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-start">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl">
            The simplest way to track your finances
          </h1>
          <p className="text-base text-muted-foreground text-balance lg:text-2xl">
            Log income and expenses in seconds, and always know where you stand
            financially
          </p>
          <Button
            asChild
            className="bg-brand font-semibold sm:p-4 lg:text-lg xl:font-bold lg:p-5 hover:bg-brand/80"
          >
            <Link href="/dashboard">Start Tracking</Link>
          </Button>
        </div>
        <img
          src="/CashWell-screenshot.svg"
          alt="CashWell app screenshot"
          className="w-sm m-auto rounded-lg border border-green-200 shadow-md shadow-green-100"
        />
      </div>
    </section>
  );
}

export default Hero;
