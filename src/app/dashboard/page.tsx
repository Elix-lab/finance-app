// 'use client'
// import { useState } from "react";
import TransactionButton from "../../components/dashboard/TransactionButton";
import CurrentBalance from "@/components/dashboard/CurrentBalance";
import TransactionTable from "@/components/dashboard/TransactionTable";

type Transaction = {
  id: string;
  nature: "income" | "expense";
  name: string;
  category: string;
  amount: number;
  date: string;
};

const Page = () => {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col gap-6 w-3xl">
        {/* Balance summary component*/}
        <CurrentBalance />
        {/* Buttons to manage income and expenses */}
        <div className="grid grid-cols-2 gap-1">
          <TransactionButton buttonNature="income" />
          <TransactionButton buttonNature="expense" />
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Page;
