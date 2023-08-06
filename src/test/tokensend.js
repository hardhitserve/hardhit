import {ethers} from 'ethers';
import React, { useState , useEffect} from 'react';
import {abi} from '../abi/abi'
import {chains,chainIds,contracts,network} from '../abi/chains'
import {waitForMessageReceived} from "@layerzerolabs/scan-client"
import './main.css'

function Middle(){

  isConnected()
 
 const [address, setAddress] = useState("");
 const [contractAddress,setContractAddress] = useState(" ");
 const [selectedChainFrom,setselectedChainFrom] = useState("")
 const [selectedChainTo,setselectedChainTo] = useState("")
 const [networkSet, setNetworkSet] = useState("")
 const [ qty, setQty] = useState(0);
 const [delivered,setDelivered] = useState("");
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
            }).then(response => console.log(response))
          }
          }
  
        setAddress(res[0]);
      
    }
  }


    const abiEncode = new ethers.AbiCoder();

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


    const handleFieldChangeFrom = (event) => {
      changeChain(event.target.value);
      setselectedChainFrom(event.target.value);
    };
  

    const handleFieldChangeTo = (event) => {
      setselectedChainTo(event.target.value);
    };
  
    const send = async ()=>{
     
      const contract_address = contracts[selectedChainFrom];

      const Abi = abi.abi;

      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const contract = new ethers.Contract(contract_address,Abi,signer);

      console.log(selectedChainTo)

      const toAddress = contracts[selectedChainTo];

      let remoteChainId = chainIds[selectedChainTo];

      const toAddressBytes = abiEncode.encode(['address'],[toAddress])

     let adapterParams = ethers.solidityPacked(["uint16", "uint256"], [1, 200000]) // default adapterParams example

    // v2 adapterParams, encoded for version 2 style
// which can instruct the LayerZero message to give 
// destination 55555555555 wei of native gas into a specific wallet
  //   let adapterParams = ethers.solidityPacked(
  // ["uint16", "uint", "uint", "address"],
  // [2, 200000, 55555, toAddress])

  console.log(adapterParams)
    
      let quantity =  ethers.parseEther(qty);

      console.log(remoteChainId, toAddressBytes, quantity, false, adapterParams)

      let fees = await contract.estimateSendFee(remoteChainId, toAddressBytes, quantity, false, adapterParams)

      console.log(`fees[0] (wei): ${fees[0]} / (eth): ${ethers.formatEther(fees[0])}`)

      const gas = fees[0]*ethers.toBigInt(4)

     
      
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
  
   

    await waitForMessageReceived(chainIds[selectedChainFrom],tx.hash).then(async (message) => {
     console.log(message.status)
      // if(message.status == "FAILURE"){
  
      //     const nonBlockingApp = await ethers.getContractAt("NonblockingLzApp", message.dstUaAddress)
  
      //     // concat remote and local address
      //     let remoteAndLocal = hre.ethers.utils.solidityPack(
      //         ['address','address'],
      //         [message.srcUaAddress, message.dstUaAddress]
      //     )
      
      //     let bool = await nonBlockingApp.failedMessages(message.srcChainId, remoteAndLocal, message.srcUaNonce)
      //     console.log(`failedMessages: ${bool}`)
      // }
      
      // updateTx({
      //   completed: true,
      //   confirmation: {
      //     chainId: message.dstChainId,
      //     txHash: message.dstTxHash,
      //   },
      // });
    
  })
 }
 const claim = ()=>{
  console.log('claim') 
  // <div className="TokensendOuter" style={{width: "50%", height: 424, paddingLeft: 42, paddingRight: 42, paddingTop: 13, paddingBottom: 13, borderRadius: 10, overflow: 'hidden', border: '1px rgba(191.96, 34.39, 157.29, 0.92) solid', backgroundColor: 'black', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  //     <div className="Group4" style={{width: "100%", height: 333, position: 'relative'}}>
  //       <div className="Fromchain" style={{width: 207.17, height: 33.62, left: 0, top: 107.67, position: 'absolute', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 5}} >
  //       <select style={{ width:"100%",height:"100%", fontSize:"15px"}} value={selectedChainFrom} onChange={handleFieldChangeFrom}>
  //                       <option value="">From Chain</option>
  //                       <option value="Goerli" >Goerli</option>
  //                       <option value="Bsc-testnet">Bsc Testnet</option>
  //                         <option value="Mumbai">Polygon</option>
  //                         <option value="Fuji">Avax-C</option>
  //                       <option value="Scroll">Scroll</option>
  //                       <option value="Base">Base</option>
  //                       <option value="Zkevm-testnet">Polygon_zkevm</option>
  //                     <option value="Linea">Linea</option>
  //                       <option value="Moonbeam-alpha">Moonbeam</option>
  //                       <option value="Zksync-testnet">Zksync</option>
  //                       <option value="Fantom">Fantom</option>
  //                     </select>
  //       </div>
  //       <div className="Tochain" style={{width: 207.17, height: 33.62, left: 335, top: 107.67, position: 'absolute', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 5}} >
  //       <select style={{ width:"100%",height:"100%", fontSize:"15px"}} value={selectedChainTo} onChange={handleFieldChangeTo}>
  //                       <option value="">To Chain</option>
  //                       <option value="Goerli" >Goerli</option>
  //                       <option value="Bsc-testnet">Bsc Testnet</option>
  //                       <option value="Mumbai">Polygon</option>
  //                       <option value="Fuji">Avax-C</option>
  //                       <option value="Scroll">Scroll</option>
  //                       <option value="Base"><img src="bg.png" alt="" /> Base</option>
  //                       <option value="Zkevm-testnet">Polygon_zkevm</option>
  //                       <option value="Linea">Linea</option>
  //                       <option value="Moonbeam-alpha">Moonbeam</option>
  //                       <option value="Zksync-testnet">Zksync</option>
  //                       <option value="Fantom">Fantom</option>
  //                     </select>
  //       </div>
       
  //       <div className="ClaimButton" style={{width: 72, height: 27, left: 470, top: 0, position: 'absolute', textAlign:'center',backgroundColor:"pink"}} >
    
  //             <button style={{ background:"none",border: "none", width:'fill',height:"100%",textAlign:'center', margin:"none"}} onClick={claim}>Claim</button>
    
  //       </div>
  //       <div className="AmountButton" style={{width: 128, height: 28, left: 207, top: 231, position: 'absolute', background: '#D9D9D9', borderRadius: 5}} >
        
  //           <input type="number" style={{width:"100%",height:"100%", overflow:"hidden" }} onChange={e=>setQty(e.target.value)}/>
    
  //       </div>
  //       <div className="Sendbutton" style={{width: 84, height: 26, left: 229, top: 307, position: 'absolute', background: '#E809C5', borderRadius: 5}}>
        
  //             <button style={{ background:"none",border: "none", width:"100%",height:"100%"}} onClick={send}>Send</button>
    
  //       </div>
       
  //     </div>
  //   </div>
 }


    return(

      <div>
        <div class="chain-switch"> 
  <input type="button" value="Mainnet" class="button1"/>
  <input type="button" value="Testnet" class="button2"/>
</div>
      
      
<div class="buttons">

 
<div class="content">
  <div class="claim-heading">

    <h3 style={{color: "aliceblue"}}>Send NFT</h3>
   
    
  </div>

 
  <div class="selectchains">
      <div class="fromchain">   <select  value={selectedChainFrom} onChange={handleFieldChangeFrom} >
          <option value="">From Chain</option>
          <option value="Goerli" >Goerli</option>
        <option value="Bsc-testnet">Bsc Testnet</option>
          <option value="Mumbai">Polygon</option>
          <option value="Fuji">Avax-C</option>
          <option value="Scroll">Scroll</option>
          <option value="Base">Base</option>
          <option value="Zkevm-testnet">Polygon_zkevm</option>
          <option value="Linea">Linea</option>
          <option value="Moonbeam-alpha">Moonbeam</option>
          <option value="Zksync-testnet">Zksync</option>
          <option value="Fantom">Fantom</option>
      </select></div>
      <div class="tochain">
  
        <select  value={selectedChainTo} onChange={handleFieldChangeTo}>
          <option value="">To Chain</option>
          <option value="Goerli" >Goerli</option>
      <option value="Bsc-testnet">Bsc Testnet</option>
          <option  value="Mumbai">
            Polygon
            </option>
          <option value="Fuji">Avax-C</option>
          <option value="Scroll">Scroll</option>
          <option value="Base">Base</option>
          <option value="Zkevm-testnet">Polygon_zkevm</option>
          <option value="Linea">Linea</option>
          <option value="Moonbeam-alpha">Moonbeam</option>
          <option value="Zksync-testnet">Zksync</option>
          <option value="Fantom">Fantom</option>
      </select></div>

  </div>

  <div  class="qty">
      

<div>
<p style={{color: "aliceblue"}}>TokenID</p>

<input type="number" name="Quantity" id=""/>
</div>

<div>
<input type="button" style={{width: "fit-content"}} value="Send"/>
</div>



  </div>
</div>
<div class="button">
 <button >Mint</button>
</div>
</div>
      
      
      </div>
     


    )
}

export default Middle; 

