import React, { useState,useEffect } from 'react';
import './main.css';
import { ethers } from 'ethers';
import { chainIds,chains, tokenClaim,network } from '../abi/chains';
import { tokenContracts } from '../abi/chains';

import { waitForMessageReceived ,getMessagesBySrcTxHash} from '@layerzerolabs/scan-client';
import { abi, claimAbi } from '../abi/abi';
import { optionsTestnet ,presentTestnet,testeObject,testnet_routes} from '../abi/chainoptions';

import { present_Tokens_mainnet, mainnet_present_object,mainnetRoutes } 
  from '../abi/mainnetcontracts';
import PopupMessage from './popup';
import Footer from './footer';
import './gasrevamp.css'

const DropdownMenu = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null); 
  const [address, setAddress] = useState("");
  const [ qty, setQty] = useState('');
  const [options,setOption] = useState(present_Tokens_mainnet);
  const [errorMessage,setError] = useState("");
  const [networkselected,setNetworkSet] = useState('')
  const [balanceOfaccount, setbalance] = useState('')
  const [options2,setOption2] = useState(null);
  const [color,setColor] = useState("white")
  const [colorback,setColorBack]  = useState("grey")
  const [routes, setRoutes] = useState(mainnetRoutes)
  const [object,setObject] = useState(mainnet_present_object)
  const provider = window.ethereum

  useEffect(
    
    ()=>{
      document.title = "Send OFTV2 to cross chains | Send Tokens";

      async function connectButton(){

        try {
          const res = await provider.request({ method: 'eth_accounts' })

          if (res.length === 0) {

            const currentChainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
          
          setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
           
          } else {
     
            const currentChainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
            
            setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
            
            setAddress(res[0]);

            balance(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
          }
        } catch (error) {
          setError("Wallet Not Connected")
        }
      }
      connectButton()
    }
  )

  const ethereum = window.ethereum;

  const abiEncode = new ethers.AbiCoder();

  window.ethereum.on('chainChanged', async ()=>{
    const currentChainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
   
    handleOptionSelect1(mainnet_present_object[network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]])
   });
  
 
  const changeChain = async (args) =>{
 
     const res = await ethereum.request({ method: 'eth_accounts' })
     if (res.length === 0) {
       isConnected()
      
     } else {
 
       try {
         await ethereum.request({
           method: 'wallet_switchEthereumChain',
           params: [{ chainId: chains[args].chainId }],
         });
        
         } catch (switchError) {
         // This error code indicates that the chain has not been added to MetaMask.
         if (switchError.code === 4902) {
           ethereum.request({
           method: 'wallet_addEthereumChain',
           params: [chains[args]],
           }).then(response => console.log())
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
  
 const mainNetoption  = () =>{
  setOption(present_Tokens_mainnet);
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
      setError("Select From Chain")
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
      setError(error.reason)
    }
  };

  const handleOptionSelect2 = (option) => {
    try {
      setSelectedOption2(option);
      setIsOpen2(false);
    } catch (error) {
      setError(error.reason)
    }
  };


const claim = async ()=>{
  const currentChainId = await window.ethereum.request({
    method: 'eth_chainId',
  });
  const contract_address = await tokenClaim[network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]];
 if(contract_address){

  try {
  const Abi = claimAbi;

  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(contract_address,Abi,signer);

   let tx = await (
    await contract.claimTokens(
       
    )

   ).wait()



  } catch (error) {
    
    setError("Tokens Claim is only once per 24hrs")
  
  }} else {
    setError("No OFT contracts found on this chain")
  }
}

const balance =async(argsnetwork)=>{

  const currentChainId = await window.ethereum.request({
    method: 'eth_chainId',
  });
  const contract_address = await tokenClaim[network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]];
 if(contract_address){
 
  try {
  const contract_address = tokenContracts[argsnetwork];

  const Abi = abi.abi;

  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(contract_address,Abi,signer);

   let tx =
    await contract.balanceOf(
     address
    )
    
   
    function convertWeiToEther(weiValue) {
      const etherValue = ethers.formatEther(weiValue);
      return etherValue;
    }
 
   const weiValue = ethers.toBigInt(tx.toString()); // 1 Ether in Wei (10^18 Wei)
   const etherValue = convertWeiToEther(weiValue);
   setbalance(parseFloat(etherValue).toFixed(0) +" HTT");

  } catch (error) {
    
   
  
  }} else {
    setbalance("Not available");
   setError("No OFT contracts found on this chain")
  }

}


const send = async ()=>{

  try {

  const contract_address = tokenContracts[selectedOption1.name];

  const Abi = abi.abi;

  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(contract_address,Abi,signer);

  const toAddress = tokenContracts[selectedOption2.name];

  let remoteChainId = chainIds[selectedOption2.name];

  const toAddressBytes = abiEncode.encode(['address'],[toAddress])

  let adapterParams = ethers.solidityPacked(["uint16", "uint256"], [1, 250000]) // default adapterParams example

  let quantity =  ethers.parseEther(qty);

   let fees = await contract.estimateSendFee(remoteChainId, toAddressBytes, quantity, false, adapterParams)

   const gas = fees[0]
  
   let tx = await (
    await contract.sendFrom(
        address,                 // 'from' address to send tokens
        remoteChainId,                 // remote LayerZero chainId
        toAddressBytes,                     // 'to' address to send tokens
        quantity,                           // amount of tokens to send (in wei)
        [address, ethers.ZeroAddress,'0x'],
        { value: gas,gasLimit:300000 }
    )
    
   ).wait()


   await waitForMessageReceived(chainIds[selectedOption2.name],tx.hash).then(async (message) => {

    setError(message.status)

    })

  } catch (error) {
    
    setError(error.reason)
  
  }

  
  }
  return (

    <div>

<div class="chain-switch"> 
<input type="button" style={{backgroundColor:color}} value="Mainnet" class="button1" onClick={mainNetoption} />
        <input type="button" style={{backgroundColor:colorback}} value="Testnet" class="button2" onClick={testNetoption}/>
</div>


    <div class="buttonss" style={{width:"45%",margin:'auto',height:'auto',}}>
       <div class="content" >
       <div className="heading">
       <h3 style={{color:"white"}}>Send OFT</h3>
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
        <ul className="dropdown-options" 
        
        style={{overflow:'visible',zIndex:10,
        display:'flex',flexDirection:'column'
        ,flexWrap:'wrap',height:'auto',
        maxHeight:'300px',width:"170%"}}

        >
          {options.map((option) => (
            <li key={option.id} 
            
            style={{border:"1px solid pink",width:"50%",boxSizing: "border-box",
            height:"50px",
            margin:"0.5px",
            borderRadius:"5px" 
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
        maxHeight:'300px',width:"170%"}}
        
        >
          {options2.map((option) => (
            <li key={option.id} 
            
            style={{border:"1px solid pink",width:"50%",boxSizing: "border-box",
            height:"50px",
            margin:"0.5px",
            borderRadius:"5px" 
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
    <div class='alldetails' style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:"-100px"}}>
        
        <div class="button">
        <button onClick={claim}>Claim</button>
        <p style={{color:"whitesmoke",fontSize:'small'}}>Balance:{`${balanceOfaccount}`}</p>
        </div>

       <div className="sendButon" style={{width:"60%",marginTop:"10px",backgroundColor:"#26292c",padding:5,borderRadius:5,display:'flex',flexDirection:'column',alignItems:'center'}}>
  
      <p style={{color:"white",}}>Quantity</p>

      <input type="number" name="Quantity" style={{width:150,fontSize:15,margin:5}} onChange={(e)=>{
  
      setQty(e.target.value)}} />

      <input class='amount-button'  style={{width:"100%",alignItems:'center',height:'25px',padding:'1px',border:"2px solid white",borderRadius:2,marginBottom:'10px'}}  type="button" value="Send" onClick={send}/>

     </div>

</div>
        
{/*   
<div style={{marginTop:"100px"}}>
  <p style={{color:"white"}}>Quantity</p>

  <input type="number" name="Quantity" style={{width:150,fontSize:15}} onChange={(e)=>{
    
    setQty(e.target.value)}} />
  
</div> */}

<div className="layerzero" style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginBottom:"-30px",justifyContent:'center'}}>
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



<PopupMessage error={errorMessage}/>
<Footer/>

    </div>
  );
};


export default DropdownMenu
