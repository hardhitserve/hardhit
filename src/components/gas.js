import {ethers} from 'ethers';
import React, { useDebugValue, useEffect, useState } from 'react';
import {chains,chainIds, nftContracts,endpointContracts,network} from '../abi/chains'
import {waitForMessageReceived,getMessagesBySrcTxHash} from "@layerzerolabs/scan-client"
import { presentTestnet,testeObject,testnet_routes } from '../abi/chainoptions';
import { present_mainnet, mainnetRoutes,mainnet_present_object } from '../abi/mainnetcontracts';
import PopupMessage from './popup';
import { ERC721ABI ,endpointAbi} from '../abi/erc721abi';
import Footer from './footer';
import { gasAmount } from '../abi/maxgas';

function Gas(){

  document.title = "Send Native Gas cross chains | Send Native Gas";
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [options,setOption] = useState(present_mainnet);
  const [options2,setOption2] = useState(null);
  const [address, setAddress] = useState("");
  const [ amount, setAmount] = useState('');
  const [errorMessage,setError]= useState("");
  const [routes, setRoutes] = useState(mainnetRoutes)
  const [object,setObject] = useState(mainnet_present_object)
  const [color,setColor] = useState("white")
  const [colorback,setColorBack]  = useState("grey")
  const [option1name,setoption1name] = useState("")
  const [networkset,setNetwork] = useState("")
  const ethereum = window.ethereum;
   


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
           }).then(response => console.log(""))
         }
         }
 
       setAddress(res[0]);

       console.log(args)

      // handleOptionSelect1(mainnet_present_object[args])
     
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
      setoption1name(option.name)
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



const send = async ()=>{

  try {

    const contract_address = nftContracts[selectedOption1.name];

    const endpoint_contract = endpointContracts[selectedOption1.name]

    const Abi = ERC721ABI;

    const provider = new ethers.BrowserProvider(window.ethereum);
  
    const signer = await provider.getSigner();
  
    const contract = new ethers.Contract(contract_address,Abi,signer);
    const endpoint = new ethers.Contract(endpoint_contract,endpointAbi,signer);

 
  
    let remoteChainId = chainIds[selectedOption2.name];

    let adapterParams = ethers.solidityPacked(
    ["uint16", "uint", "uint", "address"],
    [2, 250000, ethers.parseUnits(amount,'ether') , address])
   
    let fees = await endpoint.estimateFees(remoteChainId,contract_address, "0x", false, adapterParams);


    
    const gas = ethers.parseUnits((parseFloat(ethers.formatEther(fees[0]))*parseFloat(1.03)).toString(),'ether')

    let tx = await (
  
    await contract.bridgeGas(            
                                  // 'from' address to send tokens
          remoteChainId,                 // remote LayerZero chainId
          ethers.ZeroAddress ,
          adapterParams,                     // amount of tokens to send (in wei)
          { value:gas,gasLimit:300000}
      )
      
     ).wait()
  
     
     await waitForMessageReceived(chainIds[selectedOption2.name],tx.transactionHash,3000,).then(async (message) => {

      setError(message.status)

    })

      const {messages} = await getMessagesBySrcTxHash(
        chainIds[selectedOption2.name],tx.transactionHash
      );

     
  } catch (error) {
 try {
  if((error.reason).includes("dstNativeAmt too large")){
    setError("Reduce the Bridge amount")
  }

  if((error.reason).includes("not enough native for fees")){
    setError("Insufficient balance in your wallet")
  }
 
  if((error.reason).includes("Rejected")){
    setError("Transaction Cancelled")
  }
 } catch (error) {
       setError(error.reason)
 }
   

  }

  }

    return(
        
      <div>

      <div class="chain-switch"> 
        <input type="button" style={{backgroundColor:color}} value="Mainnet" class="button1" onClick={mainNetoption} />
        <input type="button" style={{backgroundColor:colorback}} value="Testnet" class="button2" onClick={testNetoption}/>
      </div>
      
      
          <div class="buttons">
        <div class="content">
          <div class="claim-heading">
        <div>
      
        <h3 style={{color:"white",borderBottom:"2px solid #e10bc1", marginBottom:'10px', margin:'auto',paddingBottom:'10px'}} >Gas Refill</h3>
      
        </div>
           
            
          </div>
      
         
          <div className="selectchains">
              <div className="fromchain">
              <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown1} style={{backgroundColor:"white",color:"black"}}>
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
                {options.map((option) =>

              (
                  
                  <li key={option.id} 
                  
                  style={{border:"1px solid pink",width:"50%",boxSizing: "border-box",
                  height:"50px",
                  margin:"0.5px",
                  borderRadius:"5px" 
                }} 
                  
                  onClick={() => {
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
              <div style={{height:"50px",marginLeft:"20px"}}>
                
                <img src="Changechain.png" alt="ChangeChain" style={{width:60,height:30 , filter: "invert(1)",marginTop:10, cursor:'pointer'}} onClick={()=> { selectedOption2 ? changeChain(selectedOption2.name):setError("Select Both Option Fields")}} />

              </div>
              <div class="tochain">
              <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown2} style={{backgroundColor:"white",color:"black"}}>
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
                { 
               options2.map((option) => 
                (
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
                  
                )
              
                )
                }
              </ul>
            )}
          </div>
      
              </div>
      
          </div>
      
          <div  class="qty">
              
        
      <div style={{marginTop:"40px"}}>
        <p style={{color:"white"}}>Amount In Destination Chain</p>
        <p style={{color:'white',marginTop:'10px',marginBottom:"10px",fontSize:"small"}}>{`Max Gas : ${ selectedOption1 && selectedOption2 ? gasAmount[selectedOption1.name][selectedOption2.name][0]:"Undefined"}`}</p>

        <input type="number" name="Amount" style={{width:100,fontSize:18,height:"20px",margin:0,marginBottom:"0px"}} onChange={(e)=>{ setAmount(e.target.value)}} />
         
      </div>
      
      <div>
        <input class='sendButton' style={{width:100,height:"30px",fontSize:15,marginBottom:"5px"}}  type="button" value="Send" onClick={send}/>
       
      </div>
     
          </div>
        
        </div>


        <div class="button">
         
       <div style={{width:60}}></div>

           </div>
      </div>


<p style={{fontStyle:'italic', color:'white',marginLeft:"20%",marginRight:"auto"}}>**Any extra fees will be refunded by the layerzero client</p>
      <PopupMessage error={errorMessage? errorMessage:null} />
      <Footer/>
          </div>
        
      
    
    )
}

export default Gas; 