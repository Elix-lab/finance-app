'use client'

import { useState, useEffect } from "react";
import TransactionButton from "../../components/dashboard/TransactionButton";
import CurrentBalance from "@/components/dashboard/CurrentBalance";
import TransactionTable from "@/components/dashboard/TransactionTable";

const Page = () => {
    // useStates
    // Income state: had do localStorage this way because o posible "cascade rendering"
    const [income, setIncome] = useState(() => {
        if (typeof window === 'undefined') return 0;
        const saved = localStorage.getItem('income');
        return saved !== null ? Number(saved) : 0;
    });

    // Expenses state: had do localStorage this way because o posible "cascade rendering"
    const [expenses, setExpenses] = useState(() => {
        if (typeof window === 'undefined') return 0;
        const saved = localStorage.getItem('expenses');
        return saved !== null ? Number(saved) : 0;
    })

    const balance = income - expenses;

    // Setting local storage
    useEffect(() => {
        localStorage.setItem('income', String(income))
    }, [income])

    useEffect(() => {
        localStorage.setItem('expenses', String(expenses))
    }, [expenses])

    // Event handlers
    // Handleing income changes
    const handleAddIncome = (amount: number) => {
        setIncome(prev => prev + amount)
    }
    // Handleing expense changes
    const handleAddExpenses = (amount: number) => {
        setExpenses(prev => prev + amount)
    }

    return (
        <div className="flex justify-center p-10" >
            <div className="flex flex-col gap-8 w-3xl">
                {/* Balance summary component*/}
                <CurrentBalance balance={balance} income={income} expenses={expenses} />
                {/* Buttons to manage income and expenses */}
                <div className="grid grid-cols-2 gap-10">
                    <TransactionButton type={'addIncome'} onSubmit={handleAddIncome} />
                    <TransactionButton type={'addExpenses'} onSubmit={handleAddExpenses} />
                </div>
                <TransactionTable />
            </div>
        </div>
    )
}

export default Page;