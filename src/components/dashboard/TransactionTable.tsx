import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { LuChartCandlestick } from "react-icons/lu";

type Transaction = {
    id: string;
    nature: 'income' | 'expense' | 'investment';
    name: string;
    category: string;
    amount: number;
    date: string;
};

type Props = {
    transactions: Transaction[];
}

const TransactionTable = ({ transactions }: Props) => {

    const config = {
        income: {
            Icon: IoIosTrendingUp,
            iconBgClass: 'bg-green-100',
            iconSymbolColor: 'text-green-500',
            amountColorClass: 'text-green-500',
        },
        expense: {
            Icon: IoIosTrendingDown,
            iconBgClass: 'bg-red-100',
            iconSymbolColor: 'text-red-500',
            amountColorClass: 'text-red-500',
        },
        investment: {
            Icon: LuChartCandlestick,
            iconBgClass: 'bg-blue-100',
            iconSymbolColor: 'text-blue-500',
            amountColorClass: 'text-blue-500',
        }
    }

    // Date formating
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    }

    return (
        <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
            <span className="text-xl font-bold mb-5">Recent Transactions</span>
            <ul>
                {/* in the future we have to do the toReversed() based on the date */}
                {transactions.toReversed().map(tx => {
                    const { Icon, iconBgClass, iconSymbolColor, amountColorClass } = config[tx.nature];

                    return (
                        <li key={tx.id} className="grid grid-cols-2 border-b-2 py-5">
                            <div className="flex gap-3">
                                <span className={`flex justify-center items-center h-10 w-10 min-h-10 min-w-10  ${iconBgClass} rounded-lg`}>
                                    <Icon className={`text-lg ${iconSymbolColor}`} />
                                </span>
                                <div className="min-w-0">
                                    <span className="text-base font-semibold truncate block">{tx.name}</span>
                                    <p className="text-xs">{tx.category}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`${amountColorClass} text-base font-semibold`}>${tx.amount}</span>
                                <p className="text-xs">{formatDate(tx.date)}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TransactionTable;