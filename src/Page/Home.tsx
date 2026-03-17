import { useEffect, useState } from "react";
import { mockTransactions } from "../data/mockTransactions";
import { generateTransaction } from "../utils/generateTransaction";
import TransactionTable from "../components/TransactionTable";
import type { Transaction } from "../types/transaction";

function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currency, setCurrency] = useState("ALL");

  useEffect(() => {
    setTransactions(mockTransactions);

    const interval = setInterval(() => {
      setTransactions((prev) => [
        generateTransaction(prev.length + 1),
        ...prev,
      ]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filtered =
    currency === "ALL"
      ? transactions
      : transactions.filter((t) => t.currency === currency);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg mb-6">
          <h1 className="text-3xl font-bold">Crypto Transaction Feed</h1>

          <p className="text-gray-400 mt-1">
            Live crypto transactions simulated every 10 seconds
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Filter Transactions</h2>

            <p className="text-sm text-gray-400">Select cryptocurrency</p>
          </div>

          <select
            className="bg-gray-900 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USDC">USDC</option>
          </select>
        </div>

        <div className="bg-white text-black rounded-xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

          <TransactionTable transactions={filtered} />
        </div>
      </div>
    </div>
  );
}

export default Home;
