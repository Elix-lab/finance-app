'use client'

import IncomeExpenses from "./IncomeExpenses";

type Props = {
    balance: number;
    income: number;
    expenses: number;
}

const CurrentBalance = ({ balance, income, expenses }: Props) => {


    return (
        <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
            <div>
                <p className="text-sm mb-1">Current Balance</p>
                <p className="text-5xl font-extrabold">${balance}</p>
            </div>
            <div className="flex flex-wrap gap-5">
                <IncomeExpenses type={'income'} amount={income} />
                <IncomeExpenses type={'expenses'} amount={expenses} />
            </div>
        </div>
    )
}

export default CurrentBalance;