import Link from "next/link";
import { LuCirclePlus, LuEye, LuRocket } from "react-icons/lu";

const steps = [
  {
    num: "01",
    Icon: LuCirclePlus,
    title: "Add your income and expenses",
    description: "Quickly log the money coming in and going out.",
  },
  {
    num: "02",
    Icon: LuEye,
    title: "See where you stand",
    description:
      "Understand your balance, spending, and financial situation at a glance.",
  },
  {
    num: "03",
    Icon: LuRocket,
    title: "Move forward with confidence",
    description:
      "Make everyday financial decisions with more clarity and less stress.",
  },
];

function ThePlan() {
  return (
    <section id="thePlan" className="bg-secondary/40 scroll-mt-16">
      <div className="flex flex-col items-center gap-14 max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Build financial clarity step by step
        </h2>

        <ul className="grid gap-6 md:grid-cols-3">
          {steps.map(({ num, Icon, title, description }) => (
            <li
              key={num}
              className="group bg-card border border-border p-7 rounded-2xl hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition duration-300"
            >
              {/* Icon and number */}
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center size-11 bg-primary text-primary-foreground rounded-xl">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-2xl font-bold text-border group-hover:text-primary/30 transition">
                  {num}
                </span>
              </div>
              <h3 className="mt-6 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/signIn"
          className="text-xs font-medium bg-primary text-primary-foreground rounded-full px-2.5 py-1.5 hover:translate-y-0.5 hover:bg-primary/90 transition"
        >
          Start Tracking Today!
        </Link>
      </div>
    </section>
  );
}

export default ThePlan;
