"use client";

import TransactionFormHeader from "./TransactionFormHeader";
import TransactionFormFooter from "./TransactionFormFooter";
import TransactionFormFields from "./TransactionFormFields";

type FormProps = {
  mutationHook: () => {
    mutate: (data: FormData) => void;
    isPending: boolean;
    isError: boolean;
    isSuccess: boolean;
  };
  txNature: "income" | "expense";
  mode: "create" | "edit";
  transaction?: any;
};

export default function TransactionForm({
  mutationHook,
  txNature,
  mode,
  transaction,
}: FormProps) {
  
  const { mutate } = mutationHook();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TransactionFormHeader txNature={txNature} mode={mode} />
      <TransactionFormFields txNature={txNature} existingTx={transaction} />
      <TransactionFormFooter txNature={txNature} mode={mode} />
    </form>
  );
}
