import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span style={{ fontWeight: 'bold',marginLeft:50 , color:"#e10bc1"}}><h2>HARDHITNFT</h2></span>
      </div>
      <div>
         <a style={{textDecoration:'none'}} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={{ margin: '0 5px', color:'whitesmoke' }}>FaceBook</i>
        </a>
        <a  style={{textDecoration:'none'}} href="https://github.com/hardhitserve" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" style={{ margin: '0 5px', color:'whitesmoke'  }}>Github</i>
        </a>
        <a style={{textDecoration:'none'}} href="https://www.twitter.com/hardhitserve" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ margin: '0 5px', color:'whitesmoke'  }}>Twitter</i>
        </a>
        <a style={{textDecoration:'none'}} href="https://www.discord.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ margin: '0 5px', color:'whitesmoke'  }}>Discord</i>
        </a>
        {/* Add other social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
