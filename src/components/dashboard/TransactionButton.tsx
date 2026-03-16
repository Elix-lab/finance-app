// This is the modal that pop up when using the TransactionSummary buttons.
// For the modal we are using ShadCN UI library.
import { Button } from "../ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"

// Types
type Transaction = {
    id: string;
    nature: 'income' | 'expense' | 'investment';
    name: string;
    category: string;
    amount: number;
    note: string;
    date: string;
}
type Props = {
    onSubmit: (tx: Transaction) => void;
}


// COMPONENT
const TransactionButton = ({ onSubmit }: Props) => {
    //Variables and States
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [note, setNote] = useState('')
    const [transactionNature, setTransactionNature] = useState<Transaction['nature']>('income')
    // default date for date input
    const date = new Date();
    const todayDate = date.toISOString().slice(0, 10)


    // Submit event handler
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        const amountNum = Number(amount);
        if (!amountNum || isNaN(amountNum) || !name.trim() || !category.trim()) return;

        // Creating the Transaction Object
        const newTransaction: Transaction = {
            id: crypto.randomUUID(),
            nature: transactionNature, // this has to be changed with the select input value
            name: name.trim(),
            category: category.trim(),
            amount: amountNum,
            note: note.trim(),
            date: new Date().toISOString(),
        };
        onSubmit(newTransaction);
        setName('');
        setCategory('');
        setAmount('');
        setNote('')
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`h-20 rounded-2xl shadow-md hover:cursor-pointer shadow-blue-200 bg-black`}>
                    Add Transaction
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl rounded-2xl">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add Transaction</DialogTitle>
                        <DialogDescription>
                            Add transaction details and save.
                        </DialogDescription>
                    </DialogHeader>

                    {/* inputs */}
                    <div className="flex flex-col gap-4 px-1.5 py-4">
                        <div>
                            <label className="block mb-1.5">Transaction Nature</label>
                            <select
                                value={transactionNature}
                                onChange={(e) => setTransactionNature(e.target.value as Transaction['nature'])}
                                className="w-full border px-3 py-2 rounded-lg"
                            >
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                                <option value="investment">Investment</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Amount*</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => { setAmount(e.target.value) }}
                                className="w-full border px-3 py-2 rounded-lg"
                                step="0.01"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Title*</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="w-full border px-3 py-2 rounded-lg"
                                maxLength={50}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Category*</label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => { setCategory(e.target.value) }}
                                className="w-full border px-3 py-2 rounded-lg"
                                maxLength={50}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Note (Optional)</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="A quick note about the transaction..."
                                className="w-full border px-3 py-2 rounded-lg"
                                maxLength={250}
                            ></textarea>
                        </div>

                        <div>
                            <label>Date</label>
                            <input
                                type="date"
                                className="w-full border px-3 py-2 rounded-lg"
                                defaultValue={todayDate}
                            />
                        </div>


                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button type="submit">Save</Button>

                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default TransactionButton;