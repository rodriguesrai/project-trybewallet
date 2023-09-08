export const fetchExchangeRate = async (expense) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();

    const exchangeRates: Record<string, any> = {};

    Object.keys(data).forEach((currencyCode) => {
      const currencyInfo = data[currencyCode];

      exchangeRates[currencyCode] = {
        ask: currencyInfo.ask,
        bid: currencyInfo.bid,
        code: currencyInfo.code,
        codein: currencyInfo.codein,
        create_date: currencyInfo.create_date,
        high: currencyInfo.high,
        low: currencyInfo.low,
        name: currencyInfo.name,
        pctChange: currencyInfo.pctChange,
        timestamp: currencyInfo.timestamp,
        varBid: currencyInfo.varBid,
      };
    });

    const expenseWithExchangeRate = {
      ...expense,
      exchangeRates: {
        ...exchangeRates,
      },
    };

    return expenseWithExchangeRate;
  } catch (error) {
    console.error('Erro ao buscar cotação de câmbio:', error);
    throw error;
  }
};
