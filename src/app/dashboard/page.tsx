'use client'

import { useState, useEffect } from "react";
import TransactionButton from "../../components/dashboard/TransactionButton";
import CurrentBalance from "@/components/dashboard/CurrentBalance";

const Page = () => {
    const [income, setIncome] = useState(() => {
        if (typeof window === 'undefined') return 0;
        const saved = localStorage.getItem('income');
        return saved !== null ? Number(saved) : 0;
    });

    const [expenses, setExpenses] = useState(() => {
        if (typeof window === 'undefined') return 0;
        const saved = localStorage.getItem('expenses');
        return saved !== null ? Number(saved) : 0;
    })

    const balance = income - expenses;

    // useEffect(() => {
    //     const savedIncome = localStorage.getItem('income');
    //     const savedExpenses = localStorage.getItem('expenses');

    //     if (savedIncome !== null) {
    //         setIncome(Number(savedIncome))
    //     }

    //     if (savedExpenses !== null) {
    //         setExpenses(Number(savedExpenses))
    //     }
    // }, [])

    useEffect(() => {
        localStorage.setItem('income', String(income))
    }, [income])

    useEffect(() => {
        localStorage.setItem('expenses', String(expenses))
    }, [expenses])

    const handleAddIncome = (amount: number) => {
        setIncome(prev => prev + amount)
    }

    const handleAddExpenses = (amount: number) => {
        setExpenses(prev => prev + amount)
    }

    return (
        <div className="flex justify-center p-10" >
            <div className="flex flex-col gap-8 w-3xl">
                <CurrentBalance balance={balance} income={income} expenses={expenses} />
                <div className="grid grid-cols-2 gap-10">
                    <TransactionButton type={'addIncome'} onSubmit={handleAddIncome} />
                    <TransactionButton type={'addExpenses'} onSubmit={handleAddExpenses} />
                </div>
            </div>
        </div>
    )
}

export default Page;