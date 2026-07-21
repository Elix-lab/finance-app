// The buttons work with shadCN Dialog
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/shadCn/dialog";
import TransactionForm from "./TransactionForm";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useCreateTransactionMutation } from "@/hooks/mutations/transactions/useCreateTransactionMutation";
import clsx from "clsx";

type Props = {
  buttonNature: "income" | "expense";
};

// COMPONENT
const TransactionButton = ({ buttonNature }: Props) => {
  const config = {
    income: {
      Icon: FaPlus,
      bgIcon: 'bg-primary-foreground/20',
      textColor: 'text-primary-foreground',
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/90",
      text: "Add Income",
      bgFocus: 'focus-visible:ring-primary'
    },
    expense: {
      Icon: FaMinus,
      bgIcon: 'bg-white/20',
      textColor: 'text-white',
      bgColor: "bg-destructive",
      hoverColor: "hover:bg-destructive/90",
      text: "Add Expense",
      bgFocus: 'focus-visible:ring-destructive'
    },
  };

  const { bgColor, hoverColor, text, Icon, textColor, bgIcon, bgFocus } = config[buttonNature];

  return (
    <Dialog>
      {/* Button */}
      <DialogTrigger asChild>
        <button
          className={`flex justify-center items-center gap-2 rounded-xl text-base font-semibold p-4 ${textColor} ${bgColor} ${hoverColor} hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 ${bgFocus} ring-offset-2 focus-visible:ring-offset-background`}
        >
          <span className={`flex justify-center items-center size-6 ${bgIcon} rounded-full`}>
            <Icon/>
          </span>
          {text}
        </button>
      </DialogTrigger>
      {/* Modal */}
      <DialogContent
        className={clsx("rounded-xl border sm:max-w-xl", {
          "border-primary": buttonNature === "income",
          "border-destructive": buttonNature === "expense",
        })}
      >
        <TransactionForm
          mutationHook={useCreateTransactionMutation}
          txNature={buttonNature}
          mode={"create"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default TransactionButton;
