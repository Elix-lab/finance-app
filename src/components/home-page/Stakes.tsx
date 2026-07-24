import {
  LuReceipt,
  LuClipboardList,
  LuTrendingDown,
  LuBrain,
} from "react-icons/lu";

const stakes = [
  {
    id: 1,
    Icon: LuReceipt,
    title: "Expenses slip away",
    description:
      "Small purchases add up fast and become easy to lose track of throughout the month.",
  },
  {
    id: 2,
    Icon: LuClipboardList,
    title: "Budgeting feels heavy",
    description:
      "Spreadsheets and complicated tools make budgeting start to feel like too much work.",
  },
  {
    id: 3,
    Icon: LuTrendingDown,
    title: "Progress is invisible",
    description:
      "Without a clear picture, it becomes hard to see whether you're actually moving forward.",
  },
  {
    id: 4,
    Icon: LuBrain,
    title: "Everyday stress builds",
    description:
      "Small financial decisions create unnecessary stress when you're unsure of the bigger picture.",
  },
];

function Stakes() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl max-w-2xl mx-auto text-center">
        Money becomes harder to manage when you don&apos;t know where it&apos;s
        going.
      </h2>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stakes.map(({ id, Icon, title, description }) => (
          <li
            key={id}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="flex items-center justify-center size-11 bg-accent rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="w-5 h-5" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Stakes;
