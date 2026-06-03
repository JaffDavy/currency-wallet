import { useState } from "react";
import PropTypes from "prop-types";
import { CURRENCIES } from "../utils/constants";

export const DepositForm = ({ onDeposit }) => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = Number(amount);

    if (numericAmount <= 0) return;

    onDeposit(currency, numericAmount);
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-slate-50 rounded-2xl"
    >
      <h3 className="text-lg font-semibold text-slate-700">Deposit Funds</h3>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-slate-500 uppercase">
          Currency
        </label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 rounded-lg border bg-white"
        >
          {Object.keys(CURRENCIES).map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-slate-500 uppercase">
          Amount
        </label>

        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 rounded-lg border"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700"
      >
        Deposit
      </button>
    </form>
  );
};

DepositForm.propTypes = {
  onDeposit: PropTypes.func.isRequired,
};
