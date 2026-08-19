/* Filters for the Transacion page */

import DateFilter from "./DateFilter";
import AmountFilter from "./AmountFilter";
import NatureFilter from "./NatureFilter";

const TransactionFilters = async () => {
  return (
    <section className="flex gap-x-2">
      <DateFilter/>
      <AmountFilter/>
      {/* <NatureFilter/> */}
    </section>
  );
};

export default TransactionFilters;
