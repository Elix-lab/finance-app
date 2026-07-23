import clsx from "clsx";
import { LuArrowUpRight, LuArrowDownRight } from "react-icons/lu";

function TxNatureIcon({ txNature, size }: { txNature: "income" | "expense", size?:'small' }) {
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
      className={clsx(`flex justify-center items-center shrink-0 rounded-lg ${bgClass}`, size === 'small' ? 'size-8': 'size-10')}
    >
      <Icon className={clsx(`${textClass} stroke-2`, size === 'small' ? 'w-4 h-4' : 'w-5 h-5')} />
    </span>
  );
}

export default TxNatureIcon;
