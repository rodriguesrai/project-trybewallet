import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions';

function WalletForm() {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({
    value: '',
    description: '',
    currency: 'dinheiro',
    method: 'dinheiro',
    tag: 'alimentacao',
  });
  const [id, setId] = useState(1);
  const [currencies, setCurrencies] = useState<{
    currency: string; label: string; }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');
        const data = await response.json();

        const currenciesInf = Object.keys(data).filter((currency) => currency !== 'USDT');

        const currencyOptions = currenciesInf.map((currency) => ({
          currency,
          label: currency,
        }));
        setCurrencies(currencyOptions);
      } catch (error) {
        console.error('Erro na solicitação à API:', error);
      }
    };

    fetchData();
  }, []);

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
      id,
      ...expense,
    };
    dispatch(addExpense(newExpense));
    setId(id + 1);
    setExpense({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  };

  return (
    <div>
      <input
        type="value"
        data-testid="value-input"
        value={ expense.value }
        onChange={ handleInputChange }
      />
      <input
        type="text"
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
        {currencies.map((currencyOption) => (
          <option key={ currencyOption.currency } value={ currencyOption.currency }>
            {currencyOption.label}
          </option>
        ))}
      </select>

      <select
        name="method"
        data-testid="method-input"
        value={ expense.method }
        onChange={ handleInputChange }
      >
        <option value="dinheiro">Dinheiro</option>
        <option value="cartao de credito">Cartão de crédito</option>
        <option value="cartao de debito">Cartão de débito</option>
      </select>

      <select
        name="tag"
        data-testid="tag-input"
        value={ expense.tag }
        onChange={ handleInputChange }
      >
        <option value="alimentacao">Alimentação</option>
        <option value="lazer">Lazer</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>
      <button onClick={ handleClick }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
