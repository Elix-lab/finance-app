"use client";

import { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  formOnSubmit: (formData: FormData) => void;
};

export default function TransactionForm({ children, formOnSubmit }: FormProps) {

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formOnSubmit(formData);
  }

  return <form onSubmit={handleSubmit}>{children}</form>;
}
