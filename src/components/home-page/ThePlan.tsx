import { Button } from "../ui/shadCn/button";
import Link from "next/link";

const steps = [
  {
    stepNum: 1,
    title: "Add your income and expenses",
    description: "Quickly log the money coming in and going out.",
  },
  {
    stepNum: 2,
    title: "See where you stand",
    description:
      "Understand your balance, spending, and financial situation at a glance.",
  },
  {
    stepNum: 3,
    title: "Move forward with confidence",
    description:
      "Make everyday financial decisions with more clarity and less stress.",
  },
];

function ThePlan() {
  return (
    <section id="thePlan" className="bg-brand/5 scroll-mt-16">
      <div className="flex flex-col items-center gap-5 m-auto py-12 px-4 sm:px-8 lg:px-12 max-w-6xl">
        <h2 className="text-2xl font-bold text-center text-balance sm:max-w-xl lg:max-w-3xl lg:text-3xl xl:text-4xl">
          Build financial clarity step by step
        </h2>
        <ul className="flex flex-col gap-3 max-w-6xl lg:grid lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.stepNum}
              className="border rounded-lg p-3 lg:p-5 shadow-md border-brand shadow-brand/15 bg-background"
            >
              <h3 className="font-medium">
                {step.stepNum}. {step.title}
              </h3>
              <p className="text-base text-muted-foreground text-balance lg:text-start">
                {step.description}
              </p>
            </li>
          ))}
        </ul>
        <Button asChild className="bg-brand font-semibold p-4 hover:bg-brand/80">
          <Link href="/dashboard">Start Tracking</Link>
        </Button>
      </div>
    </section>
  );
}

export default ThePlan;
