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

  
  const [showMenu, setShowMenu] = useState(false);

  const [setClicked,clicked] = useState(false)

  const [page,setPage] = useState('')

  const [ url,setUrl] = useState('')

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
 

const toggleMenu = () => {
  console.log(showMenu)
  setShowMenu(!showMenu);
};
 
const webpage =()=>{
  
} 

const pageClicked =(args)=>{
  setPage(args)
  setUrl(window.location.href)
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
    
        <ul  className={`navbar-items ${showMenu ? "show" : ""}`}>
          <li className={`navbar-clicked ${page==='home'?"show":""}`} onClick={e=>pageClicked("home")} style={{background: "none"}}><Link to="/" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `0px solid ` }} >Home</Link></li>
          <li className={`navbar-clicked ${page==='nft'?"show":""}`} onClick={e=>pageClicked("nft")}><Link to="/nfts" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `0px solid `}}>NFT</Link></li>
          <li className={`navbar-clicked ${page==='token'?"show":""}`} onClick={e=>pageClicked("token")}><Link to="/tokens" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `0px solid  `}}>Tokens</Link></li>
          <li className={`navbar-clicked ${page==='gas'?"show":""}`} onClick={e=>pageClicked("gas")}><Link to="/gasrefill" style={{width:"100%", height:"100%", background:"none",textDecoration:"none",paddingBottom:"10px",color:"white", borderBottom: `0px solid `}} >Gas</Link></li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
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

