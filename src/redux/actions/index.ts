export const SET_EMAIL = 'SET_EMAIL';

type AddEmailAction = {
  type: string;
  payload: string;
};

export const addEmail = (email: string): AddEmailAction => ({
  type: SET_EMAIL,
  payload: email,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});
