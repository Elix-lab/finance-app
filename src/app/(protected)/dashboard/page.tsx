'use client'

import { useState, useEffect } from "react";
import TransactionButton from "../../../components/dashboard/TransactionButton";
import CurrentBalance from "@/components/dashboard/CurrentBalance";
import TransactionTable from "@/components/dashboard/TransactionTable";

type Transaction = {
    id: string;
    nature: 'income' | 'expense' | 'investment';
    name: string;
    category: string;
    amount: number;
    note: string;
    date: string;
}

const Page = () => {
    // viariables and useStates
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [totalInvestments, setTotalInvestments] = useState(0)
    // Total balance
    const balance = totalIncome - totalExpenses;

    // Setting local storage
    useEffect(() => {
        localStorage.setItem('income', String(totalIncome))
    }, [totalIncome])

    useEffect(() => {
        localStorage.setItem('expenses', String(totalExpenses))
    }, [totalExpenses])

    // Event handlers
    const handleAddTransaction = (tx: Transaction) => {
        setTransactions(prev => [...prev, tx])

        if (tx.nature === 'income') {
            setTotalIncome(prev => prev + tx.amount)
        } else if (tx.nature === 'expense') {
            setTotalExpenses(prev => prev + tx.amount)
        } else {
            setTotalInvestments(prev => prev + tx.amount)
        }
    }


    return (
        <div className="flex justify-center p-10" >
            <div className="flex flex-col gap-6 w-3xl">
                {/* Balance summary component*/}
                <CurrentBalance
                    balance={balance}
                    income={totalIncome}
                    expenses={totalExpenses}
                    investments={totalInvestments}
                />
                {/* Buttons to manage income and expenses */}
                <TransactionButton onSubmit={handleAddTransaction} />
                <TransactionTable transactions={transactions} />
            </div>
        </div>
    )
}

export default Page;