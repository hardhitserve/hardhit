import {ethers} from 'ethers'
import { abi } from '../abi/abi';
export const Balance = async(contract,userAddress)=>{
    console.log(contract,userAddress)
 
const provider = new ethers.BrowserProvider(window.ethereum);

const tokenContract = new ethers.Contract(contract, abi.abi, provider);
await 
tokenContract.balanceOf(userAddress).then((balance) => {
    console.log('Token Balance:', balance.toString());
    return (ethers.formatEther(balance));
    // Use the token balance as needed
  })
  .catch((error) => {
    console.error('Error retrieving token balance:', error);
    return ("No balance")
    // Handle error
  });

}