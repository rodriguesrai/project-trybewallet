import { useSelector } from 'react-redux';
import RootState from '../types';

function Header() {
  const userEmail = useSelector((state: RootState) => state.user.email);
  return (
    <header>
      <p data-testid="email-field">
        {`Bem-vindo, 
      ${userEmail}`}
      </p>
      <p>Despesa Total:</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
