import { useState } from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../utils/constants';

export const ExchangeForm = ({ onExchange }) => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = Number(amount);
    
    if (numericAmount <= 0) return;

    onExchange(from, to, numericAmount);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-slate-50 rounded-2xl">
      <h3 className="text-lg font-semibold text-slate-700">Quick Exchange</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">From</label>
          <select 
            value={from} 
            onChange={e => setFrom(e.target.value)} 
            className="p-2 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {Object.keys(CURRENCIES).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">To</label>
          <select 
            value={to} 
            onChange={e => setTo(e.target.value)} 
            className="p-2 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {Object.keys(CURRENCIES).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-slate-500 uppercase">Amount</label>
        <input 
          type="number" 
          placeholder="0.00" 
          value={amount} 
          onChange={e => setAmount(e.target.value)}
          className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all"
      >
        Execute Exchange
      </button>
    </form>
  );
};

ExchangeForm.propTypes = {
  onExchange: PropTypes.func.isRequired,
};