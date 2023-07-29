import React, { useState } from 'react';
import {ethers} from 'ethers';
import { ERC721ABI } from '../abi/erc721abi';
import { chains } from '../abi/chains';

const Mint = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const [imageHash,setImageHash] = useState("");

  const [name,setName] = useState("");


  const [description, setDescriptions] = useState("");
 
  const [external_url, setExternal_url] = useState("");

  const [nameOfAuthor, setNameOfAuthor] = useState("");



  const provider = new ethers.BrowserProvider(window.ethereum)



  const [image, setImage] = useState(null);
  
  const ethereum = new ethers.BrowserProvider(window.ethereum);

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };
  async function ChangeChain(args){

    if(args!=="polygon"){
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chains[args].chainId }],
      })
    }
  }

const mint = async ()=>{

    let abi = ERC721ABI.abi;
    const contract_address = ERC721ABI.address;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contract_address,abi,signer);
    const tx = await contract.mint();
    console.log(tx)
  }

  return (
 
<div class="formdiv">
  
  <div class="form">

  <div class="heading">
    <h3 style={{color: "aliceblue"}}>Mint an NFT</h3>
  </div>

   <div class="imagecontainer">
    {/* <div class="image-container" id="image-container">
      <div class="plus-button">+</div>
     </div> */}

<div>
      <label htmlFor="image-upload">
        {image ? (
          <div  class='image-container'>
            <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%' }} />
            <button
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: 'transparent',
                cursor: 'pointer',
                fontSize:'30px',
                border:'2px dotted black',
              }}
              onClick={handleRemoveImage}
            >
              X
            </button>
          </div>
        ) : (
          <div>
 <div class="image-container" id="image-container">
            <div class="plus-button">+</div></div>        
                <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
        )}
      </label>
    </div>
   </div>

  <div>
    <p style={{color: "aliceblue"}}>Name </p>
    <input type="text" name="name" id="" onChange={e=>setName(e.target.value)}/>
  </div>

<input type="file" id="file-upload"  />
      <div>
        <p style={{color: "aliceblue"}}>Description </p>
        <textarea name="description" id="" cols="30" rows="10" onChange={e=>setDescriptions(e.target.value)}></textarea>
      
      </div>
    
      <div>
        <p style={{color: "aliceblue"}}>External_url </p>
        <input type="text" name="External_url" id="" onChange={e=>setExternal_url(e.target.value)}/>
      </div>
      <div>
        <p style={{color: "aliceblue"}}>Author url </p>

        <input type="text" name="name" id="" onChange={e=>setNameOfAuthor(e.target.value)}/>
      </div>
      
  <div>
    <button type="button" onClick={mint}>Mint</button>
  </div>
      </div>
  
</div>
  );
};

export default Mint;
