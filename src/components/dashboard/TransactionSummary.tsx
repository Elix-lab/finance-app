'use client'

import clsx from "clsx";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

type Props = {
    type: 'income' | 'expenses';
    amount: number;
}

const TransactionSummary = ({ type, amount }: Props) => {

    // conditional rendering data
    const config = {
        income: {
            label: 'Total Income',
            Icon: IoIosTrendingUp,
            bgClass: 'bg-green-100',
            textClass: 'text-green-500',
        },
        expenses: {
            label: 'Total Expenses',
            Icon: IoIosTrendingDown,
            bgClass: 'bg-red-100',
            textClass: 'text-red-500',
        }
    };

    // destructuring conditional rendering data
    const { label, Icon, bgClass, textClass } = config[type];

    return (
        <div className="flex items-center gap-3">
            {/* Icon */}
            <span className={clsx("inline-block p-3 rounded-2xl", bgClass)}>
                <Icon className={clsx("text-2xl", textClass)} />
            </span>
            <div>
                {/* Income/expenses label */}
                <p className="text-xs">{label}</p>
                {/* Amount */}
                <span className={clsx("text-xl font-semibold", textClass)} >
                    ${amount}
                </span>
            </div>
        </div>
    )
}

export default TransactionSummary;