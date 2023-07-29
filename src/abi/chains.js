export const chains = {
 "Mantle-testnet":
    {
        chainId: "0x1389", //"0x1389":"mantle"
        rpcUrls: ['https://rpc.testnet.mantle.xyz/'],
        chainName: "Mantle",
        nativeCurrency: { name: "BIT", decimals: 18, symbol: "BIT" },
        blockExplorerUrls: ['https://explorer.testnet.mantle.xyz/'],
        iconUrls: ['']
      },
      "Goerli":
    {
        chainId: "0x5", // "0x5":"Goerli"
        rpcUrls: ['https://rpc.ankr.com/eth_goerli'],
        chainName: "Goerli",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://goerli.etherscan.io'],
        iconUrls: ['']
      },
      "Bsc-testnet":{
        chainId: "0x61", // "0x61":"Bsc-testnet"
        rpcUrls: ['https://endpoints.omniatech.io/v1/bsc/testnet/public'],
        chainName: "Binance Testnet",
        nativeCurrency: { name: "tBNB", decimals: 18, symbol: "tBNB" },
        blockExplorerUrls: ['https://testnet.bscscan.com'],
        iconUrls: ['']
      },
      "Mumbai":{
        chainId: "0x13881",   //"0x13881":"Mumbai"
        rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
        chainName: "Mumbai Testnet",
        nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
        blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
        iconUrls: ['']
      },"Scroll":{
        chainId: "0x82750", // "0x82751":"Scroll"
        rpcUrls: ['https://alpha-rpc.scroll.io/l2'],
        chainName: "Scroll Testnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://blockscout.scroll.io'],
        iconUrls: ['']
      },"Base":{
        chainId: "0x14A33", //"0x14A33":"Base"
        rpcUrls: ['https://goerli.base.org'],
        chainName: "Base",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://goerli.basescan.org'],
        iconUrls: ['']
      },"Linea-testnet":{
        chainId: "0xe704",  //"0xe704":"Linea"
        rpcUrls: ['https://rpc.goerli.linea.build'],
        chainName: "Linea Testnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "LineaETH" },
        blockExplorerUrls: ['https://explorer.goerli.linea.build'],
        iconUrls: ['']
      },"Zkevm-testnet":{
        chainId: "0x58e", //"0x58e":"Zkevm Testnet"
        rpcUrls: ['https://rpc.public.zkevm-test.net'],
        chainName: "Polygon ZkEvm Testnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://testnet-zkevm.polygonscan.com'],
        iconUrls: ['']
      },"Fuji":{
        chainId: "0xa869",  // "0xa869":"Fuji-C"
        rpcUrls: ['https://api.avax-test.network/ext/C/rpc'],
        chainName: "Polygon ZkEvm",
        nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAX" },
        blockExplorerUrls: ['https://testnet.snowtrace.io'],
        iconUrls: ['']
      },"Moonbeam-alpha":{
        chainId: "0x507", //"0x507":"Moonbase-alpha"
        rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'],
        chainName: "Moonbase alpha",
        nativeCurrency: { name: "DEV", decimals: 18, symbol: "DEV" },
        blockExplorerUrls: ['https://moonbase.moonscan.io/'],
        iconUrls: ['']
      },"Fantom-testnet":{
        chainId: "0xFA2", //"0xFA2":"Fantom-Testnet"
        rpcUrls: ['https://rpc.testnet.fantom.network'],
        chainName: "Fantom testnet",
        nativeCurrency: { name: "FTM", decimals: 18, symbol: "FTM" },
        blockExplorerUrls: ['https://testnet.ftmscan.com'],
        iconUrls: ['']
      },"Zksync-testnet":{
        chainId: "0x118", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://testnet.era.zksync.dev'],
        chainName: "Zksync testnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://goerli.explorer.zksync.io'],
        iconUrls: ['']
      },


// Mainnet chains

      "Bsc":{
        chainId: "0x38", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://bsc-dataseed1.ninicoin.io'],
        chainName: "Binance  Mainnet",
        nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
        blockExplorerUrls: ['https://bscscan.com'],
        iconUrls: ['']
      },"Polygon":{
        chainId: "0x89", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://polygon.llamarpc.com'],
        chainName: "Polygon Mainnet",
        nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
        blockExplorerUrls: ['https://polygonscan.com'],
        iconUrls: ['']
      },"Fantom":{
        chainId: "0xfa", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://rpcapi.fantom.network'],
        chainName: "Fantom Opera",
        nativeCurrency: { name: "FANTOM", decimals: 18, symbol: "FANTOM" },
        blockExplorerUrls: ['https://ftmscan.com'],
        iconUrls: ['']
      },"Moonbeam":{
        chainId: "0x504", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://rpc.api.moonbeam.network'],
        chainName: "Moonbeam",
        nativeCurrency: { name: "GLMR", decimals: 18, symbol: "GLMR" },
        blockExplorerUrls: ['https://moonbeam.moonscan.io'],
        iconUrls: ['']
      },"Linea":{
        chainId: "", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://mainnet.infura.io/v3/'],
        chainName: "Linea Mainnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: [''],
        iconUrls: ['']
      },"Zksync":{
        chainId: "0x144", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://zksync2-mainnet.zksync.io'],
        chainName: "zkSync Era",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://explorer.zksync.io'],
        iconUrls: ['']
      },"ZkEVM":{
        chainId: "0x44d", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://zkevm-rpc.com'],
        chainName: "zkEVM",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: [''],
        iconUrls: ['https://zkevm.polygonscan.com']
      },"Avalanche ":{
        chainId: "0xa86a", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        chainName: "Avalanche",
        nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAx" },
        blockExplorerUrls: ['https://snowtrace.io'],
        iconUrls: ['']
      }, "Arbitrum":{
        chainId: "0xa4b1", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        chainName: "Arbitrum  Mainnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://arbiscan.io'],
        iconUrls: ['']
      }, "Optimism":{
        chainId: "0xa", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://mainnet.optimism.io'],
        chainName: "Optimism  Mainnet",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://optimistic.etherscan.io'],
        iconUrls: ['']
      },

    





   
}

