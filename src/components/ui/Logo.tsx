import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/CashWell.png" alt="CashWell logo" className="w-8" />
      <span className="font-semibold text-lg tracking-tight text-foreground">
        CashWell
      </span>
    </div>
  );
}

export default Logo