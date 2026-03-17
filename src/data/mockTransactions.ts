import type { Transaction } from "../types/transaction"

export const mockTransactions: Transaction[] = [
  {
    id: 1,
    hash: "0xa3f45c21",
    from: "0x123abc",
    to: "0x456def",
    amount: 0.75,
    currency: "BTC",
    status: "Confirmed",
    timestamp: "10:30:12"
  },
  {
    id: 2,
    hash: "0xb9d8f712",
    from: "0x78ab12",
    to: "0xcd3456",
    amount: 1.2,
    currency: "ETH",
    status: "Pending",
    timestamp: "10:31:05"
  },
  {
    id: 3,
    hash: "0x9ad34f77",
    from: "0xabc111",
    to: "0xdef222",
    amount: 250,
    currency: "USDC",
    status: "Failed",
    timestamp: "10:31:40"
  }
]
