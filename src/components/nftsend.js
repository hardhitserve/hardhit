import {ethers} from 'ethers';
import React, { useState,useEffect } from 'react';
import {chains,chainIds,nftContracts,network} from '../abi/chains'
import {waitForMessageReceived} from "@layerzerolabs/scan-client"
import { presentTestnet,testeObject,testnet_routes } from '../abi/chainoptions';
import { present_mainnet ,mainnet_present_object, mainnetRoutes } from '../abi/mainnetcontracts';
import { ERC721ABI } from '../abi/erc721abi';
import PopupMessage from './popup';
import Footer from './footer';
import NftIdAlchemy from './nftidalchemy';
import { networksApi } from './nftidalchemy';
import './gasrevamp.css'
import { toast } from 'react-toastify';

function NftSend(){
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [options,setOption] = useState(present_mainnet);
  const [options2,setOption2] = useState(null);
  const [address, setAddress] = useState("");
  const [ tokenID, setTokenID] = useState('');
  const [number,setNumber] = useState('');
  const [data, setdata] = useState([])
  const [addressArray,setAddressArray] = useState([])
  const [routes, setRoutes] = useState(mainnetRoutes)
  const [object,setObject] = useState(mainnet_present_object);
  const [color,setColor] = useState("white")
  const [colorback,setColorBack]  = useState("grey")
  const provider = window.ethereum;
  const [ networkset,setNetworkSet] = useState('')
  const abiEncode = new ethers.AbiCoder();
  const [totalSupply,setTotalSupply] = useState('')
  

  useEffect(

    ()=>{
      
      document.title = "Send ONFTV2 to cross chains | Send NFTs";
      async function connectButton(){

        try {
          const res = await provider.request({ method: 'eth_accounts' })
          
          if (res.length === 0) {

            const currentChainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
          
           availableMint(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
           setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
     

          } else {
     
            const currentChainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
         
            setAddress(res[0]);
         

          availableMint(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
          setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
      

          } 
        } catch (error) {
          toast.error("Wallet Not Connected")
        }
      }

    
    
      connectButton()
    }
  ,[provider])
 
  const changeChain = async (args) =>{
 
     const res = await provider.request({ method: 'eth_accounts' })
     if (res.length === 0) {
       isConnected()
      
     } else {
 
       try {
         await provider.request({
           method: 'wallet_switchEthereumChain',
           params: [{ chainId: chains[args].chainId }],
         });
         } catch (switchError) {
         // This error code indicates that the chain has not been added to MetaMask.
         if (switchError.code === 4902) {
           provider.request({
           method: 'wallet_addEthereumChain',
           params: [chains[args]],
           }).then(response => console.log(""))
         }
         }
 
       setAddress(res[0]);
     
   }
 }
 
 async function isConnected() {

  

     const accounts = await window.ethereum.request({method: 'eth_accounts'});  
 
     if (accounts.length) {
 
       setAddress(accounts[0]);

       
       

     } else {
 
       const provider = new ethers.BrowserProvider(window.ethereum);
     
       await provider.send("eth_requestAccounts", []).then(async res=>{
          setAddress(res[0])
       })
     
     }
  }

  window.ethereum.on('chainChanged', async ()=>{
    const currentChainId = await window.ethereum.request({
      method: 'eth_chainId',
    });

    handleOptionSelect1(mainnet_present_object[network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]])
   });

  
 const mainNetoption  = () =>{
  setOption(present_mainnet);
  setRoutes(mainnetRoutes)
  setObject(mainnet_present_object);
  setColor("white")
  setColorBack("grey")
 }
 const testNetoption  = () =>{
  setOption(presentTestnet);
  setRoutes(testnet_routes);
  setObject(testeObject);
  setColor("grey")
  setColorBack("white")
 }

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setSelectedOption2(null)
  };
  const toggleDropdown2 = () => {
    if(selectedOption1){
      setIsOpen2(!isOpen2);
    } else {
      toast.error("Select From Chain")
    }
  };

  const handleOptionSelect1 = (option) => {
    
    try {
      changeChain(option.name)
      setSelectedOption1(option);
      setIsOpen1(false);
      let array = routes[option.name]
      
      let options_routes2 = [];
    
      for(let i=0;i<array.length;i++){
        options_routes2[i]=(object[array[i]])
       }
      
      setOption2(options_routes2)
    } catch (error) {
      toast.error(error.reason)
    }
  };

  const handleOptionSelect2 = (option) => {
    
    try {
      setSelectedOption2(option);
      setIsOpen2(false);
    } catch (error) {
      toast.error(error.reason)
    }
   
  };


 async function  availableMint(args){

  try {
    let abi = ERC721ABI;
    const contract_address = nftContracts[args]
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address,abi,signer);
    const maxMintId = await contract.maxMintId();
    const nextMintId = await contract.nextMintId();
    const number = (parseInt(maxMintId)-parseInt(nextMintId)).toString()
    

    setNumber(number<0?0:number)
   
  } catch (error) {

  } }

  
 

  const mint = async ()=>{
    toast.info('Minting..')

    try {
      let abi = ERC721ABI;
      const contract_address = nftContracts[networkset]
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contract_address,abi,signer);
      const gas = ethers.parseUnits('1','wei')

      let tx = await( await contract.mint(
      {value:gas}
)      
      ).wait()

    console.log(tx)

  
  toast.success(tx?.hash?`Successfully Minted ID:${parseInt(Number(tx.logs[0].topics[3]))}`:"Mint Unsuccesful..")

     
    } catch (error) {
     
     toast.error(error.message)

    }
   
  }

