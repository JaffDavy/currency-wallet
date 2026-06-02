import { useState } from "react";

const RATES = {
  USD: 1,
  EUR: 0.92,
  XAF: 600,
};

const convert = (amount, from, to) => {
  const inUSD = amount / RATES[from];
  return inUSD * RATES[to];
};

export const useWallet = () => {
  const [balances, setBalances] = useState({
    USD: 100,
    EUR: 500,
    XAF: 10000,
  });

  const [defaultCurrency, setDefaultCurrency] = useState("USD");

  const deposit = (currency, amount) => {
    setBalances((prev) => ({
      ...prev,
      [currency]: prev[currency] + amount,
    }));
  };

  const exchange = (from, to, amount) => {
    if (balances[from] < amount) {
      alert("Insufficient funds");
      return;
    }

    const convertedAmount = convert(amount, from, to);

    setBalances((prev) => ({
      ...prev,
      [from]: prev[from] - amount,
      [to]: prev[to] + convertedAmount,
    }));
  };

  const totalValue = Object.entries(balances).reduce((acc, [curr, val]) => {
    return acc + convert(val, curr, defaultCurrency);
  }, 0);

  return {
    balances,
    defaultCurrency,
    setDefaultCurrency,
    deposit,
    exchange,
    totalValue,
  };
};
