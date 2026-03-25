'use client'

import { createTransaction } from "../actions/transactions/createTransaction";
import { useState } from "react";
import TransactionButton from "../../../components/dashboard/TransactionButton";
import CurrentBalance from "@/components/dashboard/CurrentBalance";
import TransactionTable from "@/components/dashboard/TransactionTable";

type Transaction = {
    id: string;
    nature: 'income' | 'expense';
    name: string;
    category: string;
    amount: number;
    date: string;
}

const Page = () => {
    // viariables and useStates
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    // Total balance
    const balance = totalIncome - totalExpenses;

    // Event handlers
    const handleAddTransaction = async (tx: Transaction) => {

        setTransactions(prev => [...prev, tx])

        if (tx.nature === 'income') {
            setTotalIncome(prev => prev + tx.amount)
        } else if (tx.nature === 'expense') {
            setTotalExpenses(prev => prev + tx.amount)
        }

        // poner el user de auth provider
        await createTransaction({
            userId: 'test-user',
            nature: tx.nature,
            name: tx.name,
            category: tx.category,
            amount: tx.amount,
            date: tx.date
        })

    }


    return (
        <div className="flex justify-center p-10" >
            <div className="flex flex-col gap-6 w-3xl">
                {/* Balance summary component*/}
                <CurrentBalance
                    balance={balance}
                    income={totalIncome}
                    expenses={totalExpenses}
                />
                {/* Buttons to manage income and expenses */}
                <div className="grid grid-cols-2 gap-1">
                    <TransactionButton buttonNature='income' onSubmit={handleAddTransaction} />
                    <TransactionButton buttonNature='expense' onSubmit={handleAddTransaction} />
                </div>
                <TransactionTable transactions={transactions} />
            </div>
        </div>
    )
}

export default Page;