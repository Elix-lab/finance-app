//  Transaction type

// Singular
export type Transaction = {
  nature: "income" | "expense";
  title: string;
  category: string;
  amount: string;
  date: string;
};

// Plural
export type Transactions = {
  id: string;
  userId: string;
  nature: "income" | "expense";
  title: string;
  category: string;
  amount: string;
  date: string;
  createdAt: string | null;
}[];

export type TransactionFilters = {
  // transaction filters
}

export type GetTxsParams = {
  page?: number;
  rowNum?: number;
  from?: string;
  to?:string;
};
