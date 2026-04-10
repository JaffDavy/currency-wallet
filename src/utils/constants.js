export const CURRENCIES = {
  USD: { symbol: '$', rateToUSD: 1 },
  EUR: { symbol: '€', rateToUSD: 1.24 },
  XAF: { symbol: 'FCFA', rateToUSD: 0.0016 },
};

// src/utils/converters.js
export const convert = (amount, from, to) => {
  const amountInUSD = amount * CURRENCIES[from].rateToUSD;
  return amountInUSD / CURRENCIES[to].rateToUSD;
};