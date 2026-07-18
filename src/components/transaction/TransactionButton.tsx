// The buttons work with shadCN Dialog
import { Button } from "../ui/shadCn/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/shadCn/dialog";
import { createTxAction } from "@/_actions/transactions/insert";
import TransactionFormFields from "./TransactionFormFields";
import TransactionFormHeader from "./TransactionFormHeader";
import TransactionFormFooter from "./TransactionFormFooter";
import TransactionForm from "./TransactionForm";
import { useCreateTransactionMutation } from "@/hooks/mutations/transactions/useCreateTransactionMutation";
import clsx from "clsx";

type Props = {
  buttonNature: "income" | "expense";
};

// COMPONENT
const TransactionButton = ({ buttonNature }: Props) => {
  const config = {
    income: {
      bgColor: "bg-income",
      hoverColor: "hover:bg-income/80",
      text: "Add Income",
    },
    expense: {
      bgColor: "bg-expenses",
      hoverColor: "hover:bg-expenses/80",
      text: "Add Expense",
    },
  };

  const { bgColor, hoverColor, text } = config[buttonNature];

  return (
    <Dialog>
      {/* Button */}
      <DialogTrigger asChild>
        <Button
          className={`h-14 rounded-lg hover:cursor-pointer ${bgColor} sm:text-lg sm:h-18 ${hoverColor}`}
        >
          {text}
        </Button>
      </DialogTrigger>
      {/* Modal */}
      <DialogContent
        className={clsx("rounded-lg border sm:max-w-xl", {
          "border-income": buttonNature === "income",
          "border-expenses": buttonNature === "expense",
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
