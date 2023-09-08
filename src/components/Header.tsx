import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../types';

function Header() {
  const userEmail = useSelector((state: RootState) => state.user.email);
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => {
      const exchangeRate = expense.exchangeRates[expense.currency].ask;
      return total + parseFloat(expense.value) * parseFloat(exchangeRate);
    }, 0);
  };

  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const total = calculateTotalExpenses();
    setTotalExpenses(total);
  }, [expenses]);

  return (
    <header>
      <p data-testid="email-field">
        {`Bem-vindo, ${userEmail}`}
      </p>
      <p>Despesa Total:</p>
      <p data-testid="total-field">{totalExpenses.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
