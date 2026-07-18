import { DialogHeader, DialogTitle, DialogDescription } from "../ui/shadCn/dialog";

const TransactionFormHeader = ({
  txNature,
  mode,
}: {
  txNature: "income" | "expense";
  mode: "create" | "edit";
}) => {
  const config = {
    income: {
      text: "Add Income",
    },
    expense: {
      text: "Add expense",
    },
  };

  if (mode === "edit") {
    return (
      <DialogHeader>
        <DialogTitle>Edit {txNature} transaction</DialogTitle>
        <DialogDescription>Change anything about this {txNature.charAt(0).toUpperCase()+txNature.slice(1)} Transaction</DialogDescription>
      </DialogHeader>
    );
  }

  return (
    <DialogHeader>
      <DialogTitle >{config[txNature].text}</DialogTitle>
      <DialogDescription>Add transaction details and save.</DialogDescription>
    </DialogHeader>
  );
};

export default TransactionFormHeader;
