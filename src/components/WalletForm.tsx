import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../redux/actions';
import { RootState } from '../types';
import useFetchCurrencies from './effects/fetchCurrencies';

function WalletForm() {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  // const [id, setId] = useState(1);
  useFetchCurrencies();
  const currencies = useSelector((state: RootState) => state.wallet.currencies);

  type TargetType = React.
    ChangeEvent<HTMLInputElement | HTMLSelectElement >;

  const handleInputChange = (e: TargetType) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };
  const handleClick = () => {
    const newExpense = {
      value: expense.value,
      currency: expense.currency,
      method: expense.method,
      tag: expense.tag,
      description: expense.description,
    };
    dispatch(addExpense(newExpense));
    setExpense({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };
  return (
    <div>
      <input
        type="number"
        name="value"
        data-testid="value-input"
        value={ expense.value }
        onChange={ handleInputChange }
      />
      <input
        type="text"
        name="description"
        data-testid="description-input"
        value={ expense.description }
        onChange={ handleInputChange }
      />
      <select
        name="currency"
        data-testid="currency-input"
        value={ expense.currency }
        onChange={ handleInputChange }
      >
        {currencies.map((currency) => (
          <option key={ currency } value={ currency }>
            {currency}
          </option>
        ))}
      </select>

      <select
        name="method"
        data-testid="method-input"
        value={ expense.method }
        onChange={ handleInputChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>

      <select
        name="tag"
        data-testid="tag-input"
        value={ expense.tag }
        onChange={ handleInputChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button onClick={ handleClick }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
