/* Function to format amounts to display in the view */

export const formatCurrency = (amount: string) => {
    return(
        Number(amount).toLocaleString('en-US',{
            style:'currency',
            currency:'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        })
    )
}