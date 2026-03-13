import { IoIosTrendingUp } from "react-icons/io";

const CurrentBalance = () => {
    return (
        <div className="flex flex-col gap-3 w-3xl h-auto bg-white shadow-md rounded-xl p-8">
            <div>
                <p className="text-sm mb-1">Current Balance</p>
                <p className="text-5xl font-extrabold">$5282</p>
            </div>
            <div className="flex items-center gap-3">
                <span className="inline-block bg-green-100 p-3 rounded-2xl">
                    <IoIosTrendingUp className="text-green-500 text-2xl" />
                </span>
                <div>
                    <p className="text-xs">Income</p>
                    <span className="text-xl font-semibold text-green-500">$18000</span>
                </div>
            </div>

        </div>
    )
}

export default CurrentBalance;