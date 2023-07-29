import {ethers} from 'ethers';
import React, { useState,useEffect } from 'react';
import {chains,chainIds,nftContracts,network,endpointContracts} from '../abi/chains'
import {waitForMessageReceived} from "@layerzerolabs/scan-client"
import { optionsMainnet,optionsTestnet,presentTestnet } from '../abi/chainoptions';
import { Link } from 'react-router-dom';
import { ERC721ABI,endpointAbi } from '../abi/erc721abi';
import PopupMessage from './popup';

function NftSend(){
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [options,setOption] = useState(presentTestnet);
  const [colorset, setColor] = useState('')
  const [address, setAddress] = useState("");
  const [ tokenID, setTokenID] = useState('');
  const [errorMessage,setError] = useState("")
  const [number,setNumber] = useState('')
  const provider = window.ethereum;
 const [ networkset,setNetworkSet] = useState('')
  const abiEncode = new ethers.AbiCoder();
  



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
          setError("Wallet Not Connected")
        }
      }
      connectButton()
    }
  )
 
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

       availableMint()
       

     } else {
 
       const provider = new ethers.BrowserProvider(window.ethereum);
     
       await provider.send("eth_requestAccounts", []).then(async res=>{
          setAddress(res[0])
       })
       availableMint()
     }
  }

 const mainNetoption  = () =>{
  setOption(optionsMainnet);
 }
 const testNetoption  = () =>{
  setOption(optionsTestnet);
 }

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionSelect1 = (option) => {
    
    changeChain(option.name)
    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const handleOptionSelect2 = (option) => {
    
    setSelectedOption2(option);
    setIsOpen2(false);
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
    
    setNumber(number)
   

  } catch (error) {

  

  }

   
  }



  const mint = async ()=>{

    try {
    
      let abi = ERC721ABI;
     
      const contract_address = nftContracts[networkset]
     
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contract_address,abi,signer);
      const gas = ethers.parseUnits('0.001','ether')
     

      // Set the desired gas limit (increase it from the default value)
      const gasLimits = ethers.getBigInt("300000");
    
      const tx = await contract.mint(
       
        {value:gas});

     
    } catch (error) {
     
      setError(error.toString().split('\n')[0])

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
  
    let adapterParams = ethers.solidityPacked(["uint16", "uint256"], [1, 300000]) // default adapterParams example
  
    let fees = await contract.estimateSendFee(remoteChainId, toAddressBytes, tokenID, false, adapterParams)
  
   // console.log(`fees[0] (wei): ${fees[0]} / (eth): ${ethers.formatEther(fees[0])}`)
  
    const gas = fees[0]
  
   
    
     let tx = await (
      await contract.sendFrom(
          address,                 // 'from' address to send tokens
          remoteChainId,                 // remote LayerZero chainId
          toAddressBytes,                     // 'to' address to send tokens
          tokenID,                           // amount of tokens to send (in wei)
          [address, ethers.ZeroAddress,'0x'],
          { value: gas }
      )
      
     ).wait()
  
    
  
     await waitForMessageReceived(chainIds[selectedOption2.name],tx.hash).then(async (message) => {
     
   

      setError(message.status)
    
      })
   
  } catch (error) {
  setError(error.toString().split('\n')[0])
 
  }

 
  }


    return(
        
      <div>

      <div class="chain-switch"> 
        <input type="button" value="Mainnet" class="button1" disabled style={{backgroundColor:colorset}} onClick={mainNetoption}/>
        <input type="button" value="Testnet" class="button2" onClick={testNetoption}/>
      </div>
      

          <div class="buttons">
        <div class="content">
          <div class="claim-heading">
        <div>
      
        <h3 style={{color:"white",borderBottom:"2px solid #e10bc1", marginBottom:'10px', margin:'auto',paddingBottom:'10px'}} >Send Tokens</h3>
      
        </div>
           
            
          </div>
      
         
          <div class="selectchains">
              <div className="fromchain">
              <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown1}>
              {selectedOption1 ? (
                <>
                  <img src={selectedOption1.imageSrc} alt={selectedOption1.name} />
                  <span>{selectedOption1.name}</span>
                </>
              ) : (
                <span>Select an option</span>
              )}
            </button>
            {isOpen1 && (
              <ul className="dropdown-options" style={{overflow:'visible'}}>
                {options.map((option) => (
                  <li key={option.id} onClick={() => handleOptionSelect1(option)}>
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
            <button className="dropdown-button" onClick={toggleDropdown2}>
              {selectedOption2 ? (
                <>
                  <img src={selectedOption2.imageSrc} alt={selectedOption2.name} />
                  <span>{selectedOption2.name}</span>
                </>
              ) : (
                <span>Select an option</span>
              )}
            </button>
            {isOpen2 && (
              <ul className="dropdown-options">
                {options.map((option) => (
                  <li key={option.id} onClick={() => handleOptionSelect2(option)}>
                    <img src={option.imageSrc} alt={option.name} />
                    <span>{option.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
      
              </div>
      
          </div>
      
          <div  class="qty">
              
        
      <div>
        <p style={{color:"white"}}>Token ID</p>
      
        <input type="number" name="Quantity" style={{width:150,fontSize:15}} onChange={(e)=>{
          
          setTokenID(e.target.value)}} />
      </div>
      
      <div>
        <input class='sendButton' style={{width:100,height:30,fontSize:15}}  type="button" value="Send" onClick={send}/>
      </div>
        
            
          </div>
        </div>
        <div class="button" >
          {/* <Link to="/mint" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",color:"white",backgroundColor:"#e10bc1",padding:6,border: "2px solid #e10bc1",borderRadius:5}} disabled>Mint</Link> */}
          <button style={{width:"100%", background:"none",textDecoration:"none",color:"white",backgroundColor:"#e10bc1",padding:6,border: "2px solid #e10bc1",borderRadius:5}} onClick={mint}>Mint</button>
          <p style={{color:"whitesmoke"}}>{number?number:"Not Avaialble"}/1000</p>
           </div>
 
      </div>
      
      
    
      <PopupMessage error={errorMessage} />
          </div>
        
      
    
    )
}

export default NftSend; 