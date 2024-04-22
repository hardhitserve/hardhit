// App.js
import React, { useState, useEffect } from 'react';
import { N, ethers, toBigInt } from 'ethers';
import MessageStorage from './contracts/MessageStorage.json'; // Replace with your contract's JSON file

const Messaging = () => {

  const [contract, setContract] = useState();
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [address,setAddress] = useState('');
  const [recipientMessages,setrecipientMessages] = useState([])
  const [contact_now_getting,setcontact_now_getting] = useState('contact')
  const [color,setColor] = useState('black')

  useEffect(() => {
    // Initialize Ethereum provider and contract
    const init = async () => {
      const ethereum = window.ethereum;
      if (ethereum) {
        const res = await ethereum.request({ method: 'eth_accounts' })
        setAddress(res[0])
       
        const provider = new ethers.BrowserProvider(window.ethereum);
  
         const signer = await provider.getSigner();
        const contractAddress = '0xb7876034Af218581ba129411095f8f3DE41ea0e9'; // Replace with your contract address
        const newContract = new ethers.Contract(contractAddress, MessageStorage, signer);
        setContract(newContract);
      } else {
        console.error('Please install MetaMask or use a browser with Ethereum support.');
      }
    };

    init();
  }, []);

  const sendMessage = async () => {
   
    
    try {
      if (contract && recipient && message) {
        await contract.sendMessage(recipient, message,1);
        setRecipient('');
        setMessage('');
        // loadMessages(); // Refresh messages after sending
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

 

  const loadallcontacts=async (_address)=>{
    const array = await contract.getUserAddresses(address);
    setContacts(array)
  }
  useEffect(() => {
    if (contract) {
    //  loadMessages();
      loadallcontacts(address);
    }
  }, [contract]);
  
  const showMessages=async (msg)=>{ 
   setColor('yellow')
    setcontact_now_getting(msg.slice(0,5)+"..."+msg.slice(msg.length-5,msg.length))
    const messages = await contract.getMessages(address,msg)
    console.log("messages from ",messages[0],"messages to ",messages[1])
    const combine_to_and_from = [...messages[0],...messages[1]].sort(
      (a, b) => Number(a[3]) - Number(b[3])
    );
    setrecipientMessages(combine_to_and_from)
    setRecipient(msg);
  }

  return (
    <div  style={{color:'white', display:'flex',flexDirection:'row',border:'2px solid pink',height:"500px",width:"100%",overflowY: 'auto'}}>
   
   <div>
      {/* contacts block */}
      <div style={{margin:5,backgroundColor:'GrayText',border:'2px solid black'}}>
        
     
        <ul>
          <h3>Contacts</h3>
          {contacts.map((msg, index) => (
            <li key={index} onClick={()=>showMessages(msg)} style={{backgroundColor:msg===recipient?'blue':'grey'}}>
             <p style={{color:'whitesmoke'}}>{msg.slice(0,5)+"..."+msg.slice(msg.length-5,msg.length)}</p>
            </li>
          ))}
        </ul>
      </div>
   </div>

   {/* messages and send section */}
   <div>
       

<div style={{ display: 'flex', flexDirection: 'column', color:'white' ,alignItems:'end'}}>
      {recipientMessages.map((message, index) => (
        <div
          key={index}
          style={{
            padding: '8px',
            margin: '4px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            maxWidth: '60%',
            alignSelf: message[0].toUpperCase()=== address.toUpperCase()  ? 'flex-start' : 'flex-end',
          }}
        >
          <strong>{message[0].slice(0,5)+"..."+message[0].slice(message[0].length-5,message[0].length)}: </strong>{message[2]} ({new Date(parseInt((message[3]).toString()) * 1000).toLocaleString()})
        </div>
      ))}
    </div> 



{/* send and receive block */}
<div>



     <label style={{color:'white',margin:10}}>
          Recipient:
          <input type="text" value={recipient} placeholder={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </label>
  
    
        <label style={{color:'white'}}>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

   
        <button onClick={sendMessage} style={{color:'white'}}>Send Message</button>
    
   </div>
 
    </div>
    </div>
  );
};

export default Messaging;
