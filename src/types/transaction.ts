//  Transaction type

export type Transaction = {
  nature: "income" | "expense";
  title: string;
  category: string;
  amount: string;
  date: string;
};
