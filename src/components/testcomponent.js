import React, { useState } from 'react';
import './testcomponent.css';

const SendTokens = () => {
  const [fromChain, setFromChain] = useState('');
  const [toChain, setToChain] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState('');

  const handleFromChainChange = (event) => {
    setFromChain(event.target.value);
  };

  const handleToChainChange = (event) => {
    setToChain(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSendTokens = () => {
    // Perform logic to send tokens
    // Update balance and perform other necessary actions
    // You can update the balance text using the setBalance() function
    const newBalance = /* Logic to update balance */
    setBalance(newBalance);
  };

  return (
    <div className="send-tokens-container">
      <button className="claim-button">Claim</button>
      <div className="dropdown-container">
        <label htmlFor="from-chain">From Chain:</label>
        <select id="from-chain" value={fromChain} onChange={handleFromChainChange}>
          <option value="">Select From Chain</option>
          {/* Add options with images and names */}
        </select>
      </div>
      <div className="dropdown-container">
        <label htmlFor="to-chain">To Chain:</label>
        <select id="to-chain" value={toChain} onChange={handleToChainChange}>
          <option value="">Select To Chain</option>
          {/* Add options with images and names */}
        </select>
      </div>
      <div className="amount-container">
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <button className="send-button" onClick={handleSendTokens}>Send</button>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default SendTokens;