export const network = {
  "0x118":"Zksync-testnet",
  "0xFA2":"Fantom-testnet",
  "0x507":"Moonbase-alpha",
  "0xA869":"Fuji",
  "0x1389":"Mantle",
  "0x5":"Goerli",
  "0x61":"Bsc-testnet",
  "0x13881":"Mumbai",
  "0x82750":"Scroll",
  "0x14A33":"Base",
  "0xA704":"Linea",
  "0x58A":"Zkevm-testnet",

  // MAinnets
  "0x1":"Ethereum",
  "0x38":"Bsc",
  "0x89":"Polygon",
  "0xfa":"Fantom",
  "0x504":"Moonbeam",
  "0x144":"Zksync",
  "0x44d":"ZkEVM",
  "0x000A":"Optimism",
  "0xA4B1":"Arbitrum",
  "0xA86A":"Avalanche",
  "0xa4b1": "Arbitrum",
  "0xa"   :"Optimism"

}




export const tokenContracts = {
  "Goerli":"0x1392c0654fe80bc8907AB4449f736757d088f150",
  "Sepolia":"0xcAE41c8bc205760c4Ec40Be4E6558F886aa14321",
  "Base-testnet":"",
  "Scroll":"",
  "Moonbeam-alpha":"",
  "Fantom-testnet":"",
  "Linea-testnet":"",
  "Zkevm-testnet":"",
  "Mumbai":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Bsc-testnet":"",
  "Zksync-testnet":"",
  "Fuji":"",
  
  // MAinnets
  "Ethereum":"",
  "Bsc":"",
  "Polygon":"",
  "Fantom":"",
  "Moonbeam":"",
  "Zksync":"",
  "ZkEVM":"",
  "Optimism":"",
  "Arbitrum":"",
  "Avalanche":"",
  "Linea":"",
  "Base":"",
  "Mantle":""
}

export const nftContracts = {
  "Goerli":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Sepolia":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Base-testnet":"",
  "Scroll-testnet":"",
  "Moonbeam-alpha":"",
  "Fantom-testnet":"",
  "Linea-testnet":"",
  "Zkevm-testnet":"",
  "Mumbai":"0xbcFF3e7AB2641A4751DFD4FdD9c330E8B261D8C7",
  "Bsc-testnet":"",
  "Zksync-testnet":"",
  "Fuji":"",
  "arbitrum-goerli":"",
  "optimism-goerli":"",
  
  // MAinnets
  "Ethereum":"",
  "Bsc":"",
  "Polygon":"",
  "Fantom":"",
  "Moonbeam":"",
  "Zksync":"",
  "ZkEVM":"",
  "Optimism":"",
  "Arbitrum":"",
  "Avalanche":"",
  "Linea":"",
  "Base":"",
  "Mantle":""
}



export const tokenClaim = {
  "Goerli":"0x102b91388712c45937d25691BbB048A192419020",
  "Sepolia":"",
  "Base-testnet":"",
  "Scroll-testnet":"",
  "Moonbeam-alpha":"",
  "Fantom-testnet":"",
  "Linea-testnet":"",
  "Zkevm-testnet":"",
  "Mumbai":"",
  "Bsc-testnet":"",
  "Zksync-testnet":"",
  "Fuji":"",
  "arbitrum-goerli":"",
  "optimism-goerli":"",
  
  // MAinnets
  "Ethereum":"",
  "Bsc":"",
  "Polygon":"",
  "Fantom":"",
  "Moonbeam":"",
  "Zksync":"",
  "ZkEVM":"",
  "Optimism":"",
  "Arbitrum":"",
  "Avalanche":"",
  "Linea":"",
  "Base":"",
  "Mantle":""
}

//0x102b91388712c45937d25691BbB048A192419020

export const chainIds = {
  "Goerli":           10121,
  "Bsc-testnet":      10102,
  "Fuji":             10106,
  "Mumbai":           10109,
  "Arbitrum-goerli":  10143,
  "Optimism-goerli":  10132,
  "Fantom-testnet":   10112,
  "Meter-testnet":    10156,
  "Zksync-testnet":   10165,
  "Scroll"        :   10170,
  "Linea-testnet"  :  10157,
  "Sepolia"        :  10161,
  "Zkevm-testnet"  :  10158,
  "Base-testnet"   :  10160,
  "Moonbeam-alpha" :  10126,

  // MAinnets 

    // MAinnets
    "Ethereum":101,
    "Bsc":102,
    "Polygon":109,
    "Fantom":112,
    "Moonbeam":126,
    "Zksync":165,
    "ZkEVM":158,
    "Optimism":111,
    "Arbitrum":175,
    "Avalanche":"",
    "Linea":183,
    "Mantle":181,
    "Base":184

}