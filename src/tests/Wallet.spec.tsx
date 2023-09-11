import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

const initialState = {
  user: {
    email: 'testando@testando.com',
  },
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: -1,
  },
};

describe('Testando carteira', () => {
  it('Verificando os elementos da tela', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });
    const userEmailElement = screen.getByText(/Bem-vindo, testando@testando.com/i);
    expect(userEmailElement).toBeInTheDocument();
    const totalExpensesElement = screen.getByText(/Despesa Total:/i);
    expect(totalExpensesElement).toBeInTheDocument();
    const totalValueElement = screen.getByTestId('total-field');
    expect(totalValueElement).toBeInTheDocument();
  });
});
