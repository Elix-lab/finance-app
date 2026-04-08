import { DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog"

const TransactionFormHeader = ({txNature}: {txNature: 'income' | 'expense'}) => {
    const config = {
        income: {
            text: 'Add Income'
        },
        expense: {
            text: 'Add expense'
        }
    }



    return(
        <DialogHeader>
            <DialogTitle>{config[txNature].text}</DialogTitle>
            <DialogDescription>
              Add transaction details and save.
            </DialogDescription>
          </DialogHeader>
    )
}

export default TransactionFormHeader;