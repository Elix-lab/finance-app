// The buttons work with shadCN Dialog
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createTxAction } from "@/_actions/transactions/insert";
import TransactionFormFields from "./TransactionFormFields";
import TransactionFormHeader from "./TransactionFormHeader";
import TransactionFormFooter from "./TransactionFormFooter";
import TransactionForm from "./TransactionForm";
import { useCreateTransactionMutation } from "@/hooks/mutations/transactions/useCreateTransactionMutation";

type Props = {
  buttonNature: "income" | "expense";
};

// COMPONENT
const TransactionButton = ({ buttonNature }: Props) => {
  const config = {
    income: {
      bgColor: "bg-green-600",
      shadow: "shadow-green-300",
      text: "Add Income",
    },
    expense: {
      bgColor: "bg-red-600",
      shadow: "shadow-red-300",
      text: "Add Expense",
    },
  };

  const { bgColor, shadow, text } = config[buttonNature];

  return (
    <Dialog>
      {/* Button */}
      <DialogTrigger asChild>
        <Button
          className={`h-20 rounded-2xl shadow-md hover:cursor-pointer ${shadow} ${bgColor}`}
        >
          {text}
        </Button>
      </DialogTrigger>
      {/* Modal */}
      <DialogContent className="sm:max-w-xl rounded-2xl">
        <TransactionForm mutationHook={useCreateTransactionMutation} txNature={buttonNature}/>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionButton;
