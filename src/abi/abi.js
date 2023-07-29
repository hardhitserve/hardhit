// export const contractAddress = {}
// export const ABI = ""

export const abi = {
    "address": "0x873cf9EDA325b9Fa444909524a95a8C65ca8830E",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_layerZeroEndpoint",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_initialSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "_sharedDecimals",
            "type": "uint8"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_hash",
            "type": "bytes32"
          }
        ],
        "name": "CallOFTReceivedSuccess",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_reason",
            "type": "bytes"
          }
        ],
        "name": "MessageFailed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "NonContractAddress",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "ReceiveFromChain",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_payloadHash",
            "type": "bytes32"
          }
        ],
        "name": "RetryMessageSuccess",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "_toAddress",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "SendToChain",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "_type",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_minDstGas",
            "type": "uint256"
          }
        ],
        "name": "SetMinDstGas",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "precrime",
            "type": "address"
          }
        ],
        "name": "SetPrecrime",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "_remoteChainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_path",
            "type": "bytes"
          }
        ],
        "name": "SetTrustedRemote",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "_remoteChainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_remoteAddress",
            "type": "bytes"
          }
        ],
        "name": "SetTrustedRemoteAddress",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "_useCustomAdapterParams",
            "type": "bool"
          }
        ],
        "name": "SetUseCustomAdapterParams",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "DEFAULT_PAYLOAD_SIZE_LIMIT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "NO_EXTRA_GAS",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PT_SEND",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "PT_SEND_AND_CALL",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "internalType": "bytes32",
            "name": "_from",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "_gasForCall",
            "type": "uint256"
          }
        ],
        "name": "callOnOFTReceived",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "circulatingSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "name": "creditedPackets",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes32",
            "name": "_toAddress",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "_dstGasForCall",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "_useZro",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "_adapterParams",
            "type": "bytes"
          }
        ],
        "name": "estimateSendAndCallFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "nativeFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "zroFee",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes32",
            "name": "_toAddress",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_useZro",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "_adapterParams",
            "type": "bytes"
          }
        ],
        "name": "estimateSendFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "nativeFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "zroFee",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "name": "failedMessages",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          }
        ],
        "name": "forceResumeReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_version",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_configType",
            "type": "uint256"
          }
        ],
        "name": "getConfig",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_remoteChainId",
            "type": "uint16"
          }
        ],
        "name": "getTrustedRemoteAddress",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          }
        ],
        "name": "isTrustedRemote",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "lzEndpoint",
        "outputs": [
          {
            "internalType": "contract ILayerZeroEndpoint",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          }
        ],
        "name": "lzReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          }
        ],
        "name": "minDstGasLookup",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          }
        ],
        "name": "nonblockingLzReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          }
        ],
        "name": "payloadSizeLimitLookup",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "precrime",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          }
        ],
        "name": "retryMessage",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes32",
            "name": "_toAddress",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          },
          {
            "internalType": "uint64",
            "name": "_dstGasForCall",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "refundAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "zroPaymentAddress",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "adapterParams",
                "type": "bytes"
              }
            ],
            "internalType": "struct ICommonOFT.LzCallParams",
            "name": "_callParams",
            "type": "tuple"
          }
        ],
        "name": "sendAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes32",
            "name": "_toAddress",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "refundAddress",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "zroPaymentAddress",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "adapterParams",
                "type": "bytes"
              }
            ],
            "internalType": "struct ICommonOFT.LzCallParams",
            "name": "_callParams",
            "type": "tuple"
          }
        ],
        "name": "sendFrom",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_version",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_configType",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_config",
            "type": "bytes"
          }
        ],
        "name": "setConfig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "_packetType",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_minGas",
            "type": "uint256"
          }
        ],
        "name": "setMinDstGas",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_size",
            "type": "uint256"
          }
        ],
        "name": "setPayloadSizeLimit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_precrime",
            "type": "address"
          }
        ],
        "name": "setPrecrime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_version",
            "type": "uint16"
          }
        ],
        "name": "setReceiveVersion",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_version",
            "type": "uint16"
          }
        ],
        "name": "setSendVersion",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_remoteChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_path",
            "type": "bytes"
          }
        ],
        "name": "setTrustedRemote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_remoteChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_remoteAddress",
            "type": "bytes"
          }
        ],
        "name": "setTrustedRemoteAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "_useCustomAdapterParams",
            "type": "bool"
          }
        ],
        "name": "setUseCustomAdapterParams",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sharedDecimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "token",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          }
        ],
        "name": "trustedRemoteLookup",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "useCustomAdapterParams",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "transactionHash": "0x2d240369c36117ca90ac941a07f1225ea95d9cac440f4d3fc2b4413124a232ed",
    "receipt": {
      "to": null,
      "from": "0x1B10Fae83C2c08C3809E4FEd4e1814F5BF8cD0B3",
      "contractAddress": "0x873cf9EDA325b9Fa444909524a95a8C65ca8830E",
      "transactionIndex": 17,
      "gasUsed": "3885702",
      "logsBloom": "0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000800000000800000000000040000400000000000000000000000000000000008000000000001000000000000000000000000000000000000020000000000000000000800000000000000000000000010000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000002000000000000",
      "blockHash": "0x11c30cbbc6ebe891efc7cb6eb2bb0e1625fdaf0962319c798f2b21243e7c4e60",
      "transactionHash": "0x2d240369c36117ca90ac941a07f1225ea95d9cac440f4d3fc2b4413124a232ed",
      "logs": [
        {
          "transactionIndex": 17,
          "blockNumber": 9219783,
          "transactionHash": "0x2d240369c36117ca90ac941a07f1225ea95d9cac440f4d3fc2b4413124a232ed",
          "address": "0x873cf9EDA325b9Fa444909524a95a8C65ca8830E",
          "topics": [
            "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x0000000000000000000000001b10fae83c2c08c3809e4fed4e1814f5bf8cd0b3"
          ],
          "data": "0x",
          "logIndex": 36,
          "blockHash": "0x11c30cbbc6ebe891efc7cb6eb2bb0e1625fdaf0962319c798f2b21243e7c4e60"
        },
        {
          "transactionIndex": 17,
          "blockNumber": 9219783,
          "transactionHash": "0x2d240369c36117ca90ac941a07f1225ea95d9cac440f4d3fc2b4413124a232ed",
          "address": "0x873cf9EDA325b9Fa444909524a95a8C65ca8830E",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x0000000000000000000000001b10fae83c2c08c3809e4fed4e1814f5bf8cd0b3"
          ],
          "data": "0x00000000000000000000000000000000000000000000d3c21bcecceda1000000",
          "logIndex": 37,
          "blockHash": "0x11c30cbbc6ebe891efc7cb6eb2bb0e1625fdaf0962319c798f2b21243e7c4e60"
        }
      ],
      "blockNumber": 9219783,
      "cumulativeGasUsed": "5158196",
      "status": 1,
      "byzantium": true
    },
    "args": [
      "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
      "1000000000000000000000000",
      6
    ],
    "numDeployments": 14,
    "solcInputHash": "088ff92be4318dc36cc80ca95d1e135c",
    "metadata": "{\"compiler\":{\"version\":\"0.8.12+commit.f00d7308\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_layerZeroEndpoint\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_initialSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_sharedDecimals\",\"type\":\"uint8\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"_hash\",\"type\":\"bytes32\"}],\"name\":\"CallOFTReceivedSuccess\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_reason\",\"type\":\"bytes\"}],\"name\":\"MessageFailed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"NonContractAddress\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"ReceiveFromChain\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"_payloadHash\",\"type\":\"bytes32\"}],\"name\":\"RetryMessageSuccess\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"_toAddress\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"SendToChain\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"_type\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_minDstGas\",\"type\":\"uint256\"}],\"name\":\"SetMinDstGas\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"precrime\",\"type\":\"address\"}],\"name\":\"SetPrecrime\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"_remoteChainId\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_path\",\"type\":\"bytes\"}],\"name\":\"SetTrustedRemote\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"_remoteChainId\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"_remoteAddress\",\"type\":\"bytes\"}],\"name\":\"SetTrustedRemoteAddress\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_useCustomAdapterParams\",\"type\":\"bool\"}],\"name\":\"SetUseCustomAdapterParams\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_PAYLOAD_SIZE_LIMIT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"NO_EXTRA_GAS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PT_SEND\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PT_SEND_AND_CALL\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"internalType\":\"bytes32\",\"name\":\"_from\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_gasForCall\",\"type\":\"uint256\"}],\"name\":\"callOnOFTReceived\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"circulatingSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"name\":\"creditedPackets\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes32\",\"name\":\"_toAddress\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"_dstGasForCall\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"_useZro\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"_adapterParams\",\"type\":\"bytes\"}],\"name\":\"estimateSendAndCallFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"nativeFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zroFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes32\",\"name\":\"_toAddress\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_useZro\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"_adapterParams\",\"type\":\"bytes\"}],\"name\":\"estimateSendFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"nativeFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zroFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"name\":\"failedMessages\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"}],\"name\":\"forceResumeReceive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_version\",\"type\":\"uint16\"},{\"internalType\":\"uint16\",\"name\":\"_chainId\",\"type\":\"uint16\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_configType\",\"type\":\"uint256\"}],\"name\":\"getConfig\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_remoteChainId\",\"type\":\"uint16\"}],\"name\":\"getTrustedRemoteAddress\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"}],\"name\":\"isTrustedRemote\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lzEndpoint\",\"outputs\":[{\"internalType\":\"contract ILayerZeroEndpoint\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"}],\"name\":\"lzReceive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"},{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"}],\"name\":\"minDstGasLookup\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"}],\"name\":\"nonblockingLzReceive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"}],\"name\":\"payloadSizeLimitLookup\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"precrime\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_srcChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_srcAddress\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"_nonce\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"}],\"name\":\"retryMessage\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes32\",\"name\":\"_toAddress\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_payload\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"_dstGasForCall\",\"type\":\"uint64\"},{\"components\":[{\"internalType\":\"address payable\",\"name\":\"refundAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"zroPaymentAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"adapterParams\",\"type\":\"bytes\"}],\"internalType\":\"struct ICommonOFT.LzCallParams\",\"name\":\"_callParams\",\"type\":\"tuple\"}],\"name\":\"sendAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes32\",\"name\":\"_toAddress\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address payable\",\"name\":\"refundAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"zroPaymentAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"adapterParams\",\"type\":\"bytes\"}],\"internalType\":\"struct ICommonOFT.LzCallParams\",\"name\":\"_callParams\",\"type\":\"tuple\"}],\"name\":\"sendFrom\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_version\",\"type\":\"uint16\"},{\"internalType\":\"uint16\",\"name\":\"_chainId\",\"type\":\"uint16\"},{\"internalType\":\"uint256\",\"name\":\"_configType\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_config\",\"type\":\"bytes\"}],\"name\":\"setConfig\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"internalType\":\"uint16\",\"name\":\"_packetType\",\"type\":\"uint16\"},{\"internalType\":\"uint256\",\"name\":\"_minGas\",\"type\":\"uint256\"}],\"name\":\"setMinDstGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_dstChainId\",\"type\":\"uint16\"},{\"internalType\":\"uint256\",\"name\":\"_size\",\"type\":\"uint256\"}],\"name\":\"setPayloadSizeLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_precrime\",\"type\":\"address\"}],\"name\":\"setPrecrime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_version\",\"type\":\"uint16\"}],\"name\":\"setReceiveVersion\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_version\",\"type\":\"uint16\"}],\"name\":\"setSendVersion\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_remoteChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_path\",\"type\":\"bytes\"}],\"name\":\"setTrustedRemote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"_remoteChainId\",\"type\":\"uint16\"},{\"internalType\":\"bytes\",\"name\":\"_remoteAddress\",\"type\":\"bytes\"}],\"name\":\"setTrustedRemoteAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_useCustomAdapterParams\",\"type\":\"bool\"}],\"name\":\"setUseCustomAdapterParams\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"sharedDecimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"}],\"name\":\"trustedRemoteLookup\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"useCustomAdapterParams\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"circulatingSupply()\":{\"details\":\"returns the circulating amount of tokens on current chain\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"estimateSendFee(uint16,bytes32,uint256,bool,bytes)\":{\"details\":\"estimate send token `_tokenId` to (`_dstChainId`, `_toAddress`) _dstChainId - L0 defined chain id to send tokens too _toAddress - dynamic bytes array which contains the address to whom you are sending tokens to on the dstChain _amount - amount of the tokens to transfer _useZro - indicates to use zro to pay L0 fees _adapterParam - flexible bytes array to indicate messaging adapter services in L0\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"sendFrom(address,uint16,bytes32,uint256,(address,address,bytes))\":{\"details\":\"send `_amount` amount of token to (`_dstChainId`, `_toAddress`) from `_from` `_from` the owner of token `_dstChainId` the destination chain identifier `_toAddress` can be any size depending on the `dstChainId`. `_amount` the quantity of tokens in wei `_refundAddress` the address LayerZero refunds if too much message fee is sent `_zroPaymentAddress` set to address(0x0) if not paying in ZRO (LayerZero Token) `_adapterParams` is a flexible bytes array to indicate messaging adapter services\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"token()\":{\"details\":\"returns the address of the ERC20 token\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"title\":\"A LayerZero OmnichainFungibleToken example of BasedOFT\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Use this contract only on the BASE CHAIN. It locks tokens on source, on outgoing send(), and unlocks tokens when receiving from other chains.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/examples/ExampleOFTV2.sol\":\"ExampleOFTV2\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/ERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"./extensions/IERC20Metadata.sol\\\";\\nimport \\\"../../utils/Context.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * The default value of {decimals} is 18. To change this, you should override\\n * this function so it returns a different value.\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20, IERC20Metadata {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the default value returned by this function, unless\\n     * it's overridden.\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\\n        address owner = _msgSender();\\n        _transfer(owner, to, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * NOTE: Does not update the allowance if the current allowance\\n     * is the maximum `uint256`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` and `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``from``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {\\n        address spender = _msgSender();\\n        _spendAllowance(from, spender, amount);\\n        _transfer(from, to, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, allowance(owner, spender) + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        uint256 currentAllowance = allowance(owner, spender);\\n        require(currentAllowance >= subtractedValue, \\\"ERC20: decreased allowance below zero\\\");\\n        unchecked {\\n            _approve(owner, spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `from` to `to`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `amount`.\\n     */\\n    function _transfer(address from, address to, uint256 amount) internal virtual {\\n        require(from != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(to != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(from, to, amount);\\n\\n        uint256 fromBalance = _balances[from];\\n        require(fromBalance >= amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        unchecked {\\n            _balances[from] = fromBalance - amount;\\n            // Overflow not possible: the sum of all balances is capped by totalSupply, and the sum is preserved by\\n            // decrementing then incrementing.\\n            _balances[to] += amount;\\n        }\\n\\n        emit Transfer(from, to, amount);\\n\\n        _afterTokenTransfer(from, to, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        unchecked {\\n            // Overflow not possible: balance + amount is at most totalSupply + amount, which is checked above.\\n            _balances[account] += amount;\\n        }\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n            // Overflow not possible: amount <= accountBalance <= totalSupply.\\n            _totalSupply -= amount;\\n        }\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(address owner, address spender, uint256 amount) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Updates `owner` s allowance for `spender` based on spent `amount`.\\n     *\\n     * Does not update the allowance amount in case of infinite allowance.\\n     * Revert if not enough allowance is available.\\n     *\\n     * Might emit an {Approval} event.\\n     */\\n    function _spendAllowance(address owner, address spender, uint256 amount) internal virtual {\\n        uint256 currentAllowance = allowance(owner, spender);\\n        if (currentAllowance != type(uint256).max) {\\n            require(currentAllowance >= amount, \\\"ERC20: insufficient allowance\\\");\\n            unchecked {\\n                _approve(owner, spender, currentAllowance - amount);\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}\\n}\\n\",\"keccak256\":\"0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 amount) external returns (bool);\\n}\\n\",\"keccak256\":\"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20.sol\\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20Metadata is IERC20 {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n\",\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\"},\"contracts/examples/ExampleOFTV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../token/oft/v2/OFTV2.sol\\\";\\r\\n\\r\\n/// @title A LayerZero OmnichainFungibleToken example of BasedOFT\\r\\n/// @notice Use this contract only on the BASE CHAIN. It locks tokens on source, on outgoing send(), and unlocks tokens when receiving from other chains.\\r\\ncontract ExampleOFTV2 is OFTV2 {\\r\\n    constructor(address _layerZeroEndpoint, uint _initialSupply, uint8 _sharedDecimals) OFTV2(\\\"ExampleOFT\\\", \\\"OFT\\\", _sharedDecimals, _layerZeroEndpoint) {\\r\\n        _mint(_msgSender(), _initialSupply);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xc48642e2bfb6fc26679b70c554c24194f4f3747c8401eed2000732ac6341c656\",\"license\":\"MIT\"},\"contracts/interfaces/ILayerZeroEndpoint.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity >=0.5.0;\\r\\n\\r\\nimport \\\"./ILayerZeroUserApplicationConfig.sol\\\";\\r\\n\\r\\ninterface ILayerZeroEndpoint is ILayerZeroUserApplicationConfig {\\r\\n    // @notice send a LayerZero message to the specified address at a LayerZero endpoint.\\r\\n    // @param _dstChainId - the destination chain identifier\\r\\n    // @param _destination - the address on destination chain (in bytes). address length/format may vary by chains\\r\\n    // @param _payload - a custom bytes payload to send to the destination contract\\r\\n    // @param _refundAddress - if the source transaction is cheaper than the amount of value passed, refund the additional amount to this address\\r\\n    // @param _zroPaymentAddress - the address of the ZRO token holder who would pay for the transaction\\r\\n    // @param _adapterParams - parameters for custom functionality. e.g. receive airdropped native gas from the relayer on destination\\r\\n    function send(uint16 _dstChainId, bytes calldata _destination, bytes calldata _payload, address payable _refundAddress, address _zroPaymentAddress, bytes calldata _adapterParams) external payable;\\r\\n\\r\\n    // @notice used by the messaging library to publish verified payload\\r\\n    // @param _srcChainId - the source chain identifier\\r\\n    // @param _srcAddress - the source contract (as bytes) at the source chain\\r\\n    // @param _dstAddress - the address on destination chain\\r\\n    // @param _nonce - the unbound message ordering nonce\\r\\n    // @param _gasLimit - the gas limit for external contract execution\\r\\n    // @param _payload - verified payload to send to the destination contract\\r\\n    function receivePayload(uint16 _srcChainId, bytes calldata _srcAddress, address _dstAddress, uint64 _nonce, uint _gasLimit, bytes calldata _payload) external;\\r\\n\\r\\n    // @notice get the inboundNonce of a lzApp from a source chain which could be EVM or non-EVM chain\\r\\n    // @param _srcChainId - the source chain identifier\\r\\n    // @param _srcAddress - the source chain contract address\\r\\n    function getInboundNonce(uint16 _srcChainId, bytes calldata _srcAddress) external view returns (uint64);\\r\\n\\r\\n    // @notice get the outboundNonce from this source chain which, consequently, is always an EVM\\r\\n    // @param _srcAddress - the source chain contract address\\r\\n    function getOutboundNonce(uint16 _dstChainId, address _srcAddress) external view returns (uint64);\\r\\n\\r\\n    // @notice gets a quote in source native gas, for the amount that send() requires to pay for message delivery\\r\\n    // @param _dstChainId - the destination chain identifier\\r\\n    // @param _userApplication - the user app address on this EVM chain\\r\\n    // @param _payload - the custom message to send over LayerZero\\r\\n    // @param _payInZRO - if false, user app pays the protocol fee in native token\\r\\n    // @param _adapterParam - parameters for the adapter service, e.g. send some dust native token to dstChain\\r\\n    function estimateFees(uint16 _dstChainId, address _userApplication, bytes calldata _payload, bool _payInZRO, bytes calldata _adapterParam) external view returns (uint nativeFee, uint zroFee);\\r\\n\\r\\n    // @notice get this Endpoint's immutable source identifier\\r\\n    function getChainId() external view returns (uint16);\\r\\n\\r\\n    // @notice the interface to retry failed message on this Endpoint destination\\r\\n    // @param _srcChainId - the source chain identifier\\r\\n    // @param _srcAddress - the source chain contract address\\r\\n    // @param _payload - the payload to be retried\\r\\n    function retryPayload(uint16 _srcChainId, bytes calldata _srcAddress, bytes calldata _payload) external;\\r\\n\\r\\n    // @notice query if any STORED payload (message blocking) at the endpoint.\\r\\n    // @param _srcChainId - the source chain identifier\\r\\n    // @param _srcAddress - the source chain contract address\\r\\n    function hasStoredPayload(uint16 _srcChainId, bytes calldata _srcAddress) external view returns (bool);\\r\\n\\r\\n    // @notice query if the _libraryAddress is valid for sending msgs.\\r\\n    // @param _userApplication - the user app address on this EVM chain\\r\\n    function getSendLibraryAddress(address _userApplication) external view returns (address);\\r\\n\\r\\n    // @notice query if the _libraryAddress is valid for receiving msgs.\\r\\n    // @param _userApplication - the user app address on this EVM chain\\r\\n    function getReceiveLibraryAddress(address _userApplication) external view returns (address);\\r\\n\\r\\n    // @notice query if the non-reentrancy guard for send() is on\\r\\n    // @return true if the guard is on. false otherwise\\r\\n    function isSendingPayload() external view returns (bool);\\r\\n\\r\\n    // @notice query if the non-reentrancy guard for receive() is on\\r\\n    // @return true if the guard is on. false otherwise\\r\\n    function isReceivingPayload() external view returns (bool);\\r\\n\\r\\n    // @notice get the configuration of the LayerZero messaging library of the specified version\\r\\n    // @param _version - messaging library version\\r\\n    // @param _chainId - the chainId for the pending config change\\r\\n    // @param _userApplication - the contract address of the user application\\r\\n    // @param _configType - type of configuration. every messaging library has its own convention.\\r\\n    function getConfig(uint16 _version, uint16 _chainId, address _userApplication, uint _configType) external view returns (bytes memory);\\r\\n\\r\\n    // @notice get the send() LayerZero messaging library version\\r\\n    // @param _userApplication - the contract address of the user application\\r\\n    function getSendVersion(address _userApplication) external view returns (uint16);\\r\\n\\r\\n    // @notice get the lzReceive() LayerZero messaging library version\\r\\n    // @param _userApplication - the contract address of the user application\\r\\n    function getReceiveVersion(address _userApplication) external view returns (uint16);\\r\\n}\\r\\n\",\"keccak256\":\"0xb0f5dd5442f7f6dc3cba510c3170e5304de918b082ac658a2935433e80fefb66\",\"license\":\"MIT\"},\"contracts/interfaces/ILayerZeroReceiver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity >=0.5.0;\\r\\n\\r\\ninterface ILayerZeroReceiver {\\r\\n    // @notice LayerZero endpoint will invoke this function to deliver the message on the destination\\r\\n    // @param _srcChainId - the source endpoint identifier\\r\\n    // @param _srcAddress - the source sending contract address from the source chain\\r\\n    // @param _nonce - the ordered message nonce\\r\\n    // @param _payload - the signed payload is the UA bytes has encoded to be sent\\r\\n    function lzReceive(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes calldata _payload) external;\\r\\n}\\r\\n\",\"keccak256\":\"0xe377e661a587f855100ae6bbc9159e9aa279a99b632b445b3b9fb45a347da63a\",\"license\":\"MIT\"},\"contracts/interfaces/ILayerZeroUserApplicationConfig.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity >=0.5.0;\\r\\n\\r\\ninterface ILayerZeroUserApplicationConfig {\\r\\n    // @notice set the configuration of the LayerZero messaging library of the specified version\\r\\n    // @param _version - messaging library version\\r\\n    // @param _chainId - the chainId for the pending config change\\r\\n    // @param _configType - type of configuration. every messaging library has its own convention.\\r\\n    // @param _config - configuration in the bytes. can encode arbitrary content.\\r\\n    function setConfig(uint16 _version, uint16 _chainId, uint _configType, bytes calldata _config) external;\\r\\n\\r\\n    // @notice set the send() LayerZero messaging library version to _version\\r\\n    // @param _version - new messaging library version\\r\\n    function setSendVersion(uint16 _version) external;\\r\\n\\r\\n    // @notice set the lzReceive() LayerZero messaging library version to _version\\r\\n    // @param _version - new messaging library version\\r\\n    function setReceiveVersion(uint16 _version) external;\\r\\n\\r\\n    // @notice Only when the UA needs to resume the message flow in blocking mode and clear the stored payload\\r\\n    // @param _srcChainId - the chainId of the source chain\\r\\n    // @param _srcAddress - the contract address of the source contract at the source chain\\r\\n    function forceResumeReceive(uint16 _srcChainId, bytes calldata _srcAddress) external;\\r\\n}\\r\\n\",\"keccak256\":\"0x42d10415d035529fcdff738d6542844ad58124b4e1da5a8ff92d6ddd8bf96513\",\"license\":\"MIT\"},\"contracts/lzApp/LzApp.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\r\\nimport \\\"../interfaces/ILayerZeroReceiver.sol\\\";\\r\\nimport \\\"../interfaces/ILayerZeroUserApplicationConfig.sol\\\";\\r\\nimport \\\"../interfaces/ILayerZeroEndpoint.sol\\\";\\r\\nimport \\\"../util/BytesLib.sol\\\";\\r\\n\\r\\n/*\\r\\n * a generic LzReceiver implementation\\r\\n */\\r\\nabstract contract LzApp is Ownable, ILayerZeroReceiver, ILayerZeroUserApplicationConfig {\\r\\n    using BytesLib for bytes;\\r\\n\\r\\n    // ua can not send payload larger than this by default, but it can be changed by the ua owner\\r\\n    uint constant public DEFAULT_PAYLOAD_SIZE_LIMIT = 10000;\\r\\n\\r\\n    ILayerZeroEndpoint public immutable lzEndpoint;\\r\\n    mapping(uint16 => bytes) public trustedRemoteLookup;\\r\\n    mapping(uint16 => mapping(uint16 => uint)) public minDstGasLookup;\\r\\n    mapping(uint16 => uint) public payloadSizeLimitLookup;\\r\\n    address public precrime;\\r\\n\\r\\n    event SetPrecrime(address precrime);\\r\\n    event SetTrustedRemote(uint16 _remoteChainId, bytes _path);\\r\\n    event SetTrustedRemoteAddress(uint16 _remoteChainId, bytes _remoteAddress);\\r\\n    event SetMinDstGas(uint16 _dstChainId, uint16 _type, uint _minDstGas);\\r\\n\\r\\n    constructor(address _endpoint) {\\r\\n        lzEndpoint = ILayerZeroEndpoint(_endpoint);\\r\\n    }\\r\\n\\r\\n    function lzReceive(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes calldata _payload) public virtual override {\\r\\n        // lzReceive must be called by the endpoint for security\\r\\n        require(_msgSender() == address(lzEndpoint), \\\"LzApp: invalid endpoint caller\\\");\\r\\n\\r\\n        bytes memory trustedRemote = trustedRemoteLookup[_srcChainId];\\r\\n        // if will still block the message pathway from (srcChainId, srcAddress). should not receive message from untrusted remote.\\r\\n        require(_srcAddress.length == trustedRemote.length && trustedRemote.length > 0 && keccak256(_srcAddress) == keccak256(trustedRemote), \\\"LzApp: invalid source sending contract\\\");\\r\\n\\r\\n        _blockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);\\r\\n    }\\r\\n\\r\\n    // abstract function - the default behaviour of LayerZero is blocking. See: NonblockingLzApp if you dont need to enforce ordered messaging\\r\\n    function _blockingLzReceive(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload) internal virtual;\\r\\n\\r\\n    function _lzSend(uint16 _dstChainId, bytes memory _payload, address payable _refundAddress, address _zroPaymentAddress, bytes memory _adapterParams, uint _nativeFee) internal virtual {\\r\\n        bytes memory trustedRemote = trustedRemoteLookup[_dstChainId];\\r\\n        require(trustedRemote.length != 0, \\\"LzApp: destination chain is not a trusted source\\\");\\r\\n        _checkPayloadSize(_dstChainId, _payload.length);\\r\\n        lzEndpoint.send{value: _nativeFee}(_dstChainId, trustedRemote, _payload, _refundAddress, _zroPaymentAddress, _adapterParams);\\r\\n    }\\r\\n\\r\\n    function _checkGasLimit(uint16 _dstChainId, uint16 _type, bytes memory _adapterParams, uint _extraGas) internal view virtual {\\r\\n        uint providedGasLimit = _getGasLimit(_adapterParams);\\r\\n        uint minGasLimit = minDstGasLookup[_dstChainId][_type] + _extraGas;\\r\\n        require(minGasLimit > 0, \\\"LzApp: minGasLimit not set\\\");\\r\\n        require(providedGasLimit >= minGasLimit, \\\"LzApp: gas limit is too low\\\");\\r\\n    }\\r\\n\\r\\n    function _getGasLimit(bytes memory _adapterParams) internal pure virtual returns (uint gasLimit) {\\r\\n        require(_adapterParams.length >= 34, \\\"LzApp: invalid adapterParams\\\");\\r\\n        assembly {\\r\\n            gasLimit := mload(add(_adapterParams, 34))\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _checkPayloadSize(uint16 _dstChainId, uint _payloadSize) internal view virtual {\\r\\n        uint payloadSizeLimit = payloadSizeLimitLookup[_dstChainId];\\r\\n        if (payloadSizeLimit == 0) { // use default if not set\\r\\n            payloadSizeLimit = DEFAULT_PAYLOAD_SIZE_LIMIT;\\r\\n        }\\r\\n        require(_payloadSize <= payloadSizeLimit, \\\"LzApp: payload size is too large\\\");\\r\\n    }\\r\\n\\r\\n    //---------------------------UserApplication config----------------------------------------\\r\\n    function getConfig(uint16 _version, uint16 _chainId, address, uint _configType) external view returns (bytes memory) {\\r\\n        return lzEndpoint.getConfig(_version, _chainId, address(this), _configType);\\r\\n    }\\r\\n\\r\\n    // generic config for LayerZero user Application\\r\\n    function setConfig(uint16 _version, uint16 _chainId, uint _configType, bytes calldata _config) external override onlyOwner {\\r\\n        lzEndpoint.setConfig(_version, _chainId, _configType, _config);\\r\\n    }\\r\\n\\r\\n    function setSendVersion(uint16 _version) external override onlyOwner {\\r\\n        lzEndpoint.setSendVersion(_version);\\r\\n    }\\r\\n\\r\\n    function setReceiveVersion(uint16 _version) external override onlyOwner {\\r\\n        lzEndpoint.setReceiveVersion(_version);\\r\\n    }\\r\\n\\r\\n    function forceResumeReceive(uint16 _srcChainId, bytes calldata _srcAddress) external override onlyOwner {\\r\\n        lzEndpoint.forceResumeReceive(_srcChainId, _srcAddress);\\r\\n    }\\r\\n\\r\\n    // _path = abi.encodePacked(remoteAddress, localAddress)\\r\\n    // this function set the trusted path for the cross-chain communication\\r\\n    function setTrustedRemote(uint16 _remoteChainId, bytes calldata _path) external onlyOwner {\\r\\n        trustedRemoteLookup[_remoteChainId] = _path;\\r\\n        emit SetTrustedRemote(_remoteChainId, _path);\\r\\n    }\\r\\n\\r\\n    function setTrustedRemoteAddress(uint16 _remoteChainId, bytes calldata _remoteAddress) external onlyOwner {\\r\\n        trustedRemoteLookup[_remoteChainId] = abi.encodePacked(_remoteAddress, address(this));\\r\\n        emit SetTrustedRemoteAddress(_remoteChainId, _remoteAddress);\\r\\n    }\\r\\n\\r\\n    function getTrustedRemoteAddress(uint16 _remoteChainId) external view returns (bytes memory) {\\r\\n        bytes memory path = trustedRemoteLookup[_remoteChainId];\\r\\n        require(path.length != 0, \\\"LzApp: no trusted path record\\\");\\r\\n        return path.slice(0, path.length - 20); // the last 20 bytes should be address(this)\\r\\n    }\\r\\n\\r\\n    function setPrecrime(address _precrime) external onlyOwner {\\r\\n        precrime = _precrime;\\r\\n        emit SetPrecrime(_precrime);\\r\\n    }\\r\\n\\r\\n    function setMinDstGas(uint16 _dstChainId, uint16 _packetType, uint _minGas) external onlyOwner {\\r\\n        require(_minGas > 0, \\\"LzApp: invalid minGas\\\");\\r\\n        minDstGasLookup[_dstChainId][_packetType] = _minGas;\\r\\n        emit SetMinDstGas(_dstChainId, _packetType, _minGas);\\r\\n    }\\r\\n\\r\\n    // if the size is 0, it means default size limit\\r\\n    function setPayloadSizeLimit(uint16 _dstChainId, uint _size) external onlyOwner {\\r\\n        payloadSizeLimitLookup[_dstChainId] = _size;\\r\\n    }\\r\\n\\r\\n    //--------------------------- VIEW FUNCTION ----------------------------------------\\r\\n    function isTrustedRemote(uint16 _srcChainId, bytes calldata _srcAddress) external view returns (bool) {\\r\\n        bytes memory trustedSource = trustedRemoteLookup[_srcChainId];\\r\\n        return keccak256(trustedSource) == keccak256(_srcAddress);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x45845d0a15b964e37e7d2a58652ca79adc7e4c823479bc0a3351b59870ba6559\",\"license\":\"MIT\"},\"contracts/lzApp/NonblockingLzApp.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./LzApp.sol\\\";\\r\\nimport \\\"../util/ExcessivelySafeCall.sol\\\";\\r\\n\\r\\n/*\\r\\n * the default LayerZero messaging behaviour is blocking, i.e. any failed message will block the channel\\r\\n * this abstract class try-catch all fail messages and store locally for future retry. hence, non-blocking\\r\\n * NOTE: if the srcAddress is not configured properly, it will still block the message pathway from (srcChainId, srcAddress)\\r\\n */\\r\\nabstract contract NonblockingLzApp is LzApp {\\r\\n    using ExcessivelySafeCall for address;\\r\\n\\r\\n    constructor(address _endpoint) LzApp(_endpoint) {}\\r\\n\\r\\n    mapping(uint16 => mapping(bytes => mapping(uint64 => bytes32))) public failedMessages;\\r\\n\\r\\n    event MessageFailed(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload, bytes _reason);\\r\\n    event RetryMessageSuccess(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes32 _payloadHash);\\r\\n\\r\\n    // overriding the virtual function in LzReceiver\\r\\n    function _blockingLzReceive(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload) internal virtual override {\\r\\n        (bool success, bytes memory reason) = address(this).excessivelySafeCall(gasleft(), 150, abi.encodeWithSelector(this.nonblockingLzReceive.selector, _srcChainId, _srcAddress, _nonce, _payload));\\r\\n        // try-catch all errors/exceptions\\r\\n        if (!success) {\\r\\n            _storeFailedMessage(_srcChainId, _srcAddress, _nonce, _payload, reason);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _storeFailedMessage(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload, bytes memory _reason) internal virtual {\\r\\n        failedMessages[_srcChainId][_srcAddress][_nonce] = keccak256(_payload);\\r\\n        emit MessageFailed(_srcChainId, _srcAddress, _nonce, _payload, _reason);\\r\\n    }\\r\\n\\r\\n    function nonblockingLzReceive(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes calldata _payload) public virtual {\\r\\n        // only internal transaction\\r\\n        require(_msgSender() == address(this), \\\"NonblockingLzApp: caller must be LzApp\\\");\\r\\n        _nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);\\r\\n    }\\r\\n\\r\\n    //@notice override this function\\r\\n    function _nonblockingLzReceive(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload) internal virtual;\\r\\n\\r\\n    function retryMessage(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes calldata _payload) public payable virtual {\\r\\n        // assert there is message to retry\\r\\n        bytes32 payloadHash = failedMessages[_srcChainId][_srcAddress][_nonce];\\r\\n        require(payloadHash != bytes32(0), \\\"NonblockingLzApp: no stored message\\\");\\r\\n        require(keccak256(_payload) == payloadHash, \\\"NonblockingLzApp: invalid payload\\\");\\r\\n        // clear the stored message\\r\\n        failedMessages[_srcChainId][_srcAddress][_nonce] = bytes32(0);\\r\\n        // execute the message. revert if it fails again\\r\\n        _nonblockingLzReceive(_srcChainId, _srcAddress, _nonce, _payload);\\r\\n        emit RetryMessageSuccess(_srcChainId, _srcAddress, _nonce, payloadHash);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xdb658dec1849313ea4abe5a790d349cee322208eb48478a610f328f2652f8d6b\",\"license\":\"MIT\"},\"contracts/token/oft/v2/BaseOFTV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"./OFTCoreV2.sol\\\";\\r\\nimport \\\"./IOFTV2.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\\";\\r\\n\\r\\nabstract contract BaseOFTV2 is OFTCoreV2, ERC165, IOFTV2 {\\r\\n\\r\\n    constructor(uint8 _sharedDecimals, address _lzEndpoint) OFTCoreV2(_sharedDecimals, _lzEndpoint) {\\r\\n    }\\r\\n\\r\\n    /************************************************************************\\r\\n    * public functions\\r\\n    ************************************************************************/\\r\\n    function sendFrom(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, LzCallParams calldata _callParams) public payable virtual override {\\r\\n        _send(_from, _dstChainId, _toAddress, _amount, _callParams.refundAddress, _callParams.zroPaymentAddress, _callParams.adapterParams);\\r\\n    }\\r\\n\\r\\n    function sendAndCall(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, bytes calldata _payload, uint64 _dstGasForCall, LzCallParams calldata _callParams) public payable virtual override {\\r\\n        _sendAndCall(_from, _dstChainId, _toAddress, _amount, _payload, _dstGasForCall, _callParams.refundAddress, _callParams.zroPaymentAddress, _callParams.adapterParams);\\r\\n    }\\r\\n\\r\\n    /************************************************************************\\r\\n    * public view functions\\r\\n    ************************************************************************/\\r\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\r\\n        return interfaceId == type(IOFTV2).interfaceId || super.supportsInterface(interfaceId);\\r\\n    }\\r\\n\\r\\n    function estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bool _useZro, bytes calldata _adapterParams) public view virtual override returns (uint nativeFee, uint zroFee) {\\r\\n        return _estimateSendFee(_dstChainId, _toAddress, _amount, _useZro, _adapterParams);\\r\\n    }\\r\\n\\r\\n    function estimateSendAndCallFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bytes calldata _payload, uint64 _dstGasForCall, bool _useZro, bytes calldata _adapterParams) public view virtual override returns (uint nativeFee, uint zroFee) {\\r\\n        return _estimateSendAndCallFee(_dstChainId, _toAddress, _amount, _payload, _dstGasForCall, _useZro, _adapterParams);\\r\\n    }\\r\\n\\r\\n    function circulatingSupply() public view virtual override returns (uint);\\r\\n\\r\\n    function token() public view virtual override returns (address);\\r\\n}\\r\\n\",\"keccak256\":\"0x777b08af00d5492f65daebd6face1b5c67687c428b72d443d577e1d76b471ab9\",\"license\":\"MIT\"},\"contracts/token/oft/v2/ICommonOFT.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity >=0.5.0;\\r\\n\\r\\nimport \\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface of the IOFT core standard\\r\\n */\\r\\ninterface ICommonOFT is IERC165 {\\r\\n\\r\\n    struct LzCallParams {\\r\\n        address payable refundAddress;\\r\\n        address zroPaymentAddress;\\r\\n        bytes adapterParams;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev estimate send token `_tokenId` to (`_dstChainId`, `_toAddress`)\\r\\n     * _dstChainId - L0 defined chain id to send tokens too\\r\\n     * _toAddress - dynamic bytes array which contains the address to whom you are sending tokens to on the dstChain\\r\\n     * _amount - amount of the tokens to transfer\\r\\n     * _useZro - indicates to use zro to pay L0 fees\\r\\n     * _adapterParam - flexible bytes array to indicate messaging adapter services in L0\\r\\n     */\\r\\n    function estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bool _useZro, bytes calldata _adapterParams) external view returns (uint nativeFee, uint zroFee);\\r\\n\\r\\n    function estimateSendAndCallFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bytes calldata _payload, uint64 _dstGasForCall, bool _useZro, bytes calldata _adapterParams) external view returns (uint nativeFee, uint zroFee);\\r\\n\\r\\n    /**\\r\\n     * @dev returns the circulating amount of tokens on current chain\\r\\n     */\\r\\n    function circulatingSupply() external view returns (uint);\\r\\n\\r\\n    /**\\r\\n     * @dev returns the address of the ERC20 token\\r\\n     */\\r\\n    function token() external view returns (address);\\r\\n}\\r\\n\",\"keccak256\":\"0x40c1ccc34bfeb575317a760d2c2227987ae3b8ae0f08cc6b3f007886a7fb0d25\",\"license\":\"MIT\"},\"contracts/token/oft/v2/IOFTReceiverV2.sol\":{\"content\":\"// SPDX-License-Identifier: BUSL-1.1\\r\\n\\r\\npragma solidity >=0.5.0;\\r\\n\\r\\ninterface IOFTReceiverV2 {\\r\\n    /**\\r\\n     * @dev Called by the OFT contract when tokens are received from source chain.\\r\\n     * @param _srcChainId The chain id of the source chain.\\r\\n     * @param _srcAddress The address of the OFT token contract on the source chain.\\r\\n     * @param _nonce The nonce of the transaction on the source chain.\\r\\n     * @param _from The address of the account who calls the sendAndCall() on the source chain.\\r\\n     * @param _amount The amount of tokens to transfer.\\r\\n     * @param _payload Additional data with no specified format.\\r\\n     */\\r\\n    function onOFTReceived(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes32 _from, uint _amount, bytes calldata _payload) external;\\r\\n}\\r\\n\",\"keccak256\":\"0xfe92ee12b84cc2bddbf91bb49909855abb4cc8da4e6e8689619de815e727d714\",\"license\":\"BUSL-1.1\"},\"contracts/token/oft/v2/IOFTV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity >=0.5.0;\\r\\n\\r\\nimport \\\"./ICommonOFT.sol\\\";\\r\\n\\r\\n/**\\r\\n * @dev Interface of the IOFT core standard\\r\\n */\\r\\ninterface IOFTV2 is ICommonOFT {\\r\\n\\r\\n    /**\\r\\n     * @dev send `_amount` amount of token to (`_dstChainId`, `_toAddress`) from `_from`\\r\\n     * `_from` the owner of token\\r\\n     * `_dstChainId` the destination chain identifier\\r\\n     * `_toAddress` can be any size depending on the `dstChainId`.\\r\\n     * `_amount` the quantity of tokens in wei\\r\\n     * `_refundAddress` the address LayerZero refunds if too much message fee is sent\\r\\n     * `_zroPaymentAddress` set to address(0x0) if not paying in ZRO (LayerZero Token)\\r\\n     * `_adapterParams` is a flexible bytes array to indicate messaging adapter services\\r\\n     */\\r\\n    function sendFrom(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, LzCallParams calldata _callParams) external payable;\\r\\n\\r\\n    function sendAndCall(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, bytes calldata _payload, uint64 _dstGasForCall, LzCallParams calldata _callParams) external payable;\\r\\n}\\r\\n\",\"keccak256\":\"0x8522f4d450d2c9ecaa44dccef70b28175df9e754baef0c7c9feba46b25934291\",\"license\":\"MIT\"},\"contracts/token/oft/v2/OFTCoreV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"../../../lzApp/NonblockingLzApp.sol\\\";\\r\\nimport \\\"../../../util/ExcessivelySafeCall.sol\\\";\\r\\nimport \\\"./ICommonOFT.sol\\\";\\r\\nimport \\\"./IOFTReceiverV2.sol\\\";\\r\\n\\r\\nabstract contract OFTCoreV2 is NonblockingLzApp {\\r\\n    using BytesLib for bytes;\\r\\n    using ExcessivelySafeCall for address;\\r\\n\\r\\n    uint public constant NO_EXTRA_GAS = 0;\\r\\n\\r\\n    // packet type\\r\\n    uint8 public constant PT_SEND = 0;\\r\\n    uint8 public constant PT_SEND_AND_CALL = 1;\\r\\n\\r\\n    uint8 public immutable sharedDecimals;\\r\\n\\r\\n    bool public useCustomAdapterParams;\\r\\n    mapping(uint16 => mapping(bytes => mapping(uint64 => bool))) public creditedPackets;\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `_amount` tokens are moved from the `_sender` to (`_dstChainId`, `_toAddress`)\\r\\n     * `_nonce` is the outbound nonce\\r\\n     */\\r\\n    event SendToChain(uint16 indexed _dstChainId, address indexed _from, bytes32 indexed _toAddress, uint _amount);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `_amount` tokens are received from `_srcChainId` into the `_toAddress` on the local chain.\\r\\n     * `_nonce` is the inbound nonce.\\r\\n     */\\r\\n    event ReceiveFromChain(uint16 indexed _srcChainId, address indexed _to, uint _amount);\\r\\n\\r\\n    event SetUseCustomAdapterParams(bool _useCustomAdapterParams);\\r\\n\\r\\n    event CallOFTReceivedSuccess(uint16 indexed _srcChainId, bytes _srcAddress, uint64 _nonce, bytes32 _hash);\\r\\n\\r\\n    event NonContractAddress(address _address);\\r\\n\\r\\n    // _sharedDecimals should be the minimum decimals on all chains\\r\\n    constructor(uint8 _sharedDecimals, address _lzEndpoint) NonblockingLzApp(_lzEndpoint) {\\r\\n        sharedDecimals = _sharedDecimals;\\r\\n    }\\r\\n\\r\\n    /************************************************************************\\r\\n    * public functions\\r\\n    ************************************************************************/\\r\\n    function callOnOFTReceived(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes32 _from, address _to, uint _amount, bytes calldata _payload, uint _gasForCall) public virtual {\\r\\n        require(_msgSender() == address(this), \\\"OFTCore: caller must be OFTCore\\\");\\r\\n\\r\\n        // send\\r\\n        _amount = _transferFrom(address(this), _to, _amount);\\r\\n        emit ReceiveFromChain(_srcChainId, _to, _amount);\\r\\n\\r\\n        // call\\r\\n        IOFTReceiverV2(_to).onOFTReceived{gas: _gasForCall}(_srcChainId, _srcAddress, _nonce, _from, _amount, _payload);\\r\\n    }\\r\\n\\r\\n    function setUseCustomAdapterParams(bool _useCustomAdapterParams) public virtual onlyOwner {\\r\\n        useCustomAdapterParams = _useCustomAdapterParams;\\r\\n        emit SetUseCustomAdapterParams(_useCustomAdapterParams);\\r\\n    }\\r\\n\\r\\n    /************************************************************************\\r\\n    * internal functions\\r\\n    ************************************************************************/\\r\\n    function _estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bool _useZro, bytes memory _adapterParams) internal view virtual returns (uint nativeFee, uint zroFee) {\\r\\n        // mock the payload for sendFrom()\\r\\n        bytes memory payload = _encodeSendPayload(_toAddress, _ld2sd(_amount));\\r\\n        return lzEndpoint.estimateFees(_dstChainId, address(this), payload, _useZro, _adapterParams);\\r\\n    }\\r\\n\\r\\n    function _estimateSendAndCallFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bytes memory _payload, uint64 _dstGasForCall, bool _useZro, bytes memory _adapterParams) internal view virtual returns (uint nativeFee, uint zroFee) {\\r\\n        // mock the payload for sendAndCall()\\r\\n        bytes memory payload = _encodeSendAndCallPayload(msg.sender, _toAddress, _ld2sd(_amount), _payload, _dstGasForCall);\\r\\n        return lzEndpoint.estimateFees(_dstChainId, address(this), payload, _useZro, _adapterParams);\\r\\n    }\\r\\n\\r\\n    function _nonblockingLzReceive(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload) internal virtual override {\\r\\n        uint8 packetType = _payload.toUint8(0);\\r\\n\\r\\n        if (packetType == PT_SEND) {\\r\\n            _sendAck(_srcChainId, _srcAddress, _nonce, _payload);\\r\\n        } else if (packetType == PT_SEND_AND_CALL) {\\r\\n            _sendAndCallAck(_srcChainId, _srcAddress, _nonce, _payload);\\r\\n        } else {\\r\\n            revert(\\\"OFTCore: unknown packet type\\\");\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _send(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, address payable _refundAddress, address _zroPaymentAddress, bytes memory _adapterParams) internal virtual returns (uint amount) {\\r\\n        _checkAdapterParams(_dstChainId, PT_SEND, _adapterParams, NO_EXTRA_GAS);\\r\\n\\r\\n        (amount,) = _removeDust(_amount);\\r\\n        amount = _debitFrom(_from, _dstChainId, _toAddress, amount); // amount returned should not have dust\\r\\n        require(amount > 0, \\\"OFTCore: amount too small\\\");\\r\\n\\r\\n        bytes memory lzPayload = _encodeSendPayload(_toAddress, _ld2sd(amount));\\r\\n        _lzSend(_dstChainId, lzPayload, _refundAddress, _zroPaymentAddress, _adapterParams, msg.value);\\r\\n\\r\\n        emit SendToChain(_dstChainId, _from, _toAddress, amount);\\r\\n    }\\r\\n\\r\\n    function _sendAck(uint16 _srcChainId, bytes memory, uint64, bytes memory _payload) internal virtual {\\r\\n        (address to, uint64 amountSD) = _decodeSendPayload(_payload);\\r\\n        if (to == address(0)) {\\r\\n            to = address(0xdead);\\r\\n        }\\r\\n\\r\\n        uint amount = _sd2ld(amountSD);\\r\\n        amount = _creditTo(_srcChainId, to, amount);\\r\\n\\r\\n        emit ReceiveFromChain(_srcChainId, to, amount);\\r\\n    }\\r\\n\\r\\n    function _sendAndCall(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, bytes memory _payload, uint64 _dstGasForCall, address payable _refundAddress, address _zroPaymentAddress, bytes memory _adapterParams) internal virtual returns (uint amount) {\\r\\n        _checkAdapterParams(_dstChainId, PT_SEND_AND_CALL, _adapterParams, _dstGasForCall);\\r\\n\\r\\n        (amount,) = _removeDust(_amount);\\r\\n        amount = _debitFrom(_from, _dstChainId, _toAddress, amount);\\r\\n        require(amount > 0, \\\"OFTCore: amount too small\\\");\\r\\n\\r\\n        // encode the msg.sender into the payload instead of _from\\r\\n        bytes memory lzPayload = _encodeSendAndCallPayload(msg.sender, _toAddress, _ld2sd(amount), _payload, _dstGasForCall);\\r\\n        _lzSend(_dstChainId, lzPayload, _refundAddress, _zroPaymentAddress, _adapterParams, msg.value);\\r\\n\\r\\n        emit SendToChain(_dstChainId, _from, _toAddress, amount);\\r\\n    }\\r\\n\\r\\n    function _sendAndCallAck(uint16 _srcChainId, bytes memory _srcAddress, uint64 _nonce, bytes memory _payload) internal virtual {\\r\\n        (bytes32 from, address to, uint64 amountSD, bytes memory payloadForCall, uint64 gasForCall) = _decodeSendAndCallPayload(_payload);\\r\\n\\r\\n        bool credited = creditedPackets[_srcChainId][_srcAddress][_nonce];\\r\\n        uint amount = _sd2ld(amountSD);\\r\\n\\r\\n        // credit to this contract first, and then transfer to receiver only if callOnOFTReceived() succeeds\\r\\n        if (!credited) {\\r\\n            amount = _creditTo(_srcChainId, address(this), amount);\\r\\n            creditedPackets[_srcChainId][_srcAddress][_nonce] = true;\\r\\n        }\\r\\n\\r\\n        if (!_isContract(to)) {\\r\\n            emit NonContractAddress(to);\\r\\n            return;\\r\\n        }\\r\\n\\r\\n        // workaround for stack too deep\\r\\n        uint16 srcChainId = _srcChainId;\\r\\n        bytes memory srcAddress = _srcAddress;\\r\\n        uint64 nonce = _nonce;\\r\\n        bytes memory payload = _payload;\\r\\n        bytes32 from_ = from;\\r\\n        address to_ = to;\\r\\n        uint amount_ = amount;\\r\\n        bytes memory payloadForCall_ = payloadForCall;\\r\\n\\r\\n        // no gas limit for the call if retry\\r\\n        uint gas = credited ? gasleft() : gasForCall;\\r\\n        (bool success, bytes memory reason) = address(this).excessivelySafeCall(gasleft(), 150, abi.encodeWithSelector(this.callOnOFTReceived.selector, srcChainId, srcAddress, nonce, from_, to_, amount_, payloadForCall_, gas));\\r\\n\\r\\n        if (success) {\\r\\n            bytes32 hash = keccak256(payload);\\r\\n            emit CallOFTReceivedSuccess(srcChainId, srcAddress, nonce, hash);\\r\\n        } else {\\r\\n            // store the failed message into the nonblockingLzApp\\r\\n            _storeFailedMessage(srcChainId, srcAddress, nonce, payload, reason);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _isContract(address _account) internal view returns (bool) {\\r\\n        return _account.code.length > 0;\\r\\n    }\\r\\n\\r\\n    function _checkAdapterParams(uint16 _dstChainId, uint16 _pkType, bytes memory _adapterParams, uint _extraGas) internal virtual {\\r\\n        if (useCustomAdapterParams) {\\r\\n            _checkGasLimit(_dstChainId, _pkType, _adapterParams, _extraGas);\\r\\n        } else {\\r\\n            require(_adapterParams.length == 0, \\\"OFTCore: _adapterParams must be empty.\\\");\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function _ld2sd(uint _amount) internal virtual view returns (uint64) {\\r\\n        uint amountSD = _amount / _ld2sdRate();\\r\\n        require(amountSD <= type(uint64).max, \\\"OFTCore: amountSD overflow\\\");\\r\\n        return uint64(amountSD);\\r\\n    }\\r\\n\\r\\n    function _sd2ld(uint64 _amountSD) internal virtual view returns (uint) {\\r\\n        return _amountSD * _ld2sdRate();\\r\\n    }\\r\\n\\r\\n    function _removeDust(uint _amount) internal virtual view returns (uint amountAfter, uint dust) {\\r\\n        dust = _amount % _ld2sdRate();\\r\\n        amountAfter = _amount - dust;\\r\\n    }\\r\\n\\r\\n    function _encodeSendPayload(bytes32 _toAddress, uint64 _amountSD) internal virtual view returns (bytes memory) {\\r\\n        return abi.encodePacked(PT_SEND, _toAddress, _amountSD);\\r\\n    }\\r\\n\\r\\n    function _decodeSendPayload(bytes memory _payload) internal virtual view returns (address to, uint64 amountSD) {\\r\\n        require(_payload.toUint8(0) == PT_SEND && _payload.length == 41, \\\"OFTCore: invalid payload\\\");\\r\\n\\r\\n        to = _payload.toAddress(13); // drop the first 12 bytes of bytes32\\r\\n        amountSD = _payload.toUint64(33);\\r\\n    }\\r\\n\\r\\n    function _encodeSendAndCallPayload(address _from, bytes32 _toAddress, uint64 _amountSD, bytes memory _payload, uint64 _dstGasForCall) internal virtual view returns (bytes memory) {\\r\\n        return abi.encodePacked(\\r\\n            PT_SEND_AND_CALL,\\r\\n            _toAddress,\\r\\n            _amountSD,\\r\\n            _addressToBytes32(_from),\\r\\n            _dstGasForCall,\\r\\n            _payload\\r\\n        );\\r\\n    }\\r\\n\\r\\n    function _decodeSendAndCallPayload(bytes memory _payload) internal virtual view returns (bytes32 from, address to, uint64 amountSD, bytes memory payload, uint64 dstGasForCall) {\\r\\n        require(_payload.toUint8(0) == PT_SEND_AND_CALL, \\\"OFTCore: invalid payload\\\");\\r\\n\\r\\n        to = _payload.toAddress(13); // drop the first 12 bytes of bytes32\\r\\n        amountSD = _payload.toUint64(33);\\r\\n        from = _payload.toBytes32(41);\\r\\n        dstGasForCall = _payload.toUint64(73);\\r\\n        payload = _payload.slice(81, _payload.length - 81);\\r\\n    }\\r\\n\\r\\n    function _addressToBytes32(address _address) internal pure virtual returns (bytes32) {\\r\\n        return bytes32(uint(uint160(_address)));\\r\\n    }\\r\\n\\r\\n    function _debitFrom(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount) internal virtual returns (uint);\\r\\n\\r\\n    function _creditTo(uint16 _srcChainId, address _toAddress, uint _amount) internal virtual returns (uint);\\r\\n\\r\\n    function _transferFrom(address _from, address _to, uint _amount) internal virtual returns (uint);\\r\\n\\r\\n    function _ld2sdRate() internal view virtual returns (uint);\\r\\n}\\r\\n\",\"keccak256\":\"0x935b8272d5a38deaff57a2cd0e750fc70ae65ab15013b53b5450952c0a4e98cb\",\"license\":\"MIT\"},\"contracts/token/oft/v2/OFTV2.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\r\\n\\r\\npragma solidity ^0.8.0;\\r\\n\\r\\nimport \\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\\";\\r\\nimport \\\"./BaseOFTV2.sol\\\";\\r\\n\\r\\ncontract OFTV2 is BaseOFTV2, ERC20 {\\r\\n\\r\\n    uint internal immutable ld2sdRate;\\r\\n\\r\\n    constructor(string memory _name, string memory _symbol, uint8 _sharedDecimals, address _lzEndpoint) ERC20(_name, _symbol) BaseOFTV2(_sharedDecimals, _lzEndpoint) {\\r\\n        uint8 decimals = decimals();\\r\\n        require(_sharedDecimals <= decimals, \\\"OFT: sharedDecimals must be <= decimals\\\");\\r\\n        ld2sdRate = 10 ** (decimals - _sharedDecimals);\\r\\n    }\\r\\n\\r\\n    /************************************************************************\\r\\n    * public functions\\r\\n    ************************************************************************/\\r\\n    function circulatingSupply() public view virtual override returns (uint) {\\r\\n        return totalSupply();\\r\\n    }\\r\\n\\r\\n    function token() public view virtual override returns (address) {\\r\\n        return address(this);\\r\\n    }\\r\\n\\r\\n    /************************************************************************\\r\\n    * internal functions\\r\\n    ************************************************************************/\\r\\n    function _debitFrom(address _from, uint16, bytes32, uint _amount) internal virtual override returns (uint) {\\r\\n        address spender = _msgSender();\\r\\n        if (_from != spender) _spendAllowance(_from, spender, _amount);\\r\\n        _burn(_from, _amount);\\r\\n        return _amount;\\r\\n    }\\r\\n\\r\\n    function _creditTo(uint16, address _toAddress, uint _amount) internal virtual override returns (uint) {\\r\\n        _mint(_toAddress, _amount);\\r\\n        return _amount;\\r\\n    }\\r\\n\\r\\n    function _transferFrom(address _from, address _to, uint _amount) internal virtual override returns (uint) {\\r\\n        address spender = _msgSender();\\r\\n        // if transfer from this contract, no need to check allowance\\r\\n        if (_from != address(this) && _from != spender) _spendAllowance(_from, spender, _amount);\\r\\n        _transfer(_from, _to, _amount);\\r\\n        return _amount;\\r\\n    }\\r\\n\\r\\n    function _ld2sdRate() internal view virtual override returns (uint) {\\r\\n        return ld2sdRate;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x7f0e43ddba2ae0727903e9f2e7204343c2e1750867e17cc223900a18be34f076\",\"license\":\"MIT\"},\"contracts/util/BytesLib.sol\":{\"content\":\"// SPDX-License-Identifier: Unlicense\\r\\n/*\\r\\n * @title Solidity Bytes Arrays Utils\\r\\n * @author Gon\\u00e7alo S\\u00e1 <goncalo.sa@consensys.net>\\r\\n *\\r\\n * @dev Bytes tightly packed arrays utility library for ethereum contracts written in Solidity.\\r\\n *      The library lets you concatenate, slice and type cast bytes arrays both in memory and storage.\\r\\n */\\r\\npragma solidity >=0.8.0 <0.9.0;\\r\\n\\r\\n\\r\\nlibrary BytesLib {\\r\\n    function concat(\\r\\n        bytes memory _preBytes,\\r\\n        bytes memory _postBytes\\r\\n    )\\r\\n    internal\\r\\n    pure\\r\\n    returns (bytes memory)\\r\\n    {\\r\\n        bytes memory tempBytes;\\r\\n\\r\\n        assembly {\\r\\n        // Get a location of some free memory and store it in tempBytes as\\r\\n        // Solidity does for memory variables.\\r\\n            tempBytes := mload(0x40)\\r\\n\\r\\n        // Store the length of the first bytes array at the beginning of\\r\\n        // the memory for tempBytes.\\r\\n            let length := mload(_preBytes)\\r\\n            mstore(tempBytes, length)\\r\\n\\r\\n        // Maintain a memory counter for the current write location in the\\r\\n        // temp bytes array by adding the 32 bytes for the array length to\\r\\n        // the starting location.\\r\\n            let mc := add(tempBytes, 0x20)\\r\\n        // Stop copying when the memory counter reaches the length of the\\r\\n        // first bytes array.\\r\\n            let end := add(mc, length)\\r\\n\\r\\n            for {\\r\\n            // Initialize a copy counter to the start of the _preBytes data,\\r\\n            // 32 bytes into its memory.\\r\\n                let cc := add(_preBytes, 0x20)\\r\\n            } lt(mc, end) {\\r\\n            // Increase both counters by 32 bytes each iteration.\\r\\n                mc := add(mc, 0x20)\\r\\n                cc := add(cc, 0x20)\\r\\n            } {\\r\\n            // Write the _preBytes data into the tempBytes memory 32 bytes\\r\\n            // at a time.\\r\\n                mstore(mc, mload(cc))\\r\\n            }\\r\\n\\r\\n        // Add the length of _postBytes to the current length of tempBytes\\r\\n        // and store it as the new length in the first 32 bytes of the\\r\\n        // tempBytes memory.\\r\\n            length := mload(_postBytes)\\r\\n            mstore(tempBytes, add(length, mload(tempBytes)))\\r\\n\\r\\n        // Move the memory counter back from a multiple of 0x20 to the\\r\\n        // actual end of the _preBytes data.\\r\\n            mc := end\\r\\n        // Stop copying when the memory counter reaches the new combined\\r\\n        // length of the arrays.\\r\\n            end := add(mc, length)\\r\\n\\r\\n            for {\\r\\n                let cc := add(_postBytes, 0x20)\\r\\n            } lt(mc, end) {\\r\\n                mc := add(mc, 0x20)\\r\\n                cc := add(cc, 0x20)\\r\\n            } {\\r\\n                mstore(mc, mload(cc))\\r\\n            }\\r\\n\\r\\n        // Update the free-memory pointer by padding our last write location\\r\\n        // to 32 bytes: add 31 bytes to the end of tempBytes to move to the\\r\\n        // next 32 byte block, then round down to the nearest multiple of\\r\\n        // 32. If the sum of the length of the two arrays is zero then add\\r\\n        // one before rounding down to leave a blank 32 bytes (the length block with 0).\\r\\n            mstore(0x40, and(\\r\\n            add(add(end, iszero(add(length, mload(_preBytes)))), 31),\\r\\n            not(31) // Round down to the nearest 32 bytes.\\r\\n            ))\\r\\n        }\\r\\n\\r\\n        return tempBytes;\\r\\n    }\\r\\n\\r\\n    function concatStorage(bytes storage _preBytes, bytes memory _postBytes) internal {\\r\\n        assembly {\\r\\n        // Read the first 32 bytes of _preBytes storage, which is the length\\r\\n        // of the array. (We don't need to use the offset into the slot\\r\\n        // because arrays use the entire slot.)\\r\\n            let fslot := sload(_preBytes.slot)\\r\\n        // Arrays of 31 bytes or less have an even value in their slot,\\r\\n        // while longer arrays have an odd value. The actual length is\\r\\n        // the slot divided by two for odd values, and the lowest order\\r\\n        // byte divided by two for even values.\\r\\n        // If the slot is even, bitwise and the slot with 255 and divide by\\r\\n        // two to get the length. If the slot is odd, bitwise and the slot\\r\\n        // with -1 and divide by two.\\r\\n            let slength := div(and(fslot, sub(mul(0x100, iszero(and(fslot, 1))), 1)), 2)\\r\\n            let mlength := mload(_postBytes)\\r\\n            let newlength := add(slength, mlength)\\r\\n        // slength can contain both the length and contents of the array\\r\\n        // if length < 32 bytes so let's prepare for that\\r\\n        // v. http://solidity.readthedocs.io/en/latest/miscellaneous.html#layout-of-state-variables-in-storage\\r\\n            switch add(lt(slength, 32), lt(newlength, 32))\\r\\n            case 2 {\\r\\n            // Since the new array still fits in the slot, we just need to\\r\\n            // update the contents of the slot.\\r\\n            // uint256(bytes_storage) = uint256(bytes_storage) + uint256(bytes_memory) + new_length\\r\\n                sstore(\\r\\n                _preBytes.slot,\\r\\n                // all the modifications to the slot are inside this\\r\\n                // next block\\r\\n                add(\\r\\n                // we can just add to the slot contents because the\\r\\n                // bytes we want to change are the LSBs\\r\\n                fslot,\\r\\n                add(\\r\\n                mul(\\r\\n                div(\\r\\n                // load the bytes from memory\\r\\n                mload(add(_postBytes, 0x20)),\\r\\n                // zero all bytes to the right\\r\\n                exp(0x100, sub(32, mlength))\\r\\n                ),\\r\\n                // and now shift left the number of bytes to\\r\\n                // leave space for the length in the slot\\r\\n                exp(0x100, sub(32, newlength))\\r\\n                ),\\r\\n                // increase length by the double of the memory\\r\\n                // bytes length\\r\\n                mul(mlength, 2)\\r\\n                )\\r\\n                )\\r\\n                )\\r\\n            }\\r\\n            case 1 {\\r\\n            // The stored value fits in the slot, but the combined value\\r\\n            // will exceed it.\\r\\n            // get the keccak hash to get the contents of the array\\r\\n                mstore(0x0, _preBytes.slot)\\r\\n                let sc := add(keccak256(0x0, 0x20), div(slength, 32))\\r\\n\\r\\n            // save new length\\r\\n                sstore(_preBytes.slot, add(mul(newlength, 2), 1))\\r\\n\\r\\n            // The contents of the _postBytes array start 32 bytes into\\r\\n            // the structure. Our first read should obtain the `submod`\\r\\n            // bytes that can fit into the unused space in the last word\\r\\n            // of the stored array. To get this, we read 32 bytes starting\\r\\n            // from `submod`, so the data we read overlaps with the array\\r\\n            // contents by `submod` bytes. Masking the lowest-order\\r\\n            // `submod` bytes allows us to add that value directly to the\\r\\n            // stored value.\\r\\n\\r\\n                let submod := sub(32, slength)\\r\\n                let mc := add(_postBytes, submod)\\r\\n                let end := add(_postBytes, mlength)\\r\\n                let mask := sub(exp(0x100, submod), 1)\\r\\n\\r\\n                sstore(\\r\\n                sc,\\r\\n                add(\\r\\n                and(\\r\\n                fslot,\\r\\n                0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00\\r\\n                ),\\r\\n                and(mload(mc), mask)\\r\\n                )\\r\\n                )\\r\\n\\r\\n                for {\\r\\n                    mc := add(mc, 0x20)\\r\\n                    sc := add(sc, 1)\\r\\n                } lt(mc, end) {\\r\\n                    sc := add(sc, 1)\\r\\n                    mc := add(mc, 0x20)\\r\\n                } {\\r\\n                    sstore(sc, mload(mc))\\r\\n                }\\r\\n\\r\\n                mask := exp(0x100, sub(mc, end))\\r\\n\\r\\n                sstore(sc, mul(div(mload(mc), mask), mask))\\r\\n            }\\r\\n            default {\\r\\n            // get the keccak hash to get the contents of the array\\r\\n                mstore(0x0, _preBytes.slot)\\r\\n            // Start copying to the last used word of the stored array.\\r\\n                let sc := add(keccak256(0x0, 0x20), div(slength, 32))\\r\\n\\r\\n            // save new length\\r\\n                sstore(_preBytes.slot, add(mul(newlength, 2), 1))\\r\\n\\r\\n            // Copy over the first `submod` bytes of the new data as in\\r\\n            // case 1 above.\\r\\n                let slengthmod := mod(slength, 32)\\r\\n                let mlengthmod := mod(mlength, 32)\\r\\n                let submod := sub(32, slengthmod)\\r\\n                let mc := add(_postBytes, submod)\\r\\n                let end := add(_postBytes, mlength)\\r\\n                let mask := sub(exp(0x100, submod), 1)\\r\\n\\r\\n                sstore(sc, add(sload(sc), and(mload(mc), mask)))\\r\\n\\r\\n                for {\\r\\n                    sc := add(sc, 1)\\r\\n                    mc := add(mc, 0x20)\\r\\n                } lt(mc, end) {\\r\\n                    sc := add(sc, 1)\\r\\n                    mc := add(mc, 0x20)\\r\\n                } {\\r\\n                    sstore(sc, mload(mc))\\r\\n                }\\r\\n\\r\\n                mask := exp(0x100, sub(mc, end))\\r\\n\\r\\n                sstore(sc, mul(div(mload(mc), mask), mask))\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    function slice(\\r\\n        bytes memory _bytes,\\r\\n        uint256 _start,\\r\\n        uint256 _length\\r\\n    )\\r\\n    internal\\r\\n    pure\\r\\n    returns (bytes memory)\\r\\n    {\\r\\n        require(_length + 31 >= _length, \\\"slice_overflow\\\");\\r\\n        require(_bytes.length >= _start + _length, \\\"slice_outOfBounds\\\");\\r\\n\\r\\n        bytes memory tempBytes;\\r\\n\\r\\n        assembly {\\r\\n            switch iszero(_length)\\r\\n            case 0 {\\r\\n            // Get a location of some free memory and store it in tempBytes as\\r\\n            // Solidity does for memory variables.\\r\\n                tempBytes := mload(0x40)\\r\\n\\r\\n            // The first word of the slice result is potentially a partial\\r\\n            // word read from the original array. To read it, we calculate\\r\\n            // the length of that partial word and start copying that many\\r\\n            // bytes into the array. The first word we copy will start with\\r\\n            // data we don't care about, but the last `lengthmod` bytes will\\r\\n            // land at the beginning of the contents of the new array. When\\r\\n            // we're done copying, we overwrite the full first word with\\r\\n            // the actual length of the slice.\\r\\n                let lengthmod := and(_length, 31)\\r\\n\\r\\n            // The multiplication in the next line is necessary\\r\\n            // because when slicing multiples of 32 bytes (lengthmod == 0)\\r\\n            // the following copy loop was copying the origin's length\\r\\n            // and then ending prematurely not copying everything it should.\\r\\n                let mc := add(add(tempBytes, lengthmod), mul(0x20, iszero(lengthmod)))\\r\\n                let end := add(mc, _length)\\r\\n\\r\\n                for {\\r\\n                // The multiplication in the next line has the same exact purpose\\r\\n                // as the one above.\\r\\n                    let cc := add(add(add(_bytes, lengthmod), mul(0x20, iszero(lengthmod))), _start)\\r\\n                } lt(mc, end) {\\r\\n                    mc := add(mc, 0x20)\\r\\n                    cc := add(cc, 0x20)\\r\\n                } {\\r\\n                    mstore(mc, mload(cc))\\r\\n                }\\r\\n\\r\\n                mstore(tempBytes, _length)\\r\\n\\r\\n            //update free-memory pointer\\r\\n            //allocating the array padded to 32 bytes like the compiler does now\\r\\n                mstore(0x40, and(add(mc, 31), not(31)))\\r\\n            }\\r\\n            //if we want a zero-length slice let's just return a zero-length array\\r\\n            default {\\r\\n                tempBytes := mload(0x40)\\r\\n            //zero out the 32 bytes slice we are about to return\\r\\n            //we need to do it because Solidity does not garbage collect\\r\\n                mstore(tempBytes, 0)\\r\\n\\r\\n                mstore(0x40, add(tempBytes, 0x20))\\r\\n            }\\r\\n        }\\r\\n\\r\\n        return tempBytes;\\r\\n    }\\r\\n\\r\\n    function toAddress(bytes memory _bytes, uint256 _start) internal pure returns (address) {\\r\\n        require(_bytes.length >= _start + 20, \\\"toAddress_outOfBounds\\\");\\r\\n        address tempAddress;\\r\\n\\r\\n        assembly {\\r\\n            tempAddress := div(mload(add(add(_bytes, 0x20), _start)), 0x1000000000000000000000000)\\r\\n        }\\r\\n\\r\\n        return tempAddress;\\r\\n    }\\r\\n\\r\\n    function toUint8(bytes memory _bytes, uint256 _start) internal pure returns (uint8) {\\r\\n        require(_bytes.length >= _start + 1 , \\\"toUint8_outOfBounds\\\");\\r\\n        uint8 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0x1), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toUint16(bytes memory _bytes, uint256 _start) internal pure returns (uint16) {\\r\\n        require(_bytes.length >= _start + 2, \\\"toUint16_outOfBounds\\\");\\r\\n        uint16 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0x2), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toUint32(bytes memory _bytes, uint256 _start) internal pure returns (uint32) {\\r\\n        require(_bytes.length >= _start + 4, \\\"toUint32_outOfBounds\\\");\\r\\n        uint32 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0x4), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toUint64(bytes memory _bytes, uint256 _start) internal pure returns (uint64) {\\r\\n        require(_bytes.length >= _start + 8, \\\"toUint64_outOfBounds\\\");\\r\\n        uint64 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0x8), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toUint96(bytes memory _bytes, uint256 _start) internal pure returns (uint96) {\\r\\n        require(_bytes.length >= _start + 12, \\\"toUint96_outOfBounds\\\");\\r\\n        uint96 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0xc), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toUint128(bytes memory _bytes, uint256 _start) internal pure returns (uint128) {\\r\\n        require(_bytes.length >= _start + 16, \\\"toUint128_outOfBounds\\\");\\r\\n        uint128 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0x10), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toUint256(bytes memory _bytes, uint256 _start) internal pure returns (uint256) {\\r\\n        require(_bytes.length >= _start + 32, \\\"toUint256_outOfBounds\\\");\\r\\n        uint256 tempUint;\\r\\n\\r\\n        assembly {\\r\\n            tempUint := mload(add(add(_bytes, 0x20), _start))\\r\\n        }\\r\\n\\r\\n        return tempUint;\\r\\n    }\\r\\n\\r\\n    function toBytes32(bytes memory _bytes, uint256 _start) internal pure returns (bytes32) {\\r\\n        require(_bytes.length >= _start + 32, \\\"toBytes32_outOfBounds\\\");\\r\\n        bytes32 tempBytes32;\\r\\n\\r\\n        assembly {\\r\\n            tempBytes32 := mload(add(add(_bytes, 0x20), _start))\\r\\n        }\\r\\n\\r\\n        return tempBytes32;\\r\\n    }\\r\\n\\r\\n    function equal(bytes memory _preBytes, bytes memory _postBytes) internal pure returns (bool) {\\r\\n        bool success = true;\\r\\n\\r\\n        assembly {\\r\\n            let length := mload(_preBytes)\\r\\n\\r\\n        // if lengths don't match the arrays are not equal\\r\\n            switch eq(length, mload(_postBytes))\\r\\n            case 1 {\\r\\n            // cb is a circuit breaker in the for loop since there's\\r\\n            //  no said feature for inline assembly loops\\r\\n            // cb = 1 - don't breaker\\r\\n            // cb = 0 - break\\r\\n                let cb := 1\\r\\n\\r\\n                let mc := add(_preBytes, 0x20)\\r\\n                let end := add(mc, length)\\r\\n\\r\\n                for {\\r\\n                    let cc := add(_postBytes, 0x20)\\r\\n                // the next line is the loop condition:\\r\\n                // while(uint256(mc < end) + cb == 2)\\r\\n                } eq(add(lt(mc, end), cb), 2) {\\r\\n                    mc := add(mc, 0x20)\\r\\n                    cc := add(cc, 0x20)\\r\\n                } {\\r\\n                // if any of these checks fails then arrays are not equal\\r\\n                    if iszero(eq(mload(mc), mload(cc))) {\\r\\n                    // unsuccess:\\r\\n                        success := 0\\r\\n                        cb := 0\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n            default {\\r\\n            // unsuccess:\\r\\n                success := 0\\r\\n            }\\r\\n        }\\r\\n\\r\\n        return success;\\r\\n    }\\r\\n\\r\\n    function equalStorage(\\r\\n        bytes storage _preBytes,\\r\\n        bytes memory _postBytes\\r\\n    )\\r\\n    internal\\r\\n    view\\r\\n    returns (bool)\\r\\n    {\\r\\n        bool success = true;\\r\\n\\r\\n        assembly {\\r\\n        // we know _preBytes_offset is 0\\r\\n            let fslot := sload(_preBytes.slot)\\r\\n        // Decode the length of the stored array like in concatStorage().\\r\\n            let slength := div(and(fslot, sub(mul(0x100, iszero(and(fslot, 1))), 1)), 2)\\r\\n            let mlength := mload(_postBytes)\\r\\n\\r\\n        // if lengths don't match the arrays are not equal\\r\\n            switch eq(slength, mlength)\\r\\n            case 1 {\\r\\n            // slength can contain both the length and contents of the array\\r\\n            // if length < 32 bytes so let's prepare for that\\r\\n            // v. http://solidity.readthedocs.io/en/latest/miscellaneous.html#layout-of-state-variables-in-storage\\r\\n                if iszero(iszero(slength)) {\\r\\n                    switch lt(slength, 32)\\r\\n                    case 1 {\\r\\n                    // blank the last byte which is the length\\r\\n                        fslot := mul(div(fslot, 0x100), 0x100)\\r\\n\\r\\n                        if iszero(eq(fslot, mload(add(_postBytes, 0x20)))) {\\r\\n                        // unsuccess:\\r\\n                            success := 0\\r\\n                        }\\r\\n                    }\\r\\n                    default {\\r\\n                    // cb is a circuit breaker in the for loop since there's\\r\\n                    //  no said feature for inline assembly loops\\r\\n                    // cb = 1 - don't breaker\\r\\n                    // cb = 0 - break\\r\\n                        let cb := 1\\r\\n\\r\\n                    // get the keccak hash to get the contents of the array\\r\\n                        mstore(0x0, _preBytes.slot)\\r\\n                        let sc := keccak256(0x0, 0x20)\\r\\n\\r\\n                        let mc := add(_postBytes, 0x20)\\r\\n                        let end := add(mc, mlength)\\r\\n\\r\\n                    // the next line is the loop condition:\\r\\n                    // while(uint256(mc < end) + cb == 2)\\r\\n                        for {} eq(add(lt(mc, end), cb), 2) {\\r\\n                            sc := add(sc, 1)\\r\\n                            mc := add(mc, 0x20)\\r\\n                        } {\\r\\n                            if iszero(eq(sload(sc), mload(mc))) {\\r\\n                            // unsuccess:\\r\\n                                success := 0\\r\\n                                cb := 0\\r\\n                            }\\r\\n                        }\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n            default {\\r\\n            // unsuccess:\\r\\n                success := 0\\r\\n            }\\r\\n        }\\r\\n\\r\\n        return success;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x31ec222b26bcf66817cb409f0128d16c632b28729ad3a694f47b10e8ad0cb984\",\"license\":\"Unlicense\"},\"contracts/util/ExcessivelySafeCall.sol\":{\"content\":\"// SPDX-License-Identifier: MIT OR Apache-2.0\\r\\npragma solidity >=0.7.6;\\r\\n\\r\\nlibrary ExcessivelySafeCall {\\r\\n    uint256 constant LOW_28_MASK =\\r\\n    0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff;\\r\\n\\r\\n    /// @notice Use when you _really_ really _really_ don't trust the called\\r\\n    /// contract. This prevents the called contract from causing reversion of\\r\\n    /// the caller in as many ways as we can.\\r\\n    /// @dev The main difference between this and a solidity low-level call is\\r\\n    /// that we limit the number of bytes that the callee can cause to be\\r\\n    /// copied to caller memory. This prevents stupid things like malicious\\r\\n    /// contracts returning 10,000,000 bytes causing a local OOG when copying\\r\\n    /// to memory.\\r\\n    /// @param _target The address to call\\r\\n    /// @param _gas The amount of gas to forward to the remote contract\\r\\n    /// @param _maxCopy The maximum number of bytes of returndata to copy\\r\\n    /// to memory.\\r\\n    /// @param _calldata The data to send to the remote contract\\r\\n    /// @return success and returndata, as `.call()`. Returndata is capped to\\r\\n    /// `_maxCopy` bytes.\\r\\n    function excessivelySafeCall(\\r\\n        address _target,\\r\\n        uint256 _gas,\\r\\n        uint16 _maxCopy,\\r\\n        bytes memory _calldata\\r\\n    ) internal returns (bool, bytes memory) {\\r\\n        // set up for assembly call\\r\\n        uint256 _toCopy;\\r\\n        bool _success;\\r\\n        bytes memory _returnData = new bytes(_maxCopy);\\r\\n        // dispatch message to recipient\\r\\n        // by assembly calling \\\"handle\\\" function\\r\\n        // we call via assembly to avoid memcopying a very large returndata\\r\\n        // returned by a malicious contract\\r\\n        assembly {\\r\\n            _success := call(\\r\\n            _gas, // gas\\r\\n            _target, // recipient\\r\\n            0, // ether value\\r\\n            add(_calldata, 0x20), // inloc\\r\\n            mload(_calldata), // inlen\\r\\n            0, // outloc\\r\\n            0 // outlen\\r\\n            )\\r\\n        // limit our copy to 256 bytes\\r\\n            _toCopy := returndatasize()\\r\\n            if gt(_toCopy, _maxCopy) {\\r\\n                _toCopy := _maxCopy\\r\\n            }\\r\\n        // Store the length of the copied bytes\\r\\n            mstore(_returnData, _toCopy)\\r\\n        // copy the bytes from returndata[0:_toCopy]\\r\\n            returndatacopy(add(_returnData, 0x20), 0, _toCopy)\\r\\n        }\\r\\n        return (_success, _returnData);\\r\\n    }\\r\\n\\r\\n    /// @notice Use when you _really_ really _really_ don't trust the called\\r\\n    /// contract. This prevents the called contract from causing reversion of\\r\\n    /// the caller in as many ways as we can.\\r\\n    /// @dev The main difference between this and a solidity low-level call is\\r\\n    /// that we limit the number of bytes that the callee can cause to be\\r\\n    /// copied to caller memory. This prevents stupid things like malicious\\r\\n    /// contracts returning 10,000,000 bytes causing a local OOG when copying\\r\\n    /// to memory.\\r\\n    /// @param _target The address to call\\r\\n    /// @param _gas The amount of gas to forward to the remote contract\\r\\n    /// @param _maxCopy The maximum number of bytes of returndata to copy\\r\\n    /// to memory.\\r\\n    /// @param _calldata The data to send to the remote contract\\r\\n    /// @return success and returndata, as `.call()`. Returndata is capped to\\r\\n    /// `_maxCopy` bytes.\\r\\n    function excessivelySafeStaticCall(\\r\\n        address _target,\\r\\n        uint256 _gas,\\r\\n        uint16 _maxCopy,\\r\\n        bytes memory _calldata\\r\\n    ) internal view returns (bool, bytes memory) {\\r\\n        // set up for assembly call\\r\\n        uint256 _toCopy;\\r\\n        bool _success;\\r\\n        bytes memory _returnData = new bytes(_maxCopy);\\r\\n        // dispatch message to recipient\\r\\n        // by assembly calling \\\"handle\\\" function\\r\\n        // we call via assembly to avoid memcopying a very large returndata\\r\\n        // returned by a malicious contract\\r\\n        assembly {\\r\\n            _success := staticcall(\\r\\n            _gas, // gas\\r\\n            _target, // recipient\\r\\n            add(_calldata, 0x20), // inloc\\r\\n            mload(_calldata), // inlen\\r\\n            0, // outloc\\r\\n            0 // outlen\\r\\n            )\\r\\n        // limit our copy to 256 bytes\\r\\n            _toCopy := returndatasize()\\r\\n            if gt(_toCopy, _maxCopy) {\\r\\n                _toCopy := _maxCopy\\r\\n            }\\r\\n        // Store the length of the copied bytes\\r\\n            mstore(_returnData, _toCopy)\\r\\n        // copy the bytes from returndata[0:_toCopy]\\r\\n            returndatacopy(add(_returnData, 0x20), 0, _toCopy)\\r\\n        }\\r\\n        return (_success, _returnData);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @notice Swaps function selectors in encoded contract calls\\r\\n     * @dev Allows reuse of encoded calldata for functions with identical\\r\\n     * argument types but different names. It simply swaps out the first 4 bytes\\r\\n     * for the new selector. This function modifies memory in place, and should\\r\\n     * only be used with caution.\\r\\n     * @param _newSelector The new 4-byte selector\\r\\n     * @param _buf The encoded contract args\\r\\n     */\\r\\n    function swapSelector(bytes4 _newSelector, bytes memory _buf)\\r\\n    internal\\r\\n    pure\\r\\n    {\\r\\n        require(_buf.length >= 4);\\r\\n        uint256 _mask = LOW_28_MASK;\\r\\n        assembly {\\r\\n        // load the first word of\\r\\n            let _word := mload(add(_buf, 0x20))\\r\\n        // mask out the top 4 bytes\\r\\n        // /x\\r\\n            _word := and(_word, _mask)\\r\\n            _word := or(_newSelector, _word)\\r\\n            mstore(add(_buf, 0x20), _word)\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x7255c64d2c753f4c52c9654fa052744cd9ee368ac9bd41334d43f1ab83c9d01d\",\"license\":\"MIT OR Apache-2.0\"}},\"version\":1}",
    "bytecode": "0x60e06040523480156200001157600080fd5b50604051620048c3380380620048c3833981016040819052620000349162000361565b6040518060400160405280600a815260200169115e185b5c1b1953d19560b21b8152506040518060400160405280600381526020016213d19560ea1b8152508285838383838181808062000097620000916200019d60201b60201c565b620001a1565b6001600160a01b0316608052505060ff1660a05250508151620000c290600b906020850190620002bb565b508051620000d890600c906020840190620002bb565b5050506000620000ed620001f160201b60201c565b90508060ff168360ff1611156200015b5760405162461bcd60e51b815260206004820152602760248201527f4f46543a20736861726564446563696d616c73206d757374206265203c3d20646044820152666563696d616c7360c81b60648201526084015b60405180910390fd5b620001678382620003cf565b6200017490600a620004f4565b60c052506200019493506200018d9250506200019d9050565b83620001f6565b50505062000564565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b601290565b6001600160a01b0382166200024e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640162000152565b80600a60008282546200026291906200050c565b90915550506001600160a01b0382166000818152600860209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054620002c99062000527565b90600052602060002090601f016020900481019282620002ed576000855562000338565b82601f106200030857805160ff191683800117855562000338565b8280016001018555821562000338579182015b82811115620003385782518255916020019190600101906200031b565b50620003469291506200034a565b5090565b5b808211156200034657600081556001016200034b565b6000806000606084860312156200037757600080fd5b83516001600160a01b03811681146200038f57600080fd5b60208501516040860151919450925060ff81168114620003ae57600080fd5b809150509250925092565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff841680821015620003ec57620003ec620003b9565b90039392505050565b600181815b80851115620004365781600019048211156200041a576200041a620003b9565b808516156200042857918102915b93841c9390800290620003fa565b509250929050565b6000826200044f57506001620004ee565b816200045e57506000620004ee565b81600181146200047757600281146200048257620004a2565b6001915050620004ee565b60ff841115620004965762000496620003b9565b50506001821b620004ee565b5060208310610133831016604e8410600b8410161715620004c7575081810a620004ee565b620004d38383620003f5565b8060001904821115620004ea57620004ea620003b9565b0290505b92915050565b60006200050560ff8416836200043e565b9392505050565b60008219821115620005225762000522620003b9565b500190565b600181811c908216806200053c57607f821691505b602082108114156200055e57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c0516142e2620005e16000396000818161272a01528181612b240152612e010152600061064001526000818161081a015281816109ca01528181610ce201528181610da201528181610f5f015281816115c701528181611b9101528181612095015281816125160152612cb801526142e26000f3fe6080604052600436106102e35760003560e01c80638cfd8f5c11610190578063c4461834116100dc578063eab45d9c11610095578063ed629c5c1161006f578063ed629c5c1461095a578063f2fde38b14610974578063f5ecbdbc14610994578063fc0c546a146109b457600080fd5b8063eab45d9c146108fa578063eaffd49a1461091a578063eb8d72b71461093a57600080fd5b8063c44618341461085c578063cbed8b9c14610872578063d1deba1f14610892578063dd62ed3e146108a5578063df2a5b3b146108c5578063e6a20ae6146108e557600080fd5b80639f38369a11610149578063a6c3d16511610123578063a6c3d165146107c8578063a9059cbb146107e8578063b353aaa714610808578063baf3292d1461083c57600080fd5b80639f38369a14610768578063a457c2d714610788578063a4c51df5146107a857600080fd5b80638cfd8f5c146106625780638da5cb5b1461069a5780639358928b146106cc578063950c8a74146106e157806395d89b41146107015780639bdb98121461071657600080fd5b80633d8b38f61161024f57806366ad5c8a11610208578063715018a6116101e2578063715018a6146105e65780637533d788146105fb57806376203b481461061b578063857749b01461062e57600080fd5b806366ad5c8a1461057d578063695ef6bf1461059d57806370a08231146105b057600080fd5b80633d8b38f6146104975780633f1f4fa4146104b757806342d65a8d146104e457806344770515146105045780634c42899a146105195780635b8c41e61461052e57600080fd5b806310ddb137116102a157806310ddb137146103c157806318160ddd146103e157806323b872dd14610400578063313ce56714610420578063365260b414610442578063395093511461047757600080fd5b80621d3567146102e857806301ffc9a71461030a57806306fdde031461033f57806307e0db1714610361578063095ea7b3146103815780630df37483146103a1575b600080fd5b3480156102f457600080fd5b5061030861030336600461353a565b6109c7565b005b34801561031657600080fd5b5061032a6103253660046135cd565b610bf8565b60405190151581526020015b60405180910390f35b34801561034b57600080fd5b50610354610c2f565b604051610336919061364f565b34801561036d57600080fd5b5061030861037c366004613662565b610cc1565b34801561038d57600080fd5b5061032a61039c366004613692565b610d4a565b3480156103ad57600080fd5b506103086103bc3660046136be565b610d62565b3480156103cd57600080fd5b506103086103dc366004613662565b610d81565b3480156103ed57600080fd5b50600a545b604051908152602001610336565b34801561040c57600080fd5b5061032a61041b3660046136da565b610dd9565b34801561042c57600080fd5b5060125b60405160ff9091168152602001610336565b34801561044e57600080fd5b5061046261045d36600461372b565b610dfd565b60408051928352602083019190915201610336565b34801561048357600080fd5b5061032a610492366004613692565b610e52565b3480156104a357600080fd5b5061032a6104b2366004613790565b610e74565b3480156104c357600080fd5b506103f26104d2366004613662565b60036020526000908152604090205481565b3480156104f057600080fd5b506103086104ff366004613790565b610f40565b34801561051057600080fd5b506103f2600081565b34801561052557600080fd5b50610430600081565b34801561053a57600080fd5b506103f261054936600461384f565b6005602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b34801561058957600080fd5b5061030861059836600461353a565b610fc6565b6103086105ab366004613907565b6110a2565b3480156105bc57600080fd5b506103f26105cb36600461397a565b6001600160a01b031660009081526008602052604090205490565b3480156105f257600080fd5b5061030861110d565b34801561060757600080fd5b50610354610616366004613662565b611121565b610308610629366004613997565b6111bb565b34801561063a57600080fd5b506104307f000000000000000000000000000000000000000000000000000000000000000081565b34801561066e57600080fd5b506103f261067d366004613a49565b600260209081526000928352604080842090915290825290205481565b3480156106a657600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610336565b3480156106d857600080fd5b506103f261126a565b3480156106ed57600080fd5b506004546106b4906001600160a01b031681565b34801561070d57600080fd5b5061035461127a565b34801561072257600080fd5b5061032a61073136600461384f565b6007602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205460ff1681565b34801561077457600080fd5b50610354610783366004613662565b611289565b34801561079457600080fd5b5061032a6107a3366004613692565b6113a0565b3480156107b457600080fd5b506104626107c3366004613a7c565b61141b565b3480156107d457600080fd5b506103086107e3366004613790565b6114aa565b3480156107f457600080fd5b5061032a610803366004613692565b61153d565b34801561081457600080fd5b506106b47f000000000000000000000000000000000000000000000000000000000000000081565b34801561084857600080fd5b5061030861085736600461397a565b61154b565b34801561086857600080fd5b506103f261271081565b34801561087e57600080fd5b5061030861088d366004613b35565b6115a8565b6103086108a036600461353a565b611632565b3480156108b157600080fd5b506103f26108c0366004613ba3565b611848565b3480156108d157600080fd5b506103086108e0366004613bdc565b611873565b3480156108f157600080fd5b50610430600181565b34801561090657600080fd5b50610308610915366004613c18565b611925565b34801561092657600080fd5b50610308610935366004613c33565b61196e565b34801561094657600080fd5b50610308610955366004613790565b611a8d565b34801561096657600080fd5b5060065461032a9060ff1681565b34801561098057600080fd5b5061030861098f36600461397a565b611ae7565b3480156109a057600080fd5b506103546109af366004613cfb565b611b60565b3480156109c057600080fd5b50306106b4565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610a445760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff861660009081526001602052604081208054610a6290613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8e90613d48565b8015610adb5780601f10610ab057610100808354040283529160200191610adb565b820191906000526020600020905b815481529060010190602001808311610abe57829003601f168201915b50505050509050805186869050148015610af6575060008151115b8015610b1e575080516020820120604051610b149088908890613d7d565b6040518091039020145b610b795760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b6064820152608401610a3b565b610bef8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611c1192505050565b50505050505050565b60006001600160e01b03198216631f7ecdf760e01b1480610c2957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600b8054610c3e90613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6a90613d48565b8015610cb75780601f10610c8c57610100808354040283529160200191610cb7565b820191906000526020600020905b815481529060010190602001808311610c9a57829003601f168201915b5050505050905090565b610cc9611c8a565b6040516307e0db1760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307e0db17906024015b600060405180830381600087803b158015610d2f57600080fd5b505af1158015610d43573d6000803e3d6000fd5b5050505050565b600033610d58818585611ce4565b5060019392505050565b610d6a611c8a565b61ffff909116600090815260036020526040902055565b610d89611c8a565b6040516310ddb13760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310ddb13790602401610d15565b600033610de7858285611e08565b610df2858585611e82565b506001949350505050565b600080610e438888888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061202d92505050565b91509150965096945050505050565b600033610d58818585610e658383611848565b610e6f9190613da3565b611ce4565b61ffff831660009081526001602052604081208054829190610e9590613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec190613d48565b8015610f0e5780601f10610ee357610100808354040283529160200191610f0e565b820191906000526020600020905b815481529060010190602001808311610ef157829003601f168201915b505050505090508383604051610f25929190613d7d565b60405180910390208180519060200120149150509392505050565b610f48611c8a565b6040516342d65a8d60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906342d65a8d90610f9890869086908690600401613de4565b600060405180830381600087803b158015610fb257600080fd5b505af1158015610bef573d6000803e3d6000fd5b3330146110245760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b6064820152608401610a3b565b61109a8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f89018190048102820181019092528781528993509150879087908190840183828082843760009201919091525061212192505050565b505050505050565b61109a858585856110b6602087018761397a565b6110c6604088016020890161397a565b6110d36040890189613e02565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121a892505050565b611115611c8a565b61111f6000612290565b565b6001602052600090815260409020805461113a90613d48565b80601f016020809104026020016040519081016040528092919081815260200182805461116690613d48565b80156111b35780601f10611188576101008083540402835291602001916111b3565b820191906000526020600020905b81548152906001019060200180831161119657829003601f168201915b505050505081565b61125f8888888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250611208915050602089018961397a565b61121860408a0160208b0161397a565b61122560408b018b613e02565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506122e092505050565b505050505050505050565b6000611275600a5490565b905090565b6060600c8054610c3e90613d48565b61ffff81166000908152600160205260408120805460609291906112ac90613d48565b80601f01602080910402602001604051908101604052809291908181526020018280546112d890613d48565b80156113255780601f106112fa57610100808354040283529160200191611325565b820191906000526020600020905b81548152906001019060200180831161130857829003601f168201915b5050505050905080516000141561137e5760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f72640000006044820152606401610a3b565b6113996000601483516113919190613e48565b8391906123dc565b9392505050565b600033816113ae8286611848565b90508381101561140e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610a3b565b610df28286868403611ce4565b6000806114988b8b8b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8d018190048102820181019092528b81528e93508d9250908c908c90819084018382808284376000920191909152506124e992505050565b91509150995099975050505050505050565b6114b2611c8a565b8181306040516020016114c793929190613e5f565b60408051601f1981840301815291815261ffff851660009081526001602090815291902082516114fc939192909101906133b7565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce83838360405161153093929190613de4565b60405180910390a1505050565b600033610d58818585611e82565b611553611c8a565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b906020015b60405180910390a150565b6115b0611c8a565b6040516332fb62e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cbed8b9c906116049088908890889088908890600401613e85565b600060405180830381600087803b15801561161e57600080fd5b505af115801561125f573d6000803e3d6000fd5b61ffff861660009081526005602052604080822090516116559088908890613d7d565b90815260408051602092819003830190206001600160401b038716600090815292529020549050806116d55760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b6064820152608401610a3b565b8083836040516116e6929190613d7d565b6040518091039020146117455760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b6064820152608401610a3b565b61ffff871660009081526005602052604080822090516117689089908990613d7d565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f88018290048202830182019052868252611800918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a93509150889088908190840183828082843760009201919091525061212192505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e58787878785604051611837959493929190613ebe565b60405180910390a150505050505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205490565b61187b611c8a565b600081116118c35760405162461bcd60e51b81526020600482015260156024820152744c7a4170703a20696e76616c6964206d696e47617360581b6044820152606401610a3b565b61ffff83811660008181526002602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac090606001611530565b61192d611c8a565b6006805460ff19168215159081179091556040519081527f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a49060200161159d565b3330146119bd5760405162461bcd60e51b815260206004820152601f60248201527f4f4654436f72653a2063616c6c6572206d757374206265204f4654436f7265006044820152606401610a3b565b6119c83086866125a4565b9350846001600160a01b03168a61ffff167fbf551ec93859b170f9b2141bd9298bf3f64322c6f7beb2543a0cb669834118bf86604051611a0a91815260200190565b60405180910390a3604051633fe79aed60e11b81526001600160a01b03861690637fcf35da908390611a4e908e908e908e908e908e908d908d908d90600401613ef9565b600060405180830381600088803b158015611a6857600080fd5b5087f1158015611a7c573d6000803e3d6000fd5b505050505050505050505050505050565b611a95611c8a565b61ffff83166000908152600160205260409020611ab390838361343b565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab83838360405161153093929190613de4565b611aef611c8a565b6001600160a01b038116611b545760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a3b565b611b5d81612290565b50565b604051633d7b2f6f60e21b815261ffff808616600483015284166024820152306044820152606481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5ecbdbc90608401600060405180830381865afa158015611be0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611c089190810190613f54565b95945050505050565b600080611c745a60966366ad5c8a60e01b89898989604051602401611c399493929190613fc1565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152309291906125f6565b915091508161109a5761109a8686868685612680565b6000546001600160a01b0316331461111f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a3b565b6001600160a01b038316611d465760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610a3b565b6001600160a01b038216611da75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610a3b565b6001600160a01b0383811660008181526009602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000611e148484611848565b90506000198114611e7c5781811015611e6f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610a3b565b611e7c8484848403611ce4565b50505050565b6001600160a01b038316611ee65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610a3b565b6001600160a01b038216611f485760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610a3b565b6001600160a01b03831660009081526008602052604090205481811015611fc05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610a3b565b6001600160a01b0380851660008181526008602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906120209086815260200190565b60405180910390a3611e7c565b600080600061207b8761203f88612722565b6040805160006020820152602181019390935260c09190911b6001600160c01b0319166041830152805160298184030181526049909201905290565b60405163040a7bb160e41b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906340a7bb10906120d2908b90309086908b908b90600401613fff565b6040805180830381865afa1580156120ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121129190614053565b92509250509550959350505050565b600061212d82826127a8565b905060ff81166121485761214385858585612804565b610d43565b60ff8116600114156121605761214385858585612894565b60405162461bcd60e51b815260206004820152601c60248201527f4f4654436f72653a20756e6b6e6f776e207061636b65742074797065000000006044820152606401610a3b565b60006121b687828481612aa2565b6121bf85612b1c565b5090506121ce88888884612b5c565b90506000811161221c5760405162461bcd60e51b815260206004820152601960248201527813d19510dbdc994e88185b5bdd5b9d081d1bdbc81cdb585b1b603a1b6044820152606401610a3b565b600061222b8761203f84612722565b905061223b888287878734612b8e565b86896001600160a01b03168961ffff167fd81fc9b8523134ed613870ed029d6170cbb73aa6a6bc311b9a642689fb9df59a8560405161227c91815260200190565b60405180910390a450979650505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006122f8896001846001600160401b038916612aa2565b61230187612b1c565b5090506123108a8a8a84612b5c565b90506000811161235e5760405162461bcd60e51b815260206004820152601960248201527813d19510dbdc994e88185b5bdd5b9d081d1bdbc81cdb585b1b603a1b6044820152606401610a3b565b6000612375338a61236e85612722565b8a8a612d34565b90506123858a8287878734612b8e565b888b6001600160a01b03168b61ffff167fd81fc9b8523134ed613870ed029d6170cbb73aa6a6bc311b9a642689fb9df59a856040516123c691815260200190565b60405180910390a4509998505050505050505050565b6060816123ea81601f613da3565b10156124295760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610a3b565b6124338284613da3565b845110156124775760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610a3b565b60608215801561249657604051915060008252602082016040526124e0565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156124cf5780518352602092830192016124b7565b5050858452601f01601f1916604052505b50949350505050565b60008060006124fc338a61236e8b612722565b60405163040a7bb160e41b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906340a7bb1090612553908d90309086908b908b90600401613fff565b6040805180830381865afa15801561256f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125939190614053565b925092505097509795505050505050565b600033306001600160a01b038616148015906125d25750806001600160a01b0316856001600160a01b031614155b156125e2576125e2858285611e08565b6125ed858585611e82565b50909392505050565b6000606060008060008661ffff166001600160401b0381111561261b5761261b6137e2565b6040519080825280601f01601f191660200182016040528015612645576020820181803683370190505b50905060008087516020890160008d8df191503d925086831115612667578692505b828152826000602083013e909890975095505050505050565b8180519060200120600560008761ffff1661ffff168152602001908152602001600020856040516126b19190614077565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c9061270e9087908790879087908790614093565b60405180910390a15050505050565b505050565b60008061274f7f0000000000000000000000000000000000000000000000000000000000000000846140fb565b90506001600160401b03811115610c295760405162461bcd60e51b815260206004820152601a60248201527f4f4654436f72653a20616d6f756e745344206f766572666c6f770000000000006044820152606401610a3b565b60006127b5826001613da3565b835110156127fb5760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610a3b565b50016001015190565b60008061281083612d75565b90925090506001600160a01b0382166128295761dead91505b600061283482612dfa565b9050612841878483612e2f565b9050826001600160a01b03168761ffff167fbf551ec93859b170f9b2141bd9298bf3f64322c6f7beb2543a0cb669834118bf8360405161288391815260200190565b60405180910390a350505050505050565b60008060008060006128a586612e42565b945094509450945094506000600760008b61ffff1661ffff168152602001908152602001600020896040516128da9190614077565b90815260408051602092819003830190206001600160401b038b166000908152925281205460ff16915061290d85612dfa565b90508161297b5761291f8b3083612e2f565b61ffff8c16600090815260076020526040908190209051919250600191612947908d90614077565b90815260408051602092819003830190206001600160401b038d16600090815292529020805460ff19169115159190911790555b6001600160a01b0386163b6129d2576040516001600160a01b03871681527f9aedf5fdba8716db3b6705ca00150643309995d4f818a249ed6dde6677e7792d9060200160405180910390a150505050505050611e7c565b8a8a8a8a8a8a868a60008a6129f0578b6001600160401b03166129f2565b5a5b9050600080612a245a609663eaffd49a60e01b8e8e8e8d8d8d8d8d604051602401611c3998979695949392919061410f565b915091508115612a7d578751602089012060405161ffff8d16907fb8890edbfc1c74692f527444645f95489c3703cc2df42e4a366f5d06fa6cd88490612a6f908e908e908690614183565b60405180910390a250612a8a565b612a8a8b8b8b8b85612680565b50505050505050505050505050505050505050505050565b60065460ff1615612abe57612ab984848484612ef9565b611e7c565b815115611e7c5760405162461bcd60e51b815260206004820152602660248201527f4f4654436f72653a205f61646170746572506172616d73206d7573742062652060448201526532b6b83a3c9760d11b6064820152608401610a3b565b600080612b497f0000000000000000000000000000000000000000000000000000000000000000846141b1565b9050612b558184613e48565b9150915091565b6000336001600160a01b0386168114612b7a57612b7a868285611e08565b612b848684612fd8565b5090949350505050565b61ffff861660009081526001602052604081208054612bac90613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054612bd890613d48565b8015612c255780601f10612bfa57610100808354040283529160200191612c25565b820191906000526020600020905b815481529060010190602001808311612c0857829003601f168201915b50505050509050805160001415612c975760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b6064820152608401610a3b565b612ca287875161310c565b60405162c5803160e81b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c5803100908490612cf9908b9086908c908c908c908c906004016141c5565b6000604051808303818588803b158015612d1257600080fd5b505af1158015612d26573d6000803e3d6000fd5b505050505050505050505050565b6060600185856001600160a01b0389168587604051602001612d5b9695949392919061422c565b604051602081830303815290604052905095945050505050565b60008080612d8384826127a8565b60ff16148015612d94575082516029145b612ddb5760405162461bcd60e51b815260206004820152601860248201527713d19510dbdc994e881a5b9d985b1a59081c185e5b1bd85960421b6044820152606401610a3b565b612de683600d61317a565b9150612df38360216131df565b9050915091565b6000610c297f00000000000000000000000000000000000000000000000000000000000000006001600160401b03841661428d565b6000612e3b838361323c565b5092915050565b600080806060816001612e5587836127a8565b60ff1614612ea05760405162461bcd60e51b815260206004820152601860248201527713d19510dbdc994e881a5b9d985b1a59081c185e5b1bd85960421b6044820152606401610a3b565b612eab86600d61317a565b9350612eb88660216131df565b9250612ec58660296132fd565b9450612ed28660496131df565b9050612eee6051808851612ee69190613e48565b8891906123dc565b915091939590929450565b6000612f048361335b565b61ffff808716600090815260026020908152604080832093891683529290529081205491925090612f36908490613da3565b905060008111612f885760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f74207365740000000000006044820152606401610a3b565b8082101561109a5760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f7700000000006044820152606401610a3b565b6001600160a01b0382166130385760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610a3b565b6001600160a01b038216600090815260086020526040902054818110156130ac5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610a3b565b6001600160a01b03831660008181526008602090815260408083208686039055600a80548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b61ffff82166000908152600360205260409020548061312a57506127105b8082111561271d5760405162461bcd60e51b815260206004820181905260248201527f4c7a4170703a207061796c6f61642073697a6520697320746f6f206c617267656044820152606401610a3b565b6000613187826014613da3565b835110156131cf5760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606401610a3b565b500160200151600160601b900490565b60006131ec826008613da3565b835110156132335760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b6044820152606401610a3b565b50016008015190565b6001600160a01b0382166132925760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610a3b565b80600a60008282546132a49190613da3565b90915550506001600160a01b0382166000818152600860209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600061330a826020613da3565b835110156133525760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610a3b565b50016020015190565b60006022825110156133af5760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d73000000006044820152606401610a3b565b506022015190565b8280546133c390613d48565b90600052602060002090601f0160209004810192826133e5576000855561342b565b82601f106133fe57805160ff191683800117855561342b565b8280016001018555821561342b579182015b8281111561342b578251825591602001919060010190613410565b506134379291506134af565b5090565b82805461344790613d48565b90600052602060002090601f016020900481019282613469576000855561342b565b82601f106134825782800160ff1982351617855561342b565b8280016001018555821561342b579182015b8281111561342b578235825591602001919060010190613494565b5b8082111561343757600081556001016134b0565b803561ffff811681146134d657600080fd5b919050565b60008083601f8401126134ed57600080fd5b5081356001600160401b0381111561350457600080fd5b60208301915083602082850101111561351c57600080fd5b9250929050565b80356001600160401b03811681146134d657600080fd5b6000806000806000806080878903121561355357600080fd5b61355c876134c4565b955060208701356001600160401b038082111561357857600080fd5b6135848a838b016134db565b909750955085915061359860408a01613523565b945060608901359150808211156135ae57600080fd5b506135bb89828a016134db565b979a9699509497509295939492505050565b6000602082840312156135df57600080fd5b81356001600160e01b03198116811461139957600080fd5b60005b838110156136125781810151838201526020016135fa565b83811115611e7c5750506000910152565b6000815180845261363b8160208601602086016135f7565b601f01601f19169290920160200192915050565b6020815260006113996020830184613623565b60006020828403121561367457600080fd5b611399826134c4565b6001600160a01b0381168114611b5d57600080fd5b600080604083850312156136a557600080fd5b82356136b08161367d565b946020939093013593505050565b600080604083850312156136d157600080fd5b6136b0836134c4565b6000806000606084860312156136ef57600080fd5b83356136fa8161367d565b9250602084013561370a8161367d565b929592945050506040919091013590565b803580151581146134d657600080fd5b60008060008060008060a0878903121561374457600080fd5b61374d876134c4565b955060208701359450604087013593506137696060880161371b565b925060808701356001600160401b0381111561378457600080fd5b6135bb89828a016134db565b6000806000604084860312156137a557600080fd5b6137ae846134c4565b925060208401356001600160401b038111156137c957600080fd5b6137d5868287016134db565b9497909650939450505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715613820576138206137e2565b604052919050565b60006001600160401b03821115613841576138416137e2565b50601f01601f191660200190565b60008060006060848603121561386457600080fd5b61386d846134c4565b925060208401356001600160401b0381111561388857600080fd5b8401601f8101861361389957600080fd5b80356138ac6138a782613828565b6137f8565b8181528760208385010111156138c157600080fd5b816020840160208301376000602083830101528094505050506138e660408501613523565b90509250925092565b60006060828403121561390157600080fd5b50919050565b600080600080600060a0868803121561391f57600080fd5b853561392a8161367d565b9450613938602087016134c4565b9350604086013592506060860135915060808601356001600160401b0381111561396157600080fd5b61396d888289016138ef565b9150509295509295909350565b60006020828403121561398c57600080fd5b81356113998161367d565b60008060008060008060008060e0898b0312156139b357600080fd5b88356139be8161367d565b97506139cc60208a016134c4565b9650604089013595506060890135945060808901356001600160401b03808211156139f657600080fd5b613a028c838d016134db565b9096509450849150613a1660a08c01613523565b935060c08b0135915080821115613a2c57600080fd5b50613a398b828c016138ef565b9150509295985092959890939650565b60008060408385031215613a5c57600080fd5b613a65836134c4565b9150613a73602084016134c4565b90509250929050565b600080600080600080600080600060e08a8c031215613a9a57600080fd5b613aa38a6134c4565b985060208a0135975060408a0135965060608a01356001600160401b0380821115613acd57600080fd5b613ad98d838e016134db565b9098509650869150613aed60808d01613523565b9550613afb60a08d0161371b565b945060c08c0135915080821115613b1157600080fd5b50613b1e8c828d016134db565b915080935050809150509295985092959850929598565b600080600080600060808688031215613b4d57600080fd5b613b56866134c4565b9450613b64602087016134c4565b93506040860135925060608601356001600160401b03811115613b8657600080fd5b613b92888289016134db565b969995985093965092949392505050565b60008060408385031215613bb657600080fd5b8235613bc18161367d565b91506020830135613bd18161367d565b809150509250929050565b600080600060608486031215613bf157600080fd5b613bfa846134c4565b9250613c08602085016134c4565b9150604084013590509250925092565b600060208284031215613c2a57600080fd5b6113998261371b565b6000806000806000806000806000806101008b8d031215613c5357600080fd5b613c5c8b6134c4565b995060208b01356001600160401b0380821115613c7857600080fd5b613c848e838f016134db565b909b509950899150613c9860408e01613523565b985060608d0135975060808d01359150613cb18261367d565b90955060a08c0135945060c08c01359080821115613cce57600080fd5b50613cdb8d828e016134db565b9150809450508092505060e08b013590509295989b9194979a5092959850565b60008060008060808587031215613d1157600080fd5b613d1a856134c4565b9350613d28602086016134c4565b92506040850135613d388161367d565b9396929550929360600135925050565b600181811c90821680613d5c57607f821691505b6020821081141561390157634e487b7160e01b600052602260045260246000fd5b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115613db657613db6613d8d565b500190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff84168152604060208201526000611c08604083018486613dbb565b6000808335601e19843603018112613e1957600080fd5b8301803591506001600160401b03821115613e3357600080fd5b60200191503681900382131561351c57600080fd5b600082821015613e5a57613e5a613d8d565b500390565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b600061ffff808816835280871660208401525084604083015260806060830152613eb3608083018486613dbb565b979650505050505050565b61ffff86168152608060208201526000613edc608083018688613dbb565b6001600160401b0394909416604083015250606001529392505050565b61ffff8916815260c060208201526000613f1760c08301898b613dbb565b6001600160401b038816604084015286606084015285608084015282810360a0840152613f45818587613dbb565b9b9a5050505050505050505050565b600060208284031215613f6657600080fd5b81516001600160401b03811115613f7c57600080fd5b8201601f81018413613f8d57600080fd5b8051613f9b6138a782613828565b818152856020838501011115613fb057600080fd5b611c088260208301602086016135f7565b61ffff85168152608060208201526000613fde6080830186613623565b6001600160401b03851660408401528281036060840152613eb38185613623565b61ffff861681526001600160a01b038516602082015260a06040820181905260009061402d90830186613623565b841515606084015282810360808401526140478185613623565b98975050505050505050565b6000806040838503121561406657600080fd5b505080516020909101519092909150565b600082516140898184602087016135f7565b9190910192915050565b61ffff8616815260a0602082015260006140b060a0830187613623565b6001600160401b038616604084015282810360608401526140d18186613623565b905082810360808401526140478185613623565b634e487b7160e01b600052601260045260246000fd5b60008261410a5761410a6140e5565b500490565b600061010061ffff8b16835280602084015261412d8184018b613623565b6001600160401b038a166040850152606084018990526001600160a01b038816608085015260a0840187905283810360c0850152905061416d8186613623565b9150508260e08301529998505050505050505050565b6060815260006141966060830186613623565b6001600160401b039490941660208301525060400152919050565b6000826141c0576141c06140e5565b500690565b61ffff8716815260c0602082015260006141e260c0830188613623565b82810360408401526141f48188613623565b6001600160a01b0387811660608601528616608085015283810360a0850152905061421f8185613623565b9998505050505050505050565b60ff60f81b8760f81b16815285600182015260006001600160401b0360c01b808760c01b166021840152856029840152808560c01b16604984015250825161427b8160518501602087016135f7565b91909101605101979650505050505050565b60008160001904831182151516156142a7576142a7613d8d565b50029056fea2646970667358221220c30ec9226cc18f6508b6544ef19a51bccbf9954471ef3f937962ec346f1f0ae364736f6c634300080c0033",
    "deployedBytecode": "0x6080604052600436106102e35760003560e01c80638cfd8f5c11610190578063c4461834116100dc578063eab45d9c11610095578063ed629c5c1161006f578063ed629c5c1461095a578063f2fde38b14610974578063f5ecbdbc14610994578063fc0c546a146109b457600080fd5b8063eab45d9c146108fa578063eaffd49a1461091a578063eb8d72b71461093a57600080fd5b8063c44618341461085c578063cbed8b9c14610872578063d1deba1f14610892578063dd62ed3e146108a5578063df2a5b3b146108c5578063e6a20ae6146108e557600080fd5b80639f38369a11610149578063a6c3d16511610123578063a6c3d165146107c8578063a9059cbb146107e8578063b353aaa714610808578063baf3292d1461083c57600080fd5b80639f38369a14610768578063a457c2d714610788578063a4c51df5146107a857600080fd5b80638cfd8f5c146106625780638da5cb5b1461069a5780639358928b146106cc578063950c8a74146106e157806395d89b41146107015780639bdb98121461071657600080fd5b80633d8b38f61161024f57806366ad5c8a11610208578063715018a6116101e2578063715018a6146105e65780637533d788146105fb57806376203b481461061b578063857749b01461062e57600080fd5b806366ad5c8a1461057d578063695ef6bf1461059d57806370a08231146105b057600080fd5b80633d8b38f6146104975780633f1f4fa4146104b757806342d65a8d146104e457806344770515146105045780634c42899a146105195780635b8c41e61461052e57600080fd5b806310ddb137116102a157806310ddb137146103c157806318160ddd146103e157806323b872dd14610400578063313ce56714610420578063365260b414610442578063395093511461047757600080fd5b80621d3567146102e857806301ffc9a71461030a57806306fdde031461033f57806307e0db1714610361578063095ea7b3146103815780630df37483146103a1575b600080fd5b3480156102f457600080fd5b5061030861030336600461353a565b6109c7565b005b34801561031657600080fd5b5061032a6103253660046135cd565b610bf8565b60405190151581526020015b60405180910390f35b34801561034b57600080fd5b50610354610c2f565b604051610336919061364f565b34801561036d57600080fd5b5061030861037c366004613662565b610cc1565b34801561038d57600080fd5b5061032a61039c366004613692565b610d4a565b3480156103ad57600080fd5b506103086103bc3660046136be565b610d62565b3480156103cd57600080fd5b506103086103dc366004613662565b610d81565b3480156103ed57600080fd5b50600a545b604051908152602001610336565b34801561040c57600080fd5b5061032a61041b3660046136da565b610dd9565b34801561042c57600080fd5b5060125b60405160ff9091168152602001610336565b34801561044e57600080fd5b5061046261045d36600461372b565b610dfd565b60408051928352602083019190915201610336565b34801561048357600080fd5b5061032a610492366004613692565b610e52565b3480156104a357600080fd5b5061032a6104b2366004613790565b610e74565b3480156104c357600080fd5b506103f26104d2366004613662565b60036020526000908152604090205481565b3480156104f057600080fd5b506103086104ff366004613790565b610f40565b34801561051057600080fd5b506103f2600081565b34801561052557600080fd5b50610430600081565b34801561053a57600080fd5b506103f261054936600461384f565b6005602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b34801561058957600080fd5b5061030861059836600461353a565b610fc6565b6103086105ab366004613907565b6110a2565b3480156105bc57600080fd5b506103f26105cb36600461397a565b6001600160a01b031660009081526008602052604090205490565b3480156105f257600080fd5b5061030861110d565b34801561060757600080fd5b50610354610616366004613662565b611121565b610308610629366004613997565b6111bb565b34801561063a57600080fd5b506104307f000000000000000000000000000000000000000000000000000000000000000081565b34801561066e57600080fd5b506103f261067d366004613a49565b600260209081526000928352604080842090915290825290205481565b3480156106a657600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610336565b3480156106d857600080fd5b506103f261126a565b3480156106ed57600080fd5b506004546106b4906001600160a01b031681565b34801561070d57600080fd5b5061035461127a565b34801561072257600080fd5b5061032a61073136600461384f565b6007602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205460ff1681565b34801561077457600080fd5b50610354610783366004613662565b611289565b34801561079457600080fd5b5061032a6107a3366004613692565b6113a0565b3480156107b457600080fd5b506104626107c3366004613a7c565b61141b565b3480156107d457600080fd5b506103086107e3366004613790565b6114aa565b3480156107f457600080fd5b5061032a610803366004613692565b61153d565b34801561081457600080fd5b506106b47f000000000000000000000000000000000000000000000000000000000000000081565b34801561084857600080fd5b5061030861085736600461397a565b61154b565b34801561086857600080fd5b506103f261271081565b34801561087e57600080fd5b5061030861088d366004613b35565b6115a8565b6103086108a036600461353a565b611632565b3480156108b157600080fd5b506103f26108c0366004613ba3565b611848565b3480156108d157600080fd5b506103086108e0366004613bdc565b611873565b3480156108f157600080fd5b50610430600181565b34801561090657600080fd5b50610308610915366004613c18565b611925565b34801561092657600080fd5b50610308610935366004613c33565b61196e565b34801561094657600080fd5b50610308610955366004613790565b611a8d565b34801561096657600080fd5b5060065461032a9060ff1681565b34801561098057600080fd5b5061030861098f36600461397a565b611ae7565b3480156109a057600080fd5b506103546109af366004613cfb565b611b60565b3480156109c057600080fd5b50306106b4565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610a445760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff861660009081526001602052604081208054610a6290613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8e90613d48565b8015610adb5780601f10610ab057610100808354040283529160200191610adb565b820191906000526020600020905b815481529060010190602001808311610abe57829003601f168201915b50505050509050805186869050148015610af6575060008151115b8015610b1e575080516020820120604051610b149088908890613d7d565b6040518091039020145b610b795760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b6064820152608401610a3b565b610bef8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611c1192505050565b50505050505050565b60006001600160e01b03198216631f7ecdf760e01b1480610c2957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600b8054610c3e90613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6a90613d48565b8015610cb75780601f10610c8c57610100808354040283529160200191610cb7565b820191906000526020600020905b815481529060010190602001808311610c9a57829003601f168201915b5050505050905090565b610cc9611c8a565b6040516307e0db1760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307e0db17906024015b600060405180830381600087803b158015610d2f57600080fd5b505af1158015610d43573d6000803e3d6000fd5b5050505050565b600033610d58818585611ce4565b5060019392505050565b610d6a611c8a565b61ffff909116600090815260036020526040902055565b610d89611c8a565b6040516310ddb13760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310ddb13790602401610d15565b600033610de7858285611e08565b610df2858585611e82565b506001949350505050565b600080610e438888888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061202d92505050565b91509150965096945050505050565b600033610d58818585610e658383611848565b610e6f9190613da3565b611ce4565b61ffff831660009081526001602052604081208054829190610e9590613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec190613d48565b8015610f0e5780601f10610ee357610100808354040283529160200191610f0e565b820191906000526020600020905b815481529060010190602001808311610ef157829003601f168201915b505050505090508383604051610f25929190613d7d565b60405180910390208180519060200120149150509392505050565b610f48611c8a565b6040516342d65a8d60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906342d65a8d90610f9890869086908690600401613de4565b600060405180830381600087803b158015610fb257600080fd5b505af1158015610bef573d6000803e3d6000fd5b3330146110245760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b6064820152608401610a3b565b61109a8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f89018190048102820181019092528781528993509150879087908190840183828082843760009201919091525061212192505050565b505050505050565b61109a858585856110b6602087018761397a565b6110c6604088016020890161397a565b6110d36040890189613e02565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121a892505050565b611115611c8a565b61111f6000612290565b565b6001602052600090815260409020805461113a90613d48565b80601f016020809104026020016040519081016040528092919081815260200182805461116690613d48565b80156111b35780601f10611188576101008083540402835291602001916111b3565b820191906000526020600020905b81548152906001019060200180831161119657829003601f168201915b505050505081565b61125f8888888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250611208915050602089018961397a565b61121860408a0160208b0161397a565b61122560408b018b613e02565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506122e092505050565b505050505050505050565b6000611275600a5490565b905090565b6060600c8054610c3e90613d48565b61ffff81166000908152600160205260408120805460609291906112ac90613d48565b80601f01602080910402602001604051908101604052809291908181526020018280546112d890613d48565b80156113255780601f106112fa57610100808354040283529160200191611325565b820191906000526020600020905b81548152906001019060200180831161130857829003601f168201915b5050505050905080516000141561137e5760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f72640000006044820152606401610a3b565b6113996000601483516113919190613e48565b8391906123dc565b9392505050565b600033816113ae8286611848565b90508381101561140e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610a3b565b610df28286868403611ce4565b6000806114988b8b8b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8d018190048102820181019092528b81528e93508d9250908c908c90819084018382808284376000920191909152506124e992505050565b91509150995099975050505050505050565b6114b2611c8a565b8181306040516020016114c793929190613e5f565b60408051601f1981840301815291815261ffff851660009081526001602090815291902082516114fc939192909101906133b7565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce83838360405161153093929190613de4565b60405180910390a1505050565b600033610d58818585611e82565b611553611c8a565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b906020015b60405180910390a150565b6115b0611c8a565b6040516332fb62e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cbed8b9c906116049088908890889088908890600401613e85565b600060405180830381600087803b15801561161e57600080fd5b505af115801561125f573d6000803e3d6000fd5b61ffff861660009081526005602052604080822090516116559088908890613d7d565b90815260408051602092819003830190206001600160401b038716600090815292529020549050806116d55760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b6064820152608401610a3b565b8083836040516116e6929190613d7d565b6040518091039020146117455760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b6064820152608401610a3b565b61ffff871660009081526005602052604080822090516117689089908990613d7d565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f88018290048202830182019052868252611800918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a93509150889088908190840183828082843760009201919091525061212192505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e58787878785604051611837959493929190613ebe565b60405180910390a150505050505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205490565b61187b611c8a565b600081116118c35760405162461bcd60e51b81526020600482015260156024820152744c7a4170703a20696e76616c6964206d696e47617360581b6044820152606401610a3b565b61ffff83811660008181526002602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac090606001611530565b61192d611c8a565b6006805460ff19168215159081179091556040519081527f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a49060200161159d565b3330146119bd5760405162461bcd60e51b815260206004820152601f60248201527f4f4654436f72653a2063616c6c6572206d757374206265204f4654436f7265006044820152606401610a3b565b6119c83086866125a4565b9350846001600160a01b03168a61ffff167fbf551ec93859b170f9b2141bd9298bf3f64322c6f7beb2543a0cb669834118bf86604051611a0a91815260200190565b60405180910390a3604051633fe79aed60e11b81526001600160a01b03861690637fcf35da908390611a4e908e908e908e908e908e908d908d908d90600401613ef9565b600060405180830381600088803b158015611a6857600080fd5b5087f1158015611a7c573d6000803e3d6000fd5b505050505050505050505050505050565b611a95611c8a565b61ffff83166000908152600160205260409020611ab390838361343b565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab83838360405161153093929190613de4565b611aef611c8a565b6001600160a01b038116611b545760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a3b565b611b5d81612290565b50565b604051633d7b2f6f60e21b815261ffff808616600483015284166024820152306044820152606481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5ecbdbc90608401600060405180830381865afa158015611be0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611c089190810190613f54565b95945050505050565b600080611c745a60966366ad5c8a60e01b89898989604051602401611c399493929190613fc1565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152309291906125f6565b915091508161109a5761109a8686868685612680565b6000546001600160a01b0316331461111f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a3b565b6001600160a01b038316611d465760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610a3b565b6001600160a01b038216611da75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610a3b565b6001600160a01b0383811660008181526009602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000611e148484611848565b90506000198114611e7c5781811015611e6f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610a3b565b611e7c8484848403611ce4565b50505050565b6001600160a01b038316611ee65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610a3b565b6001600160a01b038216611f485760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610a3b565b6001600160a01b03831660009081526008602052604090205481811015611fc05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610a3b565b6001600160a01b0380851660008181526008602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906120209086815260200190565b60405180910390a3611e7c565b600080600061207b8761203f88612722565b6040805160006020820152602181019390935260c09190911b6001600160c01b0319166041830152805160298184030181526049909201905290565b60405163040a7bb160e41b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906340a7bb10906120d2908b90309086908b908b90600401613fff565b6040805180830381865afa1580156120ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121129190614053565b92509250509550959350505050565b600061212d82826127a8565b905060ff81166121485761214385858585612804565b610d43565b60ff8116600114156121605761214385858585612894565b60405162461bcd60e51b815260206004820152601c60248201527f4f4654436f72653a20756e6b6e6f776e207061636b65742074797065000000006044820152606401610a3b565b60006121b687828481612aa2565b6121bf85612b1c565b5090506121ce88888884612b5c565b90506000811161221c5760405162461bcd60e51b815260206004820152601960248201527813d19510dbdc994e88185b5bdd5b9d081d1bdbc81cdb585b1b603a1b6044820152606401610a3b565b600061222b8761203f84612722565b905061223b888287878734612b8e565b86896001600160a01b03168961ffff167fd81fc9b8523134ed613870ed029d6170cbb73aa6a6bc311b9a642689fb9df59a8560405161227c91815260200190565b60405180910390a450979650505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006122f8896001846001600160401b038916612aa2565b61230187612b1c565b5090506123108a8a8a84612b5c565b90506000811161235e5760405162461bcd60e51b815260206004820152601960248201527813d19510dbdc994e88185b5bdd5b9d081d1bdbc81cdb585b1b603a1b6044820152606401610a3b565b6000612375338a61236e85612722565b8a8a612d34565b90506123858a8287878734612b8e565b888b6001600160a01b03168b61ffff167fd81fc9b8523134ed613870ed029d6170cbb73aa6a6bc311b9a642689fb9df59a856040516123c691815260200190565b60405180910390a4509998505050505050505050565b6060816123ea81601f613da3565b10156124295760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610a3b565b6124338284613da3565b845110156124775760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610a3b565b60608215801561249657604051915060008252602082016040526124e0565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156124cf5780518352602092830192016124b7565b5050858452601f01601f1916604052505b50949350505050565b60008060006124fc338a61236e8b612722565b60405163040a7bb160e41b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906340a7bb1090612553908d90309086908b908b90600401613fff565b6040805180830381865afa15801561256f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125939190614053565b925092505097509795505050505050565b600033306001600160a01b038616148015906125d25750806001600160a01b0316856001600160a01b031614155b156125e2576125e2858285611e08565b6125ed858585611e82565b50909392505050565b6000606060008060008661ffff166001600160401b0381111561261b5761261b6137e2565b6040519080825280601f01601f191660200182016040528015612645576020820181803683370190505b50905060008087516020890160008d8df191503d925086831115612667578692505b828152826000602083013e909890975095505050505050565b8180519060200120600560008761ffff1661ffff168152602001908152602001600020856040516126b19190614077565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c9061270e9087908790879087908790614093565b60405180910390a15050505050565b505050565b60008061274f7f0000000000000000000000000000000000000000000000000000000000000000846140fb565b90506001600160401b03811115610c295760405162461bcd60e51b815260206004820152601a60248201527f4f4654436f72653a20616d6f756e745344206f766572666c6f770000000000006044820152606401610a3b565b60006127b5826001613da3565b835110156127fb5760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610a3b565b50016001015190565b60008061281083612d75565b90925090506001600160a01b0382166128295761dead91505b600061283482612dfa565b9050612841878483612e2f565b9050826001600160a01b03168761ffff167fbf551ec93859b170f9b2141bd9298bf3f64322c6f7beb2543a0cb669834118bf8360405161288391815260200190565b60405180910390a350505050505050565b60008060008060006128a586612e42565b945094509450945094506000600760008b61ffff1661ffff168152602001908152602001600020896040516128da9190614077565b90815260408051602092819003830190206001600160401b038b166000908152925281205460ff16915061290d85612dfa565b90508161297b5761291f8b3083612e2f565b61ffff8c16600090815260076020526040908190209051919250600191612947908d90614077565b90815260408051602092819003830190206001600160401b038d16600090815292529020805460ff19169115159190911790555b6001600160a01b0386163b6129d2576040516001600160a01b03871681527f9aedf5fdba8716db3b6705ca00150643309995d4f818a249ed6dde6677e7792d9060200160405180910390a150505050505050611e7c565b8a8a8a8a8a8a868a60008a6129f0578b6001600160401b03166129f2565b5a5b9050600080612a245a609663eaffd49a60e01b8e8e8e8d8d8d8d8d604051602401611c3998979695949392919061410f565b915091508115612a7d578751602089012060405161ffff8d16907fb8890edbfc1c74692f527444645f95489c3703cc2df42e4a366f5d06fa6cd88490612a6f908e908e908690614183565b60405180910390a250612a8a565b612a8a8b8b8b8b85612680565b50505050505050505050505050505050505050505050565b60065460ff1615612abe57612ab984848484612ef9565b611e7c565b815115611e7c5760405162461bcd60e51b815260206004820152602660248201527f4f4654436f72653a205f61646170746572506172616d73206d7573742062652060448201526532b6b83a3c9760d11b6064820152608401610a3b565b600080612b497f0000000000000000000000000000000000000000000000000000000000000000846141b1565b9050612b558184613e48565b9150915091565b6000336001600160a01b0386168114612b7a57612b7a868285611e08565b612b848684612fd8565b5090949350505050565b61ffff861660009081526001602052604081208054612bac90613d48565b80601f0160208091040260200160405190810160405280929190818152602001828054612bd890613d48565b8015612c255780601f10612bfa57610100808354040283529160200191612c25565b820191906000526020600020905b815481529060010190602001808311612c0857829003601f168201915b50505050509050805160001415612c975760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b6064820152608401610a3b565b612ca287875161310c565b60405162c5803160e81b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c5803100908490612cf9908b9086908c908c908c908c906004016141c5565b6000604051808303818588803b158015612d1257600080fd5b505af1158015612d26573d6000803e3d6000fd5b505050505050505050505050565b6060600185856001600160a01b0389168587604051602001612d5b9695949392919061422c565b604051602081830303815290604052905095945050505050565b60008080612d8384826127a8565b60ff16148015612d94575082516029145b612ddb5760405162461bcd60e51b815260206004820152601860248201527713d19510dbdc994e881a5b9d985b1a59081c185e5b1bd85960421b6044820152606401610a3b565b612de683600d61317a565b9150612df38360216131df565b9050915091565b6000610c297f00000000000000000000000000000000000000000000000000000000000000006001600160401b03841661428d565b6000612e3b838361323c565b5092915050565b600080806060816001612e5587836127a8565b60ff1614612ea05760405162461bcd60e51b815260206004820152601860248201527713d19510dbdc994e881a5b9d985b1a59081c185e5b1bd85960421b6044820152606401610a3b565b612eab86600d61317a565b9350612eb88660216131df565b9250612ec58660296132fd565b9450612ed28660496131df565b9050612eee6051808851612ee69190613e48565b8891906123dc565b915091939590929450565b6000612f048361335b565b61ffff808716600090815260026020908152604080832093891683529290529081205491925090612f36908490613da3565b905060008111612f885760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f74207365740000000000006044820152606401610a3b565b8082101561109a5760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f7700000000006044820152606401610a3b565b6001600160a01b0382166130385760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610a3b565b6001600160a01b038216600090815260086020526040902054818110156130ac5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610a3b565b6001600160a01b03831660008181526008602090815260408083208686039055600a80548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b61ffff82166000908152600360205260409020548061312a57506127105b8082111561271d5760405162461bcd60e51b815260206004820181905260248201527f4c7a4170703a207061796c6f61642073697a6520697320746f6f206c617267656044820152606401610a3b565b6000613187826014613da3565b835110156131cf5760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606401610a3b565b500160200151600160601b900490565b60006131ec826008613da3565b835110156132335760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b6044820152606401610a3b565b50016008015190565b6001600160a01b0382166132925760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610a3b565b80600a60008282546132a49190613da3565b90915550506001600160a01b0382166000818152600860209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600061330a826020613da3565b835110156133525760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610a3b565b50016020015190565b60006022825110156133af5760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d73000000006044820152606401610a3b565b506022015190565b8280546133c390613d48565b90600052602060002090601f0160209004810192826133e5576000855561342b565b82601f106133fe57805160ff191683800117855561342b565b8280016001018555821561342b579182015b8281111561342b578251825591602001919060010190613410565b506134379291506134af565b5090565b82805461344790613d48565b90600052602060002090601f016020900481019282613469576000855561342b565b82601f106134825782800160ff1982351617855561342b565b8280016001018555821561342b579182015b8281111561342b578235825591602001919060010190613494565b5b8082111561343757600081556001016134b0565b803561ffff811681146134d657600080fd5b919050565b60008083601f8401126134ed57600080fd5b5081356001600160401b0381111561350457600080fd5b60208301915083602082850101111561351c57600080fd5b9250929050565b80356001600160401b03811681146134d657600080fd5b6000806000806000806080878903121561355357600080fd5b61355c876134c4565b955060208701356001600160401b038082111561357857600080fd5b6135848a838b016134db565b909750955085915061359860408a01613523565b945060608901359150808211156135ae57600080fd5b506135bb89828a016134db565b979a9699509497509295939492505050565b6000602082840312156135df57600080fd5b81356001600160e01b03198116811461139957600080fd5b60005b838110156136125781810151838201526020016135fa565b83811115611e7c5750506000910152565b6000815180845261363b8160208601602086016135f7565b601f01601f19169290920160200192915050565b6020815260006113996020830184613623565b60006020828403121561367457600080fd5b611399826134c4565b6001600160a01b0381168114611b5d57600080fd5b600080604083850312156136a557600080fd5b82356136b08161367d565b946020939093013593505050565b600080604083850312156136d157600080fd5b6136b0836134c4565b6000806000606084860312156136ef57600080fd5b83356136fa8161367d565b9250602084013561370a8161367d565b929592945050506040919091013590565b803580151581146134d657600080fd5b60008060008060008060a0878903121561374457600080fd5b61374d876134c4565b955060208701359450604087013593506137696060880161371b565b925060808701356001600160401b0381111561378457600080fd5b6135bb89828a016134db565b6000806000604084860312156137a557600080fd5b6137ae846134c4565b925060208401356001600160401b038111156137c957600080fd5b6137d5868287016134db565b9497909650939450505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715613820576138206137e2565b604052919050565b60006001600160401b03821115613841576138416137e2565b50601f01601f191660200190565b60008060006060848603121561386457600080fd5b61386d846134c4565b925060208401356001600160401b0381111561388857600080fd5b8401601f8101861361389957600080fd5b80356138ac6138a782613828565b6137f8565b8181528760208385010111156138c157600080fd5b816020840160208301376000602083830101528094505050506138e660408501613523565b90509250925092565b60006060828403121561390157600080fd5b50919050565b600080600080600060a0868803121561391f57600080fd5b853561392a8161367d565b9450613938602087016134c4565b9350604086013592506060860135915060808601356001600160401b0381111561396157600080fd5b61396d888289016138ef565b9150509295509295909350565b60006020828403121561398c57600080fd5b81356113998161367d565b60008060008060008060008060e0898b0312156139b357600080fd5b88356139be8161367d565b97506139cc60208a016134c4565b9650604089013595506060890135945060808901356001600160401b03808211156139f657600080fd5b613a028c838d016134db565b9096509450849150613a1660a08c01613523565b935060c08b0135915080821115613a2c57600080fd5b50613a398b828c016138ef565b9150509295985092959890939650565b60008060408385031215613a5c57600080fd5b613a65836134c4565b9150613a73602084016134c4565b90509250929050565b600080600080600080600080600060e08a8c031215613a9a57600080fd5b613aa38a6134c4565b985060208a0135975060408a0135965060608a01356001600160401b0380821115613acd57600080fd5b613ad98d838e016134db565b9098509650869150613aed60808d01613523565b9550613afb60a08d0161371b565b945060c08c0135915080821115613b1157600080fd5b50613b1e8c828d016134db565b915080935050809150509295985092959850929598565b600080600080600060808688031215613b4d57600080fd5b613b56866134c4565b9450613b64602087016134c4565b93506040860135925060608601356001600160401b03811115613b8657600080fd5b613b92888289016134db565b969995985093965092949392505050565b60008060408385031215613bb657600080fd5b8235613bc18161367d565b91506020830135613bd18161367d565b809150509250929050565b600080600060608486031215613bf157600080fd5b613bfa846134c4565b9250613c08602085016134c4565b9150604084013590509250925092565b600060208284031215613c2a57600080fd5b6113998261371b565b6000806000806000806000806000806101008b8d031215613c5357600080fd5b613c5c8b6134c4565b995060208b01356001600160401b0380821115613c7857600080fd5b613c848e838f016134db565b909b509950899150613c9860408e01613523565b985060608d0135975060808d01359150613cb18261367d565b90955060a08c0135945060c08c01359080821115613cce57600080fd5b50613cdb8d828e016134db565b9150809450508092505060e08b013590509295989b9194979a5092959850565b60008060008060808587031215613d1157600080fd5b613d1a856134c4565b9350613d28602086016134c4565b92506040850135613d388161367d565b9396929550929360600135925050565b600181811c90821680613d5c57607f821691505b6020821081141561390157634e487b7160e01b600052602260045260246000fd5b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115613db657613db6613d8d565b500190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff84168152604060208201526000611c08604083018486613dbb565b6000808335601e19843603018112613e1957600080fd5b8301803591506001600160401b03821115613e3357600080fd5b60200191503681900382131561351c57600080fd5b600082821015613e5a57613e5a613d8d565b500390565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b600061ffff808816835280871660208401525084604083015260806060830152613eb3608083018486613dbb565b979650505050505050565b61ffff86168152608060208201526000613edc608083018688613dbb565b6001600160401b0394909416604083015250606001529392505050565b61ffff8916815260c060208201526000613f1760c08301898b613dbb565b6001600160401b038816604084015286606084015285608084015282810360a0840152613f45818587613dbb565b9b9a5050505050505050505050565b600060208284031215613f6657600080fd5b81516001600160401b03811115613f7c57600080fd5b8201601f81018413613f8d57600080fd5b8051613f9b6138a782613828565b818152856020838501011115613fb057600080fd5b611c088260208301602086016135f7565b61ffff85168152608060208201526000613fde6080830186613623565b6001600160401b03851660408401528281036060840152613eb38185613623565b61ffff861681526001600160a01b038516602082015260a06040820181905260009061402d90830186613623565b841515606084015282810360808401526140478185613623565b98975050505050505050565b6000806040838503121561406657600080fd5b505080516020909101519092909150565b600082516140898184602087016135f7565b9190910192915050565b61ffff8616815260a0602082015260006140b060a0830187613623565b6001600160401b038616604084015282810360608401526140d18186613623565b905082810360808401526140478185613623565b634e487b7160e01b600052601260045260246000fd5b60008261410a5761410a6140e5565b500490565b600061010061ffff8b16835280602084015261412d8184018b613623565b6001600160401b038a166040850152606084018990526001600160a01b038816608085015260a0840187905283810360c0850152905061416d8186613623565b9150508260e08301529998505050505050505050565b6060815260006141966060830186613623565b6001600160401b039490941660208301525060400152919050565b6000826141c0576141c06140e5565b500690565b61ffff8716815260c0602082015260006141e260c0830188613623565b82810360408401526141f48188613623565b6001600160a01b0387811660608601528616608085015283810360a0850152905061421f8185613623565b9998505050505050505050565b60ff60f81b8760f81b16815285600182015260006001600160401b0360c01b808760c01b166021840152856029840152808560c01b16604984015250825161427b8160518501602087016135f7565b91909101605101979650505050505050565b60008160001904831182151516156142a7576142a7613d8d565b50029056fea2646970667358221220c30ec9226cc18f6508b6544ef19a51bccbf9954471ef3f937962ec346f1f0ae364736f6c634300080c0033",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "allowance(address,address)": {
          "details": "See {IERC20-allowance}."
        },
        "approve(address,uint256)": {
          "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
        },
        "balanceOf(address)": {
          "details": "See {IERC20-balanceOf}."
        },
        "circulatingSupply()": {
          "details": "returns the circulating amount of tokens on current chain"
        },
        "decimals()": {
          "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
        },
        "decreaseAllowance(address,uint256)": {
          "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
        },
        "estimateSendFee(uint16,bytes32,uint256,bool,bytes)": {
          "details": "estimate send token `_tokenId` to (`_dstChainId`, `_toAddress`) _dstChainId - L0 defined chain id to send tokens too _toAddress - dynamic bytes array which contains the address to whom you are sending tokens to on the dstChain _amount - amount of the tokens to transfer _useZro - indicates to use zro to pay L0 fees _adapterParam - flexible bytes array to indicate messaging adapter services in L0"
        },
        "increaseAllowance(address,uint256)": {
          "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
        },
        "name()": {
          "details": "Returns the name of the token."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
        },
        "sendFrom(address,uint16,bytes32,uint256,(address,address,bytes))": {
          "details": "send `_amount` amount of token to (`_dstChainId`, `_toAddress`) from `_from` `_from` the owner of token `_dstChainId` the destination chain identifier `_toAddress` can be any size depending on the `dstChainId`. `_amount` the quantity of tokens in wei `_refundAddress` the address LayerZero refunds if too much message fee is sent `_zroPaymentAddress` set to address(0x0) if not paying in ZRO (LayerZero Token) `_adapterParams` is a flexible bytes array to indicate messaging adapter services"
        },
        "symbol()": {
          "details": "Returns the symbol of the token, usually a shorter version of the name."
        },
        "token()": {
          "details": "returns the address of the ERC20 token"
        },
        "totalSupply()": {
          "details": "See {IERC20-totalSupply}."
        },
        "transfer(address,uint256)": {
          "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "title": "A LayerZero OmnichainFungibleToken example of BasedOFT",
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "notice": "Use this contract only on the BASE CHAIN. It locks tokens on source, on outgoing send(), and unlocks tokens when receiving from other chains.",
      "version": 1
    },
    "storageLayout": {
      "storage": [
        {
          "astId": 4129,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "_owner",
          "offset": 0,
          "slot": "0",
          "type": "t_address"
        },
        {
          "astId": 15650,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "trustedRemoteLookup",
          "offset": 0,
          "slot": "1",
          "type": "t_mapping(t_uint16,t_bytes_storage)"
        },
        {
          "astId": 15656,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "minDstGasLookup",
          "offset": 0,
          "slot": "2",
          "type": "t_mapping(t_uint16,t_mapping(t_uint16,t_uint256))"
        },
        {
          "astId": 15660,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "payloadSizeLimitLookup",
          "offset": 0,
          "slot": "3",
          "type": "t_mapping(t_uint16,t_uint256)"
        },
        {
          "astId": 15662,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "precrime",
          "offset": 0,
          "slot": "4",
          "type": "t_address"
        },
        {
          "astId": 16199,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "failedMessages",
          "offset": 0,
          "slot": "5",
          "type": "t_mapping(t_uint16,t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bytes32)))"
        },
        {
          "astId": 22468,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "useCustomAdapterParams",
          "offset": 0,
          "slot": "6",
          "type": "t_bool"
        },
        {
          "astId": 22476,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "creditedPackets",
          "offset": 0,
          "slot": "7",
          "type": "t_mapping(t_uint16,t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bool)))"
        },
        {
          "astId": 5824,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "_balances",
          "offset": 0,
          "slot": "8",
          "type": "t_mapping(t_address,t_uint256)"
        },
        {
          "astId": 5830,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "_allowances",
          "offset": 0,
          "slot": "9",
          "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
        },
        {
          "astId": 5832,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "_totalSupply",
          "offset": 0,
          "slot": "10",
          "type": "t_uint256"
        },
        {
          "astId": 5834,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "_name",
          "offset": 0,
          "slot": "11",
          "type": "t_string_storage"
        },
        {
          "astId": 5836,
          "contract": "contracts/examples/ExampleOFTV2.sol:ExampleOFTV2",
          "label": "_symbol",
          "offset": 0,
          "slot": "12",
          "type": "t_string_storage"
        }
      ],
      "types": {
        "t_address": {
          "encoding": "inplace",
          "label": "address",
          "numberOfBytes": "20"
        },
        "t_bool": {
          "encoding": "inplace",
          "label": "bool",
          "numberOfBytes": "1"
        },
        "t_bytes32": {
          "encoding": "inplace",
          "label": "bytes32",
          "numberOfBytes": "32"
        },
        "t_bytes_memory_ptr": {
          "encoding": "bytes",
          "label": "bytes",
          "numberOfBytes": "32"
        },
        "t_bytes_storage": {
          "encoding": "bytes",
          "label": "bytes",
          "numberOfBytes": "32"
        },
        "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
          "encoding": "mapping",
          "key": "t_address",
          "label": "mapping(address => mapping(address => uint256))",
          "numberOfBytes": "32",
          "value": "t_mapping(t_address,t_uint256)"
        },
        "t_mapping(t_address,t_uint256)": {
          "encoding": "mapping",
          "key": "t_address",
          "label": "mapping(address => uint256)",
          "numberOfBytes": "32",
          "value": "t_uint256"
        },
        "t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bool))": {
          "encoding": "mapping",
          "key": "t_bytes_memory_ptr",
          "label": "mapping(bytes => mapping(uint64 => bool))",
          "numberOfBytes": "32",
          "value": "t_mapping(t_uint64,t_bool)"
        },
        "t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bytes32))": {
          "encoding": "mapping",
          "key": "t_bytes_memory_ptr",
          "label": "mapping(bytes => mapping(uint64 => bytes32))",
          "numberOfBytes": "32",
          "value": "t_mapping(t_uint64,t_bytes32)"
        },
        "t_mapping(t_uint16,t_bytes_storage)": {
          "encoding": "mapping",
          "key": "t_uint16",
          "label": "mapping(uint16 => bytes)",
          "numberOfBytes": "32",
          "value": "t_bytes_storage"
        },
        "t_mapping(t_uint16,t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bool)))": {
          "encoding": "mapping",
          "key": "t_uint16",
          "label": "mapping(uint16 => mapping(bytes => mapping(uint64 => bool)))",
          "numberOfBytes": "32",
          "value": "t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bool))"
        },
        "t_mapping(t_uint16,t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bytes32)))": {
          "encoding": "mapping",
          "key": "t_uint16",
          "label": "mapping(uint16 => mapping(bytes => mapping(uint64 => bytes32)))",
          "numberOfBytes": "32",
          "value": "t_mapping(t_bytes_memory_ptr,t_mapping(t_uint64,t_bytes32))"
        },
        "t_mapping(t_uint16,t_mapping(t_uint16,t_uint256))": {
          "encoding": "mapping",
          "key": "t_uint16",
          "label": "mapping(uint16 => mapping(uint16 => uint256))",
          "numberOfBytes": "32",
          "value": "t_mapping(t_uint16,t_uint256)"
        },
        "t_mapping(t_uint16,t_uint256)": {
          "encoding": "mapping",
          "key": "t_uint16",
          "label": "mapping(uint16 => uint256)",
          "numberOfBytes": "32",
          "value": "t_uint256"
        },
        "t_mapping(t_uint64,t_bool)": {
          "encoding": "mapping",
          "key": "t_uint64",
          "label": "mapping(uint64 => bool)",
          "numberOfBytes": "32",
          "value": "t_bool"
        },
        "t_mapping(t_uint64,t_bytes32)": {
          "encoding": "mapping",
          "key": "t_uint64",
          "label": "mapping(uint64 => bytes32)",
          "numberOfBytes": "32",
          "value": "t_bytes32"
        },
        "t_string_storage": {
          "encoding": "bytes",
          "label": "string",
          "numberOfBytes": "32"
        },
        "t_uint16": {
          "encoding": "inplace",
          "label": "uint16",
          "numberOfBytes": "2"
        },
        "t_uint256": {
          "encoding": "inplace",
          "label": "uint256",
          "numberOfBytes": "32"
        },
        "t_uint64": {
          "encoding": "inplace",
          "label": "uint64",
          "numberOfBytes": "8"
        }
      }
    }
  }


export const claimAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claimTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "setTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastClaimTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "timeUntilNextClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]