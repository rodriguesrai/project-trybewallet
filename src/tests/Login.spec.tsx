import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const email = 'testando@testando.com';
const password = '1234567';

describe('Testando inputs', () => {
  it('Verificando inputs e button', async () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button', {
      name: /entrar/i,
    });

    await userEvent.type(emailInput, email);
    await userEvent.type(passwordInput, password);
    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
    expect(loginButton).not.toBeDisabled();
    await userEvent.click(loginButton);
    expect(emailInput).not.toBeInTheDocument();
  });
});
