import React, { useEffect,useState } from 'react';


function PopupMessage  ({ error }) {

 const [message,setMessage] = useState("")
 
 useEffect(() => {
   console.log(error)
  
    if (error) {
       setMessage(error)
       setTimeout(() => {
            setMessage("")
          }, 7000);
    }
  }, [error]);

  return (
    <div style={{  position: 'fixed', top: '100px', right: '20px', zIndex: 9999,minWidth:200,minHeight:100,maxWidth:500,display:message!==""?'block':'none',width:"auto" }}>

        {error?( <div style={{ background: "#e10bc1", color: 'white', padding: '10px', borderRadius: '4px', marginBottom: '5px',width:"auto", }}>{message}</div>):""

}
    
    </div>
  );
};

export default PopupMessage;





// import React, { useState, useEffect } from 'react';

// const PopupMessage = (error) => {
//   const [messages, setMessages] = useState([]);

 
//   useEffect(() => {
//     const timer = setTimeout(() => {
      
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [error]);

//   return (
//     <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
     
//         <div  style={{ background: 'red', color: 'white', padding: '10px', borderRadius: '4px', marginBottom: '5px' }}>
//         {error}
//         </div>
      
//     </div>
//   );
// };

// export default PopupMessage;
