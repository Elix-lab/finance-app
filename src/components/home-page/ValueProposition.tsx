import TxNatureIcon from "../ui/TxNatureIcon";
import TxFormMockup from "./TxFormMockup";

const summaries = ["income", "expense"] as const;
// Conditional rendering data
const config = {
  income: {
    label: "Total Income",
    textClass: "text-primary",
    amount: 3150,
  },
  expense: {
    label: "Total Expenses",
    textClass: "text-destructive",
    amount: 40,
  },
};

function ValueProposition() {
  return (
    <section id="valueProposition" className="bg-secondary/40 scroll-mt-16">
      <div className="grid justify-center items-center gap-3 lg:justify-start lg:grid-cols-2 max-w-6xl mx-auto px-6 py-20 lg:py-28">
        {/* FIRST HALF */}
        {/* Content */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold text-balance tracking-tight sm:text-4xl text-center lg:text-left max-w-4xl">
            Always know where you stand financially.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty text-center lg:text-left max-w-xl">
            Open the app and instantly understand your balance, your spending,
            and how much room you have to make your next financial move with
            confidence.
          </p>
          {/* Summaries */}
          <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
            {summaries.map((summary) => {
              const { label, textClass, amount } = config[summary];
              return (
                <div
                  key={summary}
                  className="flex flex-col gap-3 p-5 bg-card border border-border rounded-2xl"
                >
                  <TxNatureIcon txNature={summary} />
                  <div>
                    <span className={`text-2xl font-bold ${textClass}`}>
                      ${amount}
                    </span>
                    <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* SECOND HALF */}
        <TxFormMockup />
      </div>
    </section>
  );
}

export default ValueProposition;
