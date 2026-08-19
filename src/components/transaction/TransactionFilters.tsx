/* Filters for the Transacion page */

import DateFilter from "./DateFilter";
import AmountFilter from "./AmountFilter";

const TransactionFilters = async () => {
  return (
    <section className="flex gap-x-2">
      <DateFilter />
      <AmountFilter/>
    </section>
  );
};

export default TransactionFilters;
