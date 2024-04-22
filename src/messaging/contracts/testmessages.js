import { toBigInt } from 'ethers';
import React, { useEffect, useState } from 'react';

const MessageDisplay = () => {
  // Assuming you have two arrays of messages: messagesFromTo and messagesToFrom
  const messagesFromTo = [
    { from: 'UserA', to: 'UserB', message: 'Hello', timestamp: toBigInt(1636740000) },
    { from: 'UserB', to: 'UserA', message: 'Hi there!', timestamp: toBigInt(1636741000) },
    // ... other messages
  ];

  const messagesToFrom = [
    { from: 'UserB', to: 'UserA', message: 'How are you?', timestamp: toBigInt(1636742000) },
    { from: 'UserA', to: 'UserB', message: 'I\'m good, thanks!', timestamp: toBigInt(1636743000) },
    // ... other messages
  ];

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    // Combine and sort messages based on timestamp
    const combinedMessages = [...messagesFromTo, ...messagesToFrom].sort(
      (a, b) => Number(b.timestamp) - Number(a.timestamp)
    );
    setAllMessages(combinedMessages);
  }, [messagesFromTo, messagesToFrom]);

  return (
    <div style={{ maxHeight: '600px', overflowY: 'auto', backgroundColor:'yellow' }}>
    {allMessages.map((message, index) => (
      <div
        key={index}
        style={{
          padding: '8px',
          margin: '4px',
          border: '1px solid #ccc', 
          borderRadius: '8px',
          maxWidth: '60%',
          alignSelf: message.from === 'UserA' ? 'flex-start' : 'flex-end',
        }}
      >
        <strong>{message.from}: </strong>{message.message} ({new Date(Number(message.timestamp)).toLocaleString()})
      </div>
    ))}
  </div>
  );
};

export default MessageDisplay;
