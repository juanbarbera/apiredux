import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.cryptonator.com/api/ticker'
})


// Disclaimer
// * Though Cryptonator synchronizes with online cryptocurrencies exchanges every minute, we cannot guarantee absolute accuracy of the displayed exchange rates. You should always confirm current rates before making any transactions that could be affected by changes in the exchange rates. Crypocurrency rates based on the data provided by exchanges APIs. All rates are for information purposes only and are subject to change without prior notice. Since rates for actual transactions may vary we are not offering to enter into any transaction at any rate displayed. Displayed rates are composite prices and not intended to be used for investment purposes.

// bitcoin (BTC)
// ethereum (ETH)
// tether (USDT)
// bnb (BNB)
// usd coin (USDC) 
// Cardano (ADA)
// Solana (SOL)
// Xrp (XRP)
// Terra (LUNA)
// Dogecoin (DOGE)
// Polkadot (DOT)
// Avalanche (AVAX)
// Binance usd (BUSD)
// Polygon (MATIC)
// shiba inu (SHIB)
// TerraUSD (UST)
// Crypo.com coin (CRO) 
// Wrapped Bitcoin (WBTC)
// dai (DAI)
// chainlink (LINK)