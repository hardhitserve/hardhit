import { json } from "react-router-dom";
import axios from "axios";

export const tickers = {
    "Ethereum":"ethereum",
    "Polygon":"matic-network",
    "Moonbeam" :"moonbeam",
    "Base":"ethereum",
    "Optimism":"ethereum",
    "Arbitrum":"ethereum",
    "Mantle":"mantle",
    "Bsc" : "binancecoin",
    "Avalanche":"avalanche-2",
    "Fantom":"fantom",
    "Tenet" : "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9",
    "zkSync":"ethereum",
    "zkEvm":"ethereum",
    "Core":"coredaoorg"
    
}

export const tokenTickers={
  "Ethereum":"ETH",
  "Polygon":"MATIC",
  "Moonbeam" :"GLMR",
  "Base":"ETH",
  "Optimism":"OPETH",
  "Arbitrum":"ETH",
  "Mantle":"MNT",
  "Bsc" : "BNB",
  "Avalanche":"AVAX",
  "Fantom":"FTM",
  "Tenet" : "TENET",
  "zkSync":"ETH",
  "zkEvm":"ETH",
  "Core":"CORE"
}

 export  async function fetchData(args){
 
  try {
    const response = await axios.get(`https://lzbackend.vercel.app/getLatestPrices?id=${tickers[args]}`, {
    });

    const prices = response.data;
    
   return (parseFloat(prices[tickers[args]]["usd"]).toFixed(2))

  } catch (error) {

    return ({ error: 'An error occurred' });

  }
  };

