import { useState } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'; // or use Lucide
import { CURRENCIES } from '../utils/constants';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  const convert = () => {
    const amountInUSD = amount * CURRENCIES[from].rate;
    return (amountInUSD / CURRENCIES[to].rate).toFixed(2);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
      <h2 className="text-2xl font-black text-slate-800 mb-6 text-center tracking-tight">
        Currency Converter
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full text-3xl font-bold bg-slate-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 bg-slate-100 rounded-xl font-semibold outline-none appearance-none"
            >
              {Object.keys(CURRENCIES).map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <button 
            onClick={swap}
            className="mt-6 p-3 bg-blue-600 text-white rounded-full hover:rotate-180 transition-all duration-500 shadow-lg shadow-blue-200"
          >
            ⇌
          </button>

          <div className="flex-1">
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 bg-slate-100 rounded-xl font-semibold outline-none appearance-none"
            >
              {Object.keys(CURRENCIES).map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-sm text-blue-500 font-medium mb-1">
            {amount} {from} is exactly
          </p>
          <div className="text-4xl font-black text-blue-900">
            {convert()} <span className="text-xl font-bold">{to}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter