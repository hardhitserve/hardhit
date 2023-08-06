
import React,{useEffect,useState} from "react";
import { Alchemy } from "alchemy-sdk";

export const networksApi = {
    "Ethereum": "eth-mainnet",
    "Goerli" : "eth-goerli",
    "Sepolia" : "eth-sepolia",
    "Optimism": "opt-mainnet",
    "Optimism-testnet": "opt-goerli",
    "Arbitrum":"arb-mainnet",
    "Arbitrum-testnet": "arb-goerli",
    "Polygon" :"polygon-mainnet",
    'Polygon-testnet' :"polygon-mumbai",
    "Astar" :"astar-mainnet",
    "zkEvm" : "polygonzkevm-mainnet",
    "zkEvm-testnet":"polygonzkevm-testnet"
}

function NftIdAlchemy({argu}){
 
const [data, setData] = useState([]);
const [noData,setnoData] = useState("")

useEffect(
  ()=>{
    argu.exists?main(argu): setnoData("Data Not Available")
  },[argu]
 
)

  async function main(args){
    try {
      const config = {
        apiKey: process.env.REACT_APP_API_Alchemy,
        network: networksApi[args.network]
      }
      const alchemy = new Alchemy(config);
      const options ={
        contract :args.contract
      }
    
      if(networksApi[args.network]){
    
        const nfts = await alchemy.nft.getNftsForOwner(args.address,options);
          
        let testObject = []
      
           nfts["ownedNfts"].forEach(item => {
           
             if(item["contract"]["address"].toLowerCase() === (args.contract).toLowerCase()){
               testObject.push( {tokenId:item["tokenId"],
               ipfslink : item.media[0].gateway
               })
             }
          });
   console.log(testObject)

          setData(testObject)
      }
      
    } catch (error) {
      
    }
     
      };

      return (
        <div style={{width:"75%", border:"1px solid pink",marginLeft:"15%",height:"auto", minHeight:"160px"}}> 
        <h5 style={{color:"white", textDecoration:"underline",marginLeft:"43%"}}>NFTs Owned</h5>
        <div style={{width:"90%",marginLeft:"5%",display:"flex",alignItems:'center', flexDirection:"row"}}>

        {data.length!==0?data.map((item) => (
        <div
          key={item.tokenId}
          style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            margin: '10px',
          }}
        >
          <img
            src={item.ipfslink}
            alt={` ${item.tokenId}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            
          />
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '5px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              padding: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {`ID:${item.tokenId}`}
          </div>
        </div>
      )):<div>
        {argu.exists?<p style={{color:'whitesmoke'}}> No Nfts Minted</p>:<p style={{color:'whitesmoke'}}>{noData}</p>}
      </div>}
           </div>
   
        </div>
      )
}

export default NftIdAlchemy;
