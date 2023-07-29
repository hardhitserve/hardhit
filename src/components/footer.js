import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}><h2>HARDHITNFT</h2></span>
      </div>
      <div>
        <button>  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={{ margin: '0 5px', color: 'black' }}>Hello</i>
        </a></button>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          Hello
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ margin: '0 5px', color: '#00acee' }}></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ margin: '0 5px', color: '#c32aa3' }}></i>
        </a>
        {/* Add other social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
