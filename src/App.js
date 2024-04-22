import './App.css';
import Header from './components/top';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NftSend from './components/nftsend';
import Mint from './components/mint';
import HomePage from './components/Home';
import DropdownMenu from './components/dropdownmenu'
import './components/main.css'
import Gas from './components/gas';
import GasRevamped from './components/gasrevamped';
import Messaging from './messaging/messagingcomponent';
import MessageDisplay from './messaging/contracts/testmessages';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  
  return (
    <Router >
    <div style={{ backgroundColor:'black',width:"100%",height:"100%", alignItems:"center",}} >
      

      <Header style={{margin:"auto",backgroundColor:'black'}}></Header>
     
        <Routes>

        <Route path="/" element={ <HomePage />}>
          
          </Route>
          <Route path="/tokens" element={ <DropdownMenu />}>
          
          </Route>
          <Route path="/nfts" element={ <NftSend />}>
           
          </Route>

          <Route path="/mint" element={ <Mint />}>
           
           </Route>
           <Route path="/gas" element={ <Gas />}>
           
           </Route>
         

           <Route path="/gasrefill" element={ < GasRevamped/>}>
           </Route>
           <Route path="/message" element={ <Messaging />}>
          
           
           </Route>
        </Routes>
    </div>
    <ToastContainer/>
    </Router>
  );
}

export default App;
