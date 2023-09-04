import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrencies } from '../../redux/actions';

const useFetchCurrencies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/all');
        const data = await response.json();

        const currenciesInf = Object.keys(data).filter((currency) => currency !== 'USDT');

        dispatch(setCurrencies(currenciesInf));
      } catch (error) {
        console.error('Erro na solicitação à API:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return null;
};

export default useFetchCurrencies;