const send = async ()=>{


  try {
    const contract_address = nftContracts[selectedOption1.name];
   
    const Abi = ERC721ABI;
  
    const provider = new ethers.BrowserProvider(window.ethereum);
  
    const signer = await provider.getSigner();
  
    const contract = new ethers.Contract(contract_address,Abi,signer);
   
    const toAddress = nftContracts[selectedOption2.name];
  
    let remoteChainId = chainIds[selectedOption2.name];
  
    const toAddressBytes = abiEncode.encode(['address'],[toAddress])
  
    let adapterParams = ethers.solidityPacked(["uint16", "uint256"], [1, 250000]) // default adapterParams example
  
    let fees = await contract.estimateSendFee(remoteChainId, toAddressBytes, tokenID, false, adapterParams)
  
    const gas = fees[0]*ethers.toBigInt(2)
   
    
    const tx =  await contract.sendFrom(
          address,                 // 'from' address to send tokens
          remoteChainId,                 // remote LayerZero chainId
          address,                 // 'to' address to send tokens
          tokenID, 
          address,                           // amount of tokens to send (in wei)
          ethers.ZeroAddress,
          adapterParams,
          { value: gas,gasLimit:300000 }
    )
 
console.log(tx.hash)
  
    await waitForMessageReceived(chainIds[selectedOption2.name],tx.hash,3000).then(async (message) => {

      console.log(message)
     
  
  toast.success(message.status)

    
    })
   
  } catch (error) {
    
  toast.error(error.reason)
 
  }

 
  }


  
    return(
        
      <div>

      <div class="chain-switch"> 
      <input type="button" style={{backgroundColor:color}} value="Mainnet" class="button1" onClick={mainNetoption} />
        <input type="button" style={{backgroundColor:colorback}} value="Testnet" class="button2" onClick={testNetoption}/>
      </div>
      

    <div class="buttonss" style={{width:'45%',marginRight:'auto',marginLeft:'auto',height:'auto'}}>
           <div className="content">
        <div className="heading">
             <h3 style={{color:"white"}}>Send ONFT</h3>
            </div>
      
         
          <div class="selectchains">
              <div className="fromchain">
              <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown1} style={{backgroundColor:"white",color:"black",height:"50px"}}>
              {selectedOption1 ? (
                <>
                  <img src={selectedOption1.imageSrc} alt={selectedOption1.name} />
                  <span>{selectedOption1.name}</span>
                </>
              ) : (
                <span>From Chain</span>
              )}
            </button>
            {isOpen1 && (
              <ul class="dropdown-options" 
              
              style={{overflow:'visible',zIndex:10,
               display:'flex',flexDirection:'column'
               ,flexWrap:'wrap',height:'auto',
               maxHeight:'300px',width:"170%"}}
               
               >  
              
                {options.map((option) => (
                  <li key={option.id}

                  style={{border:"1px solid pink",width:"60%",boxSizing: "border-box",
                  height:"50px",
                  margin:"0.5px",
                  borderRadius:"5px",
                  backgroundColor:'whitesmoke'
                }} 

                   onClick={() => handleOptionSelect1(option)}>
                    <img src={option.imageSrc} alt={option.name} />
                    <span>{option.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
      
              </div>
            
              <div class="tochain">
              <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown2} style={{backgroundColor:"white",color:"black",height:"50px"}}>
              {selectedOption2 ? (
                <>
                  <img src={selectedOption2.imageSrc} alt={selectedOption2.name} />
                  <span>{selectedOption2.name}</span>
                </>
              ) : (
                <span>To Chain</span>
              )}
            </button>
            {isOpen2 && (
              <ul className="dropdown-options" 
              
              style={{overflow:'visible',zIndex:10,
              display:'flex',flexDirection:'column'
              ,flexWrap:'wrap',height:'auto',
              maxHeight:'300px',}}
              
              
              >
                {options2.map((option) => (
                  <li key={option.id} 
                  
                  style={{border:"1px solid pink",width:"100%",boxSizing: "border-box",
                  height:"50px",
                  margin:"0.5px",
                  borderRadius:"5px",
                  backgroundColor:'whitesmoke'
                
                }} 
                  
                  onClick={() => handleOptionSelect2(option)}>
                    <img src={option.imageSrc} alt={option.name} />
                    <span>{option.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
      
              </div>
      
          </div>
      
       
                {/* claim button */}
      
         <div class='alldetails' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:"-100px"}}>

        <div class="button" >
          {/* <Link to="/mint" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",color:"white",backgroundColor:"#e10bc1",padding:6,border: "2px solid #e10bc1",borderRadius:5}} disabled>Mint</Link> */}
          {/* <img src="https://ipfs.io/ipfs/QmdvdVhJhVRdoApEmAy6A5AsihrVi3EN8rxNbxsawhzpt7" style={{width:"100px","height":"100px",marginLeft:"10px",marginBottom:"10px",border:"2px solid pink"}} alt="" /> */}
          <button style={{width:"auto", background:"none",textDecoration:"none",color:"white",padding:6,border: "2px solid #53a7df",borderRadius:5,backgroundColor:''}} onClick={mint}>Mint</button>
          <p style={{color:"whitesmoke"}}>{number?number<0?0:number:"∞"}/1000</p>
        </div>
        <div className="sendButon" style={{width:"100%",marginTop:"10px",backgroundColor:"#26292c",padding:5,borderRadius:5,display:'flex',flexDirection:'column',alignItems:'center'}}>

              <p style={{color:"white"}}>Token ID</p>
            
              <input type="number" name="Quantity" style={{width:150,fontSize:15}} onChange={(e)=>{
                
                setTokenID(e.target.value)}} />

<input class='sendButton' style={{width:100,height:30,fontSize:15}}  type="button" value="Send" onClick={ ()=>{
   if(selectedOption1){
    send()
  } else{
   toast.info("Select from and To chains")
  }
}
 }/>

        </div>
      
            
      </div>


      <div className="layerzero" style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginBottom:"-30px",justifyContent:'center',marginTop:'10px'}}>
                                        <p style={{color:"white",marginRight:"5px",fontWeight:"bold",fontSize:"small"}}>
                                          Powered By
                                        </p>
                                        <div>
                                        <img src="layerzero.png" alt="logo" style={{width:"20px",height:"20px",marginRight:"2px"}}/>
                                        </div>
                                      <div>
                                      <p style={{color:"white",fontSize:"small"}}>Layerzero</p>
                                      </div>
                          
                        </div>
      </div>
  </div>

      
          
   
          <NftIdAlchemy argu={{
            network:networkset,
            contract:nftContracts[networkset],
            address:address,
            exists: networksApi[networkset]?true:false
          }
          }/>

      <Footer/>


      
          </div>
    )
}

export default NftSend; 
