// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { Expense } from '../../types';
import { ADD_EXPENSE, SET_CURRENCIES } from '../actions';

// wallet.ts
const INITIAL_STATE = {
  currencies: [], // Inicialmente, a lista de moedas está vazia
  expenses: [], // Inicialmente, a lista de despesas está vazia
  editor: false, // Inicialmente, a edição não está ativada
  idToEdit: 0, // Inicialmente, o ID para editar é 0
};

type ActionTypeWallet = {
  type: string;
  payload: any;
};

const walletReducer = (state = INITIAL_STATE, action: ActionTypeWallet) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      const newExpense: Expense = action.payload;
      return {
        ...state,
        expenses: [...state.expenses, newExpense],
      };
    }
    case SET_CURRENCIES: {
      const currencies = action.payload;
      return {
        ...state,
        currencies,
      };
    }
    default:
      return state;
  }
};

export default walletReducer;
