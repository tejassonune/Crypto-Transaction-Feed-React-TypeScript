import type { Transaction } from "../types/transaction"

const currencies = ["BTC", "ETH", "USDC"] as const
const statuses = ["Pending", "Confirmed", "Failed"] as const

export const generateTransaction = (id: number): Transaction => {
  return {
    id,
    hash: Math.random().toString(36).substring(2, 10),
    from: "0x" + Math.random().toString(16).substring(2, 8),
    to: "0x" + Math.random().toString(16).substring(2, 8),
    amount: Number((Math.random() * 5).toFixed(2)),
    currency: currencies[Math.floor(Math.random() * currencies.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    timestamp: new Date().toLocaleTimeString()
  }
}
