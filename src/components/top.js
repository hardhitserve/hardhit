import {ethers} from 'ethers'
import {useEffect, useState} from 'react';
import {network,contracts} from '../abi/chains'
import  {Balance} from '../abi/balance';
import {Link } from 'react-router-dom';
import './navbar.css'
import PopupMessage from './popup';


function Header(){
  const [address,setAddress] = useState("")

  const [connected, setConnected] = useState("Connect")

  const [networkSet, setNetworkSet] = useState("")

  const [balance, setBalance] = useState(0)

  const [error,setError] = useState('')

  const [color1,setColor1] = useState('')
  const [color2,setColor2] = useState('')
  const [color3,setColor3] = useState('')
  const [color4,setColor4] = useState('')

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
            const balance = await provider.request({
              method: 'eth_getBalance',
              params: [res[0], 'latest'],
            });
          setBalance((ethers.formatEther(balance)).substring(0, 5)+"ETH")
  
            isConnected()
           
          } else {
     
            setConnected(res[0].slice(0,5)+"..."+res[0].slice(res[0].length-5,res[0].length));
  
            const currentChainId = await window.ethereum.request({
              method: 'eth_chainId',
            });
           
            const balance = await provider.request({
            method: 'eth_getBalance',
            params: [res[0], 'latest'],
          });

          
          // window.ethereum.on('chainChanged', ()=>{console.log("jhbjh")});

        setBalance((ethers.formatEther(balance)).substring(0, 5)+" ETH")
            setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`])
  
            setAddress(res[0]);
          }
        } catch (error) {
          setError("Wallet Not Connected")
        }

      
      }
      connectButton()
      
    }
  )
 
// const changecolor =(args)=>{
//     let array = [1,2,3,4]

//     for(let i=0;i.array.length;i++){
//       if(args=== array[i]){
        
//       }
//     }
// }
 
  const changeColor1 =()=>{
    setColor1('#e10bc1')
    setColor2('pink')
    setColor3('pink')
    setColor4('pink')
  }
  const changeColor2 =()=>{
    setColor1('pink')
    setColor2('#e10bc1')
    setColor3('pink')
    setColor4('pink')
  }
  const changeColor3 =()=>{
    setColor1('pink')
    setColor2('pink')
    setColor3('#e10bc1')
    setColor4('pink')
  }
  const changeColor4 =()=>{
    setColor1('pink')
    setColor2('pink')
    setColor3('pink')
    setColor4('#e10bc1')
  }


window.ethereum.on('chainChanged',async ()=>{  

  const currentChainId = await provider.request({
    method: 'eth_chainId',
  });

  
  setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]);} 
  
  );


  async function isConnected() {

try {
  
  const accounts = await provider.request({method: 'eth_accounts'}); 
    
  const currentChainId = await provider.request({
    method: 'eth_chainId',
  });

 
  if (accounts.length) {
     
    setConnected(accounts[0].slice(0,5)+"..."+accounts[0].slice(accounts[0].length-5,accounts[0].length))

     console.log(currentChainId)

    setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]);

    const balance = await provider.request({
      method: 'eth_getBalance',
      params: [accounts[0], 'latest'],
    });
  setBalance((ethers.formatEther(balance)).substring(0, 5)+"ETH")

  } else {

    const provider = new ethers.BrowserProvider(window.ethereum);
  
    await provider.send("eth_requestAccounts", []).then(async res=>{

      setConnected(res[0].slice(0,5)+"..."+res[0].slice(res[0].length-5,res[0].length));

      setNetworkSet(network[`0x${currentChainId.toUpperCase().replace("0X", '')}`]);

      const balance = await provider.request({
        method: 'eth_getBalance',
        params: [res[0], 'latest'],
      });
    setBalance((ethers.formatEther(balance)).substring(0, 5)+"ETH")

    })

  }
} catch (error) {
  setError(error.toString().split('\n')[0])
}



 }

return ( 
<div style={{ backgroundColor: "black"}}>
<header>
    <div class="container">
      <div class="logo-container">
        <img src="logo.png" alt="Logo" class="logo"/>
        <span class="project-name">HARD HIT</span>
      </div>
      
      <nav class="navigation">
        <ul>
          <li onClick={e=>changeColor1()} style={{background: "none"}}><Link to="/" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `6px solid ${color1}` }} >Home</Link></li>
          <li onClick={e=>changeColor2()}><Link to="/nfts" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `6px solid ${color2}`}}>NFT</Link></li>
          <li onClick={e=>changeColor3()}><Link to="/tokens" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `6px solid ${color3} `}}>Tokens</Link></li>
          <li onClick={e=>changeColor4()}><Link to="/gas" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `6px solid ${color4}`}} >GAS</Link></li>

        </ul>
      </nav>
     
     
      <div class="buttons-container">
        <button style={{display: networkSet?"block":"none", cursor:'default'}} class="change-chain-button">{networkSet}</button>
        <button class="connect-button" onClick={isConnected}>{connected}</button>
      </div>
    </div>
  </header>

  <PopupMessage error={error}/>
</div>
    )
 
}

export default Header;

