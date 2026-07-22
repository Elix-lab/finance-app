import { LuArrowUpRight, LuArrowDownRight } from "react-icons/lu";

function TxNatureIcon({ txNature }: { txNature: "income" | "expense" }) {
  // Conditional rendering data
  const config = {
    income: {
      Icon: LuArrowUpRight,
      bgClass: "bg-accent",
      textClass: "text-primary",
    },
    expense: {
      Icon: LuArrowDownRight,
      bgClass: "bg-destructive/10",
      textClass: "text-destructive",
    },
  };

  const { Icon, bgClass, textClass } = config[txNature];

  return (
    <span
      className={`flex justify-center items-center shrink-0 rounded-lg size-10 ${bgClass}`}
    >
      <Icon className={`${textClass} w-5 h-5 stroke-2`} />
    </span>
  );
}

export default TxNatureIcon;
