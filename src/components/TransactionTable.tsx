import type { Transaction } from "../types/transaction";
import StatusBadge from "./StatusBadge";

type Props = {
  transactions: Transaction[];
};

const TransactionTable = ({ transactions }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
          <tr>
            <th className="p-3 text-left">Hash</th>
            <th className="p-3 text-left">From</th>
            <th className="p-3 text-left">To</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Currency</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Time</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-t hover:bg-gray-200 transition">
              <td className="p-3 font-mono text-gray-600">{tx.hash}</td>

              <td className="p-3 text-gray-600">{tx.from}</td>

              <td className="p-3 text-gray-600">{tx.to}</td>

              <td className="p-3 font-semibold">{tx.amount}</td>

              <td className="p-3 font-medium">{tx.currency}</td>

              <td className="p-3">
                <StatusBadge status={tx.status} />
              </td>

              <td className="p-3 text-gray-500">{tx.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
