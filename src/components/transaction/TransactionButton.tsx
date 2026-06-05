// The buttons work with shadCN Dialog
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
      bgColor: "bg-button-income",
      text: "Add Income",
    },
    expense: {
      bgColor: "bg-button-expenses",
      text: "Add Expense",
    },
  };

  const { bgColor, text } = config[buttonNature];

  return (
    <Dialog>
      {/* Button */}
      <DialogTrigger asChild>
        <Button className={`h-20 rounded-2xl hover:cursor-pointer ${bgColor}`}>
          {text}
        </Button>
      </DialogTrigger>
      {/* Modal */}
      <DialogContent className="sm:max-w-xl rounded-2xl">
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
