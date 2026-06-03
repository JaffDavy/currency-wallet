import CurrencyConverter from "./components/CurrencyConverter";
import { BalanceCard } from "./components/BalanceCard.jsx";
import { useWallet } from "./hooks/useWallet";
import { ExchangeForm } from "./features/ExchangeForm.jsx";
import { CURRENCIES } from "./utils/constants";
import { DepositForm } from "./components/DepositForm";

function App() {
  const wallet = useWallet();

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">💱 Currency Wallet</h1>

        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold">
            Total Value: {wallet.totalValue.toFixed(2)} {wallet.defaultCurrency}
          </h2>
        </div>

        <div className="mb-6">
          <label className="mr-2 font-medium">Default Currency:</label>
          <select
            value={wallet.defaultCurrency}
            onChange={(e) => wallet.setDefaultCurrency(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="XAF">XAF</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(wallet.balances).map(([currency, amount]) => (
            <BalanceCard
              key={currency}
              currency={currency}
              amount={amount}
              symbol={CURRENCIES[currency].symbol}
            />
          ))}
        </div>
        <div className="mb-6">
          <DepositForm onDeposit={wallet.deposit} />
        </div>
        <div className="mb-6">
          <ExchangeForm onExchange={wallet.exchange} />
        </div>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
