import React from "react";
import {waitForMessageReceived} from "@layerzerolabs/scan-client"
function LayerZeroTx(){

    const ChekTrnasaction = async (args)=>{

        await waitForMessageReceived(args.srcChainId ,args.hash )
        .then(async (message) => {
        
         console.log(message.status)
          // if(message.status == "FAILURE"){
      
          //     const nonBlockingApp = await ethers.getContractAt("NonblockingLzApp", message.dstUaAddress)
      
          //     // concat remote and local address
          //     let remoteAndLocal = hre.ethers.utils.solidityPack(
          //         ['address','address'],
          //         [message.srcUaAddress, message.dstUaAddress]
          //     )
          
          //     let bool = await nonBlockingApp.failedMessages(message.srcChainId, remoteAndLocal, message.srcUaNonce)
          //     console.log(`failedMessages: ${bool}`)
          // }
          
          // updateTx({
          //   completed: true,
          //   confirmation: {
          //     chainId: message.dstChainId,
          //     txHash: message.dstTxHash,
          //   },
          // });
        
      })
      .finally((list) => {
        console.log(list)
      });
    }
   

  return(
    <div>
        <button type="submit" onClick={ChekTrnasaction()}>Check</button>
    </div>
  )
}