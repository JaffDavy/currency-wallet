import PropTypes from 'prop-types';

export const BalanceCard = ({ currency, amount, symbol }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
    <p className="text-sm text-slate-500 font-medium">{currency} Balance</p>
    <h3 className="text-2xl font-bold mt-1">
      {symbol} {amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
    </h3>
  </div>
);

BalanceCard.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};