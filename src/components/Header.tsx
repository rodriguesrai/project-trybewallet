import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import RootState from '../types';

function Header() {
  const userEmail = useSelector((state: RootState) => state.user.email);
  const expenses = useSelector((state: RootState) => state.wallet.expenses);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const newTotalExpenses = expenses
      .reduce((total, expense) => total + parseFloat(expense.value), 0);
    setTotalExpenses(newTotalExpenses);
  }, [expenses]);

  return (
    <header>
      <p data-testid="email-field">
        {`Bem-vindo, 
      ${userEmail}`}
      </p>
      <p>Despesa Total:</p>
      <p data-testid="total-field">{totalExpenses}</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
