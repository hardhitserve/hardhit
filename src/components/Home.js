import React, {useEffect}from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';

function HomePage(){

  useEffect(() => {
  document.title = "HardHit Homepage | Home"
  }, [])
  
    return (
      <div>
        <header>
          <h1>Hardhit</h1>
          <p>Bridging Cross-Chain Token and NFT Transfers with Layerzero Technology</p>
        </header>

        <nav>
          <button className="active">Home page</button>
          <button className="active" style={{textDecoration:"none",}}><Link style={{backgroundcolor:"none",textDecoration:"none",color:"whitesmoke"}} to="/gasrefill">Open App</Link></button>
        </nav>

        <section>
          <div className="container">
            <h2 className="section-heading">Send Tokens</h2>
            <div className="section-content">
              {/* Add your content related to sending tokens here */}
              <p>Effortlessly send tokens across different blockchain networks using Hardhit's innovative Layerzero technology. Say goodbye to limitations and enjoy seamless transactions with just a few clicks.</p>
              <p>Experience the future of cross-chain transfers with Hardhit!</p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-heading">Send NFTs</h2>
            <div className="section-content">
              {/* Add your content related to sending NFTs here */}
              <p>Unlock new possibilities for your NFTs by leveraging Hardhit's Layerzero technology. Seamlessly transfer your unique digital assets across various blockchain networks and explore a borderless world of creativity.</p>
              <p>Join the NFT revolution with Hardhit!</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="container">
            <h2 className="section-heading">Send Gas</h2>
            <div className="section-content">
              {/* Add your content related to sending NFTs here */}
              <p>Don't worry about the gas problems in each chain, now bridge native gas fees with HardHit Gas Bridge, any native gas to any chain</p>
              <p>Bridging native fees is limited by the Layerzero but this will be enough for making some transactions</p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }


export default HomePage;
