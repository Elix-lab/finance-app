import { Button } from "../ui/button";
import Link from "next/link";

function ThePlan() {
  return (
    <section className="flex flex-col items-center gap-5 py-8 px-4">
      <h2 className="text-2xl/snug font-medium text-balance text-center">
        Build financial clarity step by step
      </h2>
      <h3>1. Add your income and expenses</h3>
      <p>Quickly log the money coming in and going out.</p>
      <h3>2. See where you stand</h3>
      <p>Understand your balance, spending, and financial situation at a glance.</p>
      <h3>3. Move forward with confidence</h3>
      <p>Make everyday financial decisions with more clarity and less stress.</p>
      <Button asChild>
        <Link href="/dashboard">Start Now</Link>
      </Button>
    </section>
  );
}

export default ThePlan;
