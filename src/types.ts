export type RootState = {
  user: {
    email: string;
  };
  wallet: {
    currencies: string[];
    expenses: any[];
    editor: boolean;
    idToEdit: number;
  };
};

export type Expense = {
  id: number;
  value: number;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: { [key: string]: number };
};
