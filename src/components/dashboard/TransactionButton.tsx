import { FaMinus, FaPlus } from "react-icons/fa6";
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

type Props = {
    type: 'addIncome' | 'addExpenses';
    onSubmit: (amount: number) => void;
}

const TransactionButton = ({ type, onSubmit }: Props) => {
    const [value, setValue] = useState('')
    const config = {
        addIncome: {
            bgColorClass: 'bg-green-600',
            label: 'Add Income',
            Icon: FaPlus,
            shadowColorClass: 'shadow-green-200'
        },
        addExpenses: {
            bgColorClass: 'bg-red-600',
            label: 'Add expenses',
            Icon: FaMinus,
            shadowColorClass: 'shadow-red-200'
        }
    }
    const { Icon, label, bgColorClass, shadowColorClass } = config[type];

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        const amount = Number(value);
        if (!amount || isNaN(amount)) return;
        console.log('ENVIANDO AMOUNT', amount); // para verificar
        onSubmit(amount);
        setValue('');
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`h-20 rounded-2xl shadow-md hover:cursor-pointer ${shadowColorClass}  ${bgColorClass}`}>
                    <Icon />
                    {label}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>{label}</DialogTitle>
                        <DialogDescription>
                            Add the amount and save the changes.
                        </DialogDescription>
                    </DialogHeader>

                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => { setValue(e.target.value) }}
                        />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Save</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}

export default TransactionButton;