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
import {fetchData,tokenTickers} from '../abi/api';
import './gasrevamp.css'
import _ from 'lodash';


function GasRevamped(){
   
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
  const [priceof1stchain, setPriceOFFirstChain] = useState("")
  const [gasConsumed,setGasConsumed] = useState("")
  const ethereum = window.ethereum;
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customInput, setCustomInput] = useState(false)

  const handleButtonClick = async (args) => {

    try {
      
    setSelectedAmount(args);

    setPriceOFFirstChain(await fetchData(selectedOption1.name))

    let ObtainedAmount = (parseFloat(args)/await fetchData(selectedOption2.name))

   

    setAmount(ObtainedAmount)

    await sendReal(ObtainedAmount)


    } catch (error) {
      setError("Select From and To chains")
    }


  };

  const debounceApiCall = _.debounce((value) => {
    handleButtonClick(value);
   
  }, 3000);

  const handleInputChangeInCustom = (event) => {

    const newValue = event.target.value;

    // Call the debounced function with the new value
    debounceApiCall(newValue);
  };
  const custom = ()=>{

    if(customInput){
      setCustomInput(false)
    } else {
      setCustomInput(true)
    }
 
      
  
  }

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
          //  ethereum.request({
          //  method: 'wallet_addEthereumChain',
          //  params: [chains[args]],
          //  }).then(response => console.log(""))
          setError("Add chain to change ")
          
         }
         }
 
       setAddress(res[0]);

      

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
    [2, 250000, ethers.parseUnits(amount.toString(),'ether') , address])
   
    let fees = await endpoint.estimateFees(remoteChainId,contract_address, "0x", false, adapterParams);

    const gas = ethers.parseUnits((parseFloat(ethers.formatEther(fees[0]))*parseFloat(1.012)).toString(),'ether')


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
   
  }}

  const sendReal = async (args)=>{

   

    const contract_address = nftContracts[selectedOption1.name];

    const endpoint_contract = endpointContracts[selectedOption1.name]

    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();
  
    const endpoint = new ethers.Contract(endpoint_contract,endpointAbi,signer);

    let remoteChainId = chainIds[selectedOption2.name];

    let adapterParams = ethers.solidityPacked(
    ["uint16", "uint", "uint", "address"],
    [2, 250000, ethers.parseUnits(args.toString(),'ether') , address])

    let fees = await endpoint.estimateFees(remoteChainId,contract_address, "0x", false, adapterParams);


    setGasConsumed(ethers.formatEther(fees[0]))

   

    

  }

    return(
        
      <div>

      <div class="chain-switch"> 
        <input type="button" style={{backgroundColor:color}} value="Mainnet" class="button1" onClick={mainNetoption} />
        <input type="button" style={{backgroundColor:colorback}} value="Testnet" class="button2" onClick={testNetoption}/>
      </div>
      
      
       <div class="buttonss frame" style={{width:"40%"}}>

           <div className="heading">
             <h3 style={{color:"white"}}>Gas Refill</h3>
            </div>
            <div className="chains" style={{width:"100%", }}>
                <div className="fromchain">
                <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown1} style={{backgroundColor:"white",color:"black",width:"100%",minWidth:"150px",height:"50px"}}>
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
                <div class="tochain">
                <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown2} style={{backgroundColor:"white",color:"black",width:"100%",minWidth:"150px",height:"50px"}}>
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
            <div className="amounts" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <p style={{color:'white'}}>Enter Amount</p>

                {/* buttons 5$ 10$*/}

                <div className="button-container">
                    <button
                        className={`amount-button ${selectedAmount === 5 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(5)}
                    >
                        $5
                    </button>
                    <button
                        className={`amount-button ${selectedAmount === 10 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(10)}
                    >
                        $10
                    </button>
                    <button
                        className={`amount-button ${selectedAmount === 20 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(20)}
                    >
                        $20
                    </button>
                    <button
                        className={`amount-button ${customInput? 'selected' : ''}`}
                        onClick={custom}
                    >
                        Custom
                    </button>

                    
                    </div>
                    <p style={{color:'white',marginTop:'10px',marginBottom:"10px",fontSize:"small",marginLeft:"auto",marginRight:"auto"}}>{`Max Gas : ${ selectedOption1 && selectedOption2 ? gasAmount[selectedOption1.name][selectedOption2.name][0]:"Undefined"}`}</p>

                    <div class="inputs">

                  { customInput ? <input type="number" placeholder='In $' name="Amount" style={{width:100,fontSize:18,height:"20px",margin:0,marginBottom:"10px",style:'none',marginLeft:"auto",marginRight:"auto",borderRadius:2,}} onChange={
                    async (e)=>{
                      
                      
                     // setAmount(await fetchData({amount:e.target.value,name:selectedOption2.name}))
                      handleInputChangeInCustom(e)
                      }} />:""}

                    </div>
                

            </div>

            <div className="sendButon" style={{width:"60%",marginLeft:"auto",marginRight:"auto",float:"left",marginTop:"10px",backgroundColor:"#26292c",padding:5,borderRadius:5}}>
         
                <p style={{color:'white',fontSize:"small"}}> Receive on destination : {parseFloat(amount).toFixed(4)} {tokenTickers[`${selectedOption2?selectedOption2.name:""}`]}</p>
                <p style={{color:'white',fontSize:"small"}}> Estimated cost :  {gasConsumed?( priceof1stchain* gasConsumed).toFixed(2):""}$ </p>
                <input class='amount-button'  style={{width:"100%",alignItems:'center',height:'25px',padding:'1px',border:"2px solid white",borderRadius:2,marginBottom:'10px'}}  type="button" value="Send" onClick={send}/>

            </div>
                          <div className="layerzero" style={{display:"flex",flexDirection:"row",width:"auto", float:"right",alignItems:"center",marginRight:'0%',marginBottom:"-30px",}}>
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

     
      <Footer style={{marginTop:"50px",marginBottom:"0px"}} />
      <PopupMessage error={errorMessage? errorMessage:null} />
     </div>
   
    )
}

export default GasRevamped; 