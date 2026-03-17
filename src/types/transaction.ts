export interface Transaction{
    id : number
    hash : string
    from : string 
    to : string 
    amount : number 
    currency : "BTC" | "ETH" | "USDC"
    status : "Pending" | "Confirmed" | "Failed"
    timestamp : string 
}
