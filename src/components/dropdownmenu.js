import React, { useState,useEffect } from 'react';
import './main.css';
import { ethers } from 'ethers';
import { chainIds,chains, tokenClaim,network } from '../abi/chains';
import { tokenContracts } from '../abi/chains';

import { waitForMessageReceived } from '@layerzerolabs/scan-client';
import { abi, claimAbi } from '../abi/abi';
import { optionsMainnet,optionsTestnet } from '../abi/chainoptions';
import PopupMessage from './popup';

const DropdownMenu = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null); 
  const [address, setAddress] = useState("");
  const [ qty, setQty] = useState('');
  const [options,setOption] = useState(optionsTestnet);
  const [errorMessage,setError] = useState("");
  const [networkselected,setNetworkSet] = useState('')
  const [balanceOfaccount, setbalance] = useState('')

  const provider = window.ethereum

  useEffect(

    ()=>{

      async function connectButton(){

        try {
          const res = await provider.request({ method: 'eth_accounts' })

          if (res.length === 0) {

            const currentChainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
          
          setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
           console.log(currentChainId)
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
           }).then(response => console.log(response))
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


const claim = async ()=>{
  try {
   

  const Abi = claimAbi;

  const provider = new ethers.BrowserProvider(window.ethereum);

  const currentChainId = await window.ethereum.request({
    method: 'eth_chainId',
  });
  console.log(currentChainId)
 
console.log(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
  const contract_address = await tokenClaim[network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]];
  console.log(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
  const signer = await provider.getSigner();

  console.log(signer)


  const contract = new ethers.Contract(contract_address,Abi,signer);

   let tx = await (
    await contract.claimTokens(
       
    )

   ).wait()

console.log(tx)

  } catch (error) {
    console.log(error.message)
    setError("Tokens Claim is only once per 24hrs")
  
  }
}

const balance =async(argsnetwork)=>{
  console.log(argsnetwork)
  try {
  const contract_address = tokenContracts[argsnetwork];

  const Abi = abi.abi;

  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  console.log(signer)

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
   setbalance(etherValue);

  } catch (error) {
    
   console.log(error)
  
  }

}


const send = async ()=>{

  try {
    const contract_address = tokenContracts[selectedOption1.name];

  const Abi = abi.abi;

  const provider = new ethers.BrowserProvider(window.ethereum);

  

  const signer = await provider.getSigner();

  console.log(signer)


  const contract = new ethers.Contract(contract_address,Abi,signer);

  

  const toAddress = tokenContracts[selectedOption2.name];

  let remoteChainId = chainIds[selectedOption2.name];

  const toAddressBytes = abiEncode.encode(['address'],[toAddress])

  let adapterParams = ethers.solidityPacked(["uint16", "uint256"], [1, 250000]) // default adapterParams example


  let quantity =  ethers.parseEther(qty);

   let fees = await contract.estimateSendFee(remoteChainId, toAddressBytes, quantity, false, adapterParams)

   console.log(`fees[0] (wei): ${fees[0]} / (eth): ${ethers.formatEther(fees[0])}`)

   const gas = fees[0]

  console.log(address)
  
   let tx = await (
    await contract.sendFrom(
        address,                 // 'from' address to send tokens
        remoteChainId,                 // remote LayerZero chainId
        toAddressBytes,                     // 'to' address to send tokens
        quantity,                           // amount of tokens to send (in wei)
        [address, ethers.ZeroAddress,'0x'],
        { value: gas }
    )
    
   ).wait()


   await waitForMessageReceived(chainIds[selectedOption2.name],tx.hash).then(async (message) => {

    console.log(message.status)
    setError(message.status)

    })

  } catch (error) {
    
    setError(error.toString().split('\n')[0])
  
  }

  
  }
  return (

    <div>

<div class="chain-switch"> 
  <input type="button" style={{selectedOption1}} value="Mainnet" disabled class="button1" onClick={mainNetoption}/>
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
  <p style={{color:"white"}}>Quantity</p>

  <input type="number" name="Quantity" style={{width:150,fontSize:15}} onChange={(e)=>{
    
    setQty(e.target.value)}} />
  
</div>

<div>
  <input class='sendButton' style={{width:100,height:30,fontSize:15}}  type="button" value="Send" onClick={send}/>

</div>
  

     
      
    </div>
  </div>
  <div class="button">
   <button onClick={claim}>Claim</button>
   <p style={{color:"whitesmoke"}}>balance:{balanceOfaccount}</p>
  </div>
</div>



<PopupMessage error={errorMessage}/>

    </div>
  );
};


export default DropdownMenu