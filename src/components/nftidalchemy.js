// // Setup: npm install alchemy-sdk
// import { Alchemy, Network } from "alchemy-sdk";

// const config = {
//   apiKey: "5jIbkD1F8p0GUsboZmfd0DniEUQJZPZa",
//   network: Network.polygonmainnet
// }
// const alchemy = new Alchemy(config);
// //https://eth-mainnet.g.alchemy.com/v2/5jIbkD1F8p0GUsboZmfd0DniEUQJZPZa
// export const main = async () => {
//   // Get all NFTs

//   const options ={
//     contract :"0xe4217aa960bb3116c9275d215db046c5726fda63"
//   }
//   const nfts = await alchemy.nft.getNftsForOwner("0x23bc4Dc9172d15Bbe02E57C0269EcD46c007EB95",options);
//   // Print NFTs
//   console.log(nfts);



 
//      nfts["ownedNfts"].forEach(item => {

//        if(item["contract"]["address"] === "0xe4217aa960bb3116c9275d215db046c5726fda63"){
//         console.log(item["tokenId"],item["contract"]["address"])
//        }
//     //   if (groupedData[item.contract]) {
//     //     groupedData.push(item.nftId);
//     //   } else {
//     //     groupedData.push(item.nftId)
//     //   }
//     });
//   };
  


