import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

function Hero() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 items-center px-6 py-16 max-w-6xl mx-auto gap-12 lg:py-24">
        {/* FIRST HALF */}
        <div className="flex flex-col gap-5 items-center text-center lg:text-start lg:items-start">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-6xl text-pretty max-w-4xl">
            The simplest way to track your finances
          </h1>
          <p className="text-pretty text-lg text-muted-foreground max-w-xl mx-auto lg:text-2xl">
            Log income and expenses in seconds, and always know where you stand
            financially
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center w-full max-w-xl lg:w-fit text-sm font-medium bg-primary text-primary-foreground rounded-full px-2.5 h-9 py-1.5"
          >
            Start Tracking
          </Link>
        </div>
        {/* SECOND HALF */}
        <div>
          <DashboardMockup/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
