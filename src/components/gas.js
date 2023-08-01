import {ethers, toBigInt} from 'ethers';
import React, { useState } from 'react';
import {chains,chainIds, nftContracts,endpointContracts} from '../abi/chains'
import {waitForMessageReceived} from "@layerzerolabs/scan-client"
import { optionsMainnet,optionsTestnet,presentTestnet,testeObject,allowedChains } from '../abi/chainoptions';
import PopupMessage from './popup';
import { ERC721ABI ,endpointAbi} from '../abi/erc721abi';
import Footer from './footer';

function Gas(){
  document.title = "Send Native Gas cross chains | Send Native Gas";
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [options,setOption] = useState(presentTestnet);
  const [options2,setOption2] = useState(null);
  const [address, setAddress] = useState("");
  const [ amount, setAmount] = useState('');
  const [errorMessage,setError]= useState("");


  const ethereum = window.ethereum;
 
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

    let array = allowedChains[option.name]
    console.log(array.length)
    let testObject = [];
  
     for(let i=0;i<array.length;i++){
      testObject[i]=(testeObject[array[i]])
      console.log(testObject)
     }
    
    setOption2(testObject)
  };

  const handleOptionSelect2 = (option) => {
   
    setSelectedOption2(option);
    setIsOpen2(false);
  };



 

const send = async ()=>{

  try {

    const contract_address = nftContracts[selectedOption1.name];

    const endpoint_contract = endpointContracts[selectedOption1.name]

    const Abi = ERC721ABI;

    const provider = new ethers.BrowserProvider(window.ethereum);
  
    const signer = await provider.getSigner();
  
    const contract = new ethers.Contract(contract_address,Abi,signer);
    const endpoint = new ethers.Contract(endpoint_contract,endpointAbi,signer);

    console.log(contract,endpoint)
  
    let remoteChainId = chainIds[selectedOption2.name];

    let adapterParams = ethers.solidityPacked(
    ["uint16", "uint", "uint", "address"],
    [2, 350000, ethers.parseUnits(amount,'ether') , address])
   
   console.log(remoteChainId)

    let fees = await endpoint.estimateFees(remoteChainId,contract_address, "0x", false, adapterParams);

   
   console.log(`fees[0] (wei): ${fees[0]} / (eth): ${ethers.formatEther(fees[0])}`)

    const gas = ethers.parseUnits(ethers.formatEther(fees[0]).toString(),'ether')

    const gasPrice = ethers.parseUnits('0.000000001', 'gwei');

    const gasLimit =  21000;

   console.log(remoteChainId,ethers.ZeroAddress,adapterParams,gas)
    let tx = await (
  
    await contract.bridgeGas(            
                                  // 'from' address to send tokens
          remoteChainId,                 // remote LayerZero chainId
          ethers.ZeroAddress ,
          adapterParams,                     // amount of tokens to send (in wei)
          { value:gas}
      )
      
     ).wait()
  
     
     
     await waitForMessageReceived(chainIds[selectedOption2.name],tx.transactionHash).then(async (message) => {
 


      setError(message.status)
      
    
      })
  } catch (error) {

  
    setError((error.reason))

  }

  }

    return(
        
      <div>

      <div class="chain-switch"> 
        <input type="button" value="Mainnet" class="button1" disabled onClick={mainNetoption}/>
        <input type="button" value="Testnet" class="button2" onClick={testNetoption}/>
      </div>
      
      
          <div class="buttons">
        <div class="content">
          <div class="claim-heading">
        <div>
      
        <h3 style={{color:"white",borderBottom:"2px solid #e10bc1", marginBottom:'10px', margin:'auto',paddingBottom:'10px'}} >Send Native Gas</h3>
      
        </div>
           
            
          </div>
      
         
          <div className="selectchains">
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
                {options.map((option) =>

              (
                  
                  <li key={option.id} style={{border:"1px solid pink"}} onClick={() => {
                  handleOptionSelect1(option)
                  }}>
                    <img src={option.imageSrc} alt={option.name} />
                    <span>{option.name}</span>
                  </li>
                  
                )
                
                )}
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
                {
                
                options2.map((option) => 
                (
                  <li key={option.id} style={{border:"1px solid pink"}} onClick={() => handleOptionSelect2(option)}>
                    <img src={option.imageSrc} alt={option.name} />
                    <span>{option.name}</span>
                  </li>
                  
                )
              
                )}
              </ul>
            )}
          </div>
      
              </div>
      
          </div>
      
          <div  class="qty">
              
        
      <div>
        <p style={{color:"white"}}>Amount In Destination Chain</p>
      
        <input type="number" name="Amount" style={{width:100,fontSize:18,height:20}} onChange={(e)=>{
          
          setAmount(e.target.value)}} />
      </div>
      
      <div>
        <input class='sendButton' style={{width:100,height:30,fontSize:15}}  type="button" value="Send" onClick={send}/>
      </div>
        
          </div>
        </div>
        <div class="button">
         
<div style={{width:60}}></div>

           </div>
      </div>
<p style={{fontStyle:'italic', color:'white',marginLeft:"20%",marginRight:"auto"}}>**Any extra fees will be refunded by the layerzero client</p>
      <PopupMessage error={errorMessage} />
      <Footer/>
          </div>
        
      
    
    )
}

export default Gas; 