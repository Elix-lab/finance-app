import { FaMinus, FaPlus } from "react-icons/fa6";

const TransactionTable = () => {
    return (
        <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
            <span className="text-xl font-bold mb-5">Transactions</span>
            <ul>
                <li className="grid grid-cols-2 border-b-2 py-5">
                    <div className="flex gap-3">
                        <span className="flex justify-center items-center h-10 w-10 min-h-10 min-w-10  bg-green-100 rounded-lg">
                            <FaPlus className="text-green-500" />
                        </span>
                        <div className="min-w-0">
                            <span className="text-base font-semibold truncate block">Custom name 00000000000000000000000000000000000000000000000000000000000000000000000</span>
                            <p className="text-xs">Category</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-green-500 text-base font-semibold">Amount $123</span>
                        <p className="text-xs">date(15 Nov)</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TransactionTable;