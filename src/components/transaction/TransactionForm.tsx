"use client";

import { ReactNode } from "react";
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
};

export default function TransactionForm({ mutationHook, txNature }: FormProps) {
  const { mutate } = mutationHook();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TransactionFormHeader txNature={txNature} />
      <TransactionFormFields txNature={txNature} />
      <TransactionFormFooter />
    </form>
  );
}
