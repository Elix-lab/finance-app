/* Filters for the Transacion page */

import DateFilter from "./DateFilter";
import AmountFilter from "./AmountFilter";
import NatureFilter from "./NatureFilter";
import ClearFilters from "./ClearFilters";

const TransactionFilters = async () => {
  return (
    <section className="flex gap-x-2 text-sm font-light flex-wrap">
      <DateFilter/>
      <AmountFilter/>
      <NatureFilter/>
      <ClearFilters/>
    </section>
  );
};

export default TransactionFilters;
