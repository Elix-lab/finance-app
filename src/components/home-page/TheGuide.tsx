import TxsAndSummaries from "./TxsAndSummaries";

function TheGuide() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
      <div className="grid gap-12 items-center lg:grid-cols-2">
        
        <div className="space-y-5 lg:col-start-2 flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold text-balance tracking-tight sm:text-4xl text-center lg:text-left max-w-4xl">
            We know how easy it is to fall behind on your finances.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-center lg:text-left max-w-xl">
            Life gets busy. Expenses add up. And before you notice, money
            becomes another source of stress. This app was built to help staying
            on top of your finances feel simpler and less overwhelming.
          </p>
        </div>
        
        <div className="lg:col-start-1 lg:row-start-1">
          <TxsAndSummaries />
        </div>
      </div>
    </section>
  );
}

export default TheGuide;
