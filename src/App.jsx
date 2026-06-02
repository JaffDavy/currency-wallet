import CurrencyConverter from "./components/CurrencyConverter";
import { BalanceCard } from "./components/BalanceCard.jsx";
import { useWallet } from "./hooks/useWallet";

function App() {
  const wallet = useWallet();

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">💱 Currency Wallet</h1>

        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold">
            Total Value: {wallet.totalValue} {wallet.defaultCurrency}
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
            <BalanceCard key={currency} currency={currency} amount={amount} />
          ))}
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-semibold mb-2">Deposit</h3>

          <div className="flex gap-2">
            <select id="depositCurrency" className="border p-2 rounded">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="XAF">XAF</option>
            </select>

            <input
              id="depositAmount"
              type="number"
              placeholder="Amount"
              className="border p-2 rounded"
            />

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => {
                const currency =
                  document.getElementById("depositCurrency").value;
                const amount = Number(
                  document.getElementById("depositAmount").value,
                );

                if (amount > 0) {
                  wallet.deposit(currency, amount);
                }
              }}
            >
              Deposit
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-semibold mb-2">Exchange</h3>

          <div className="flex gap-2">
            <select id="fromCurrency" className="border p-2 rounded">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="XAF">XAF</option>
            </select>

            <select id="toCurrency" className="border p-2 rounded">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="XAF">XAF</option>
            </select>

            <input
              id="exchangeAmount"
              type="number"
              placeholder="Amount"
              className="border p-2 rounded"
            />

            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => {
                const from = document.getElementById("fromCurrency").value;
                const to = document.getElementById("toCurrency").value;
                const amount = Number(
                  document.getElementById("exchangeAmount").value,
                );

                if (amount > 0) {
                  wallet.exchange(from, to, amount);
                }
              }}
            >
              Exchange
            </button>
          </div>
        </div>

        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
