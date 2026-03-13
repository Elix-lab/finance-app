'use client'

import { useState } from "react";
import IncExpButton from "../../components/dashboard/IncExpButton";
import CurrentBalance from "@/components/dashboard/CurrentBalance";

const Page = () => {
    const [income, setIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const balance = income - expenses;

    const handleAddIncome = (amount: number) => {
        setIncome(prev => prev + amount)
    }

    const handleAddExpenses = (amount: number) => {
        setExpenses(prev => prev + amount)
    }

    return (
        <div className="flex justify-center p-10 ">
            <div className="flex flex-col gap-8 w-3xl">
                <CurrentBalance balance={balance} income={income} expenses={expenses} />
                <div className="grid grid-cols-2 gap-10">
                    <IncExpButton type={'addIncome'} onSubmit={handleAddIncome} />
                    <IncExpButton type={'addExpenses'} onSubmit={handleAddExpenses} />
                </div>
            </div>
        </div>
    )
}

export default Page;