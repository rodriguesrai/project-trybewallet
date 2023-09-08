export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';

type AddExpenseAction = {
  type: typeof ADD_EXPENSE;
  payload: {
    id: number;
    value: string;
    currency: string;
    method: string;
    tag: string;
    description: string;
    exchangeRates: Record<string, string>;
  };
};

export const addExpense = (
  newExpense: AddExpenseAction['payload'],
): AddExpenseAction => {
  return {
    type: ADD_EXPENSE,
    payload: {
      ...newExpense,
    },
  };
};

type SetEmailAction = {
  type: typeof SET_EMAIL;
  payload: string;
};

export const addEmail = (email: string): SetEmailAction => ({
  type: SET_EMAIL,
  payload: email,
});

type SetCurrenciesAction = {
  type: typeof SET_CURRENCIES;
  payload: any;
};

export const setCurrencies = (
  currencies: SetCurrenciesAction['payload'],
): SetCurrenciesAction => ({
  type: SET_CURRENCIES,
  payload: currencies,
});
