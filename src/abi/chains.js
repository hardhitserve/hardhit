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
      },"Base-testnet":{
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
      },"Sepolia":{
        chainId: "0xaa36a7", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://sepolia.infura.io/v3/'],
        chainName: "Sepolia",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://sepolia.etherscan.io'],
        iconUrls: ['']
      },"Optimism-testnet":{
        chainId: "0x1a4", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://optimism-goerli.publicnode.com'],
        chainName: "Optimism Goerli",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://optimism.io'],
        iconUrls: ['']
      },"Arbitrum-testnet":{
        chainId: "0x66eed", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://arbitrum-goerli.publicnode.com	'],
        chainName: "Arbitrum Goerli",
        nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://goerli.arbiscan.io/'],
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
      },"Avalanche":{
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
      }, "Core":{
        chainId: "0x45c", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://rpc.coredao.org'],
        chainName: "Core DAO",
        nativeCurrency: { name: "CORE", decimals: 18, symbol: "CORE" },
        blockExplorerUrls: ['https://scan.coredao.org'],
        iconUrls: ['']
      },"Base":{
        chainId: "0x2105", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://developer-access-mainnet.base.org'],
        chainName: "Base Mainnet",
        nativeCurrency: { name: "BASE", decimals: 18, symbol: "ETH" },
        blockExplorerUrls: ['https://basescan.org'],
        iconUrls: ['']
      },"Tenet":{
        chainId: "0x617", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://rpc.tenet.org'],
        chainName: "Tenet Mainnet",
        nativeCurrency: { name: "TENET", decimals: 18, symbol: "TNT" },
        blockExplorerUrls: ['https://tenetscan.io'],
        iconUrls: ['']
      },"Mantle":{
        chainId: "0x1388", //"0x118":"Zksync-Testnet"
        rpcUrls: ['https://rpc.mantle.xyz'],
        chainName: "Mantle Mainnet",
        nativeCurrency: { name: "MNT", decimals: 18, symbol: "MNT" },
        blockExplorerUrls: ['https://explorer.mantle.xyz'],
        iconUrls: ['']
      }

}

export const network = {
  "0x118":"Zksync-testnet",
  "0xFA2":"Fantom-testnet",
  "0x507":"Moonbase-alpha",
  "0xA869":"Fuji",

  "0x5":"Goerli",
  "0x61":"Bsc-testnet",
  "0x13881":"Mumbai",
  "0x82750":"Scroll",
  "0x14A33":"Base-testnet",
  "0xE704":"Linea-testnet",
  "0x58A":"Zkevm-testnet",
  "0xAA36A7" : "Sepolia",
  "0x1389" : "Mantle-testnet",
  "0x66EED":"Arbitrum-testnet",
  "0x1A4":"Optimism-testnet",

  // MAinnets
  "0x1":"Ethereum",
  "0x38":"Bsc",
  "0x89":"Polygon",
  "0xFA":"Fantom",
  "0x504":"Moonbeam",
  "0x144":"Zksync",
  "0x44D":"ZkEVM",
  "0x000A":"Optimism",
  "0xA4B1":"Arbitrum",
  "0xA86A":"Avalanche",
  "0xA4b1": "Arbitrum",
  "0xA"   :"Optimism",
  "0x45C":"Core",
  "0x2105":"Base",
  "0x617":"Tenet"
}

export const endpointContracts = {
  "Ethereum": "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675",
  "Bsc": "0x3c2269811836af69497E5F486A85D7316753cf62",
  "Avalanche": "0x3c2269811836af69497E5F486A85D7316753cf62",
  "Polygon": "0x3c2269811836af69497E5F486A85D7316753cf62",
  "Arbitrum": "0x3c2269811836af69497E5F486A85D7316753cf62",
  "Optimism": "0x3c2269811836af69497E5F486A85D7316753cf62",
  "Fantom": "0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7",
  "Base" :"0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7",
  "zkSync":"0x9b896c0e23220469C7AE69cb4BbAE391eAa4C8da",
  "zkEvm":"0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4",
  "Moonbeam":"0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4",
  "Mantle":"0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7",
  "Moonriver":"0x7004396C99D5690da76A7C59057C5f3A53e01704",
  "Core":"0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4",
  "Tenet":"0x2D61DCDD36F10b22176E0433B86F74567d529aAa",
  

  "Goerli": "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23",
  "Bsc-testnet": "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1",
  "Fuji": "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706",
  "Mumbai": "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
  "Arbitrum-testnet": "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
  "Optimism-goerli": "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
  "Fantom-testnet": "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
  "Meter-testnet": "0x3De2f3D1Ac59F18159ebCB422322Cb209BA96aAD",
  "Zksync-testnet": "0x093D2CF57f764f09C3c2Ac58a42A2601B8C79281",
  "Scroll-testnet"        :"0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
  "Polygon-zkevm" :"0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
  "Linea-testnet"         : "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
  "Base-testnet"           : "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
  "Sepolia"       : "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
  "Moonbeam-alpha": "0xb23b28012ee92E8dE39DEb57Af31722223034747",
  "Mantle-testnet":"0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe"
}

export const tokenContracts = {
  "Goerli":"0x1392c0654fe80bc8907AB4449f736757d088f150",
  "Sepolia":"0xcAE41c8bc205760c4Ec40Be4E6558F886aa14321",
  "Base-testnet":"0x2Dee1be6401fDf69c4e6E81E1084c5b60A522b63",
  "Scroll":"",
  "Moonbeam-alpha":"",
  "Fantom-testnet":"",
  "Linea-testnet":"0x2D489193a9D52E984f983474fE868CCdB0647219",
  "Zkevm-testnet":"",
  "Mumbai":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Bsc-testnet":"0x0b8226e3cC0c382631FC7e30D9929fa8bad3Ede4",
  "Zksync-testnet":"",
  "Fuji":"",
  "Mantle-testnet":"0x6b63b9e6e2984C5365E90Af5Fc09A208468d370E",
  "Optimism-testnet":"0x28EA9313c0074620345F819e4aB08d561628cA94",
  "Arbitrum-testnet":"0x1392c0654fe80bc8907AB4449f736757d088f150",
  
  // MAinnets
  "Ethereum":"",
  "Bsc":"0xB194174A33398A3db3972c06a6AFc81f479C41e5",
  "Polygon":"0xB194174A33398A3db3972c06a6AFc81f479C41e5",
  "Fantom":"0xF20c24cF9AA452c4f29CCE38F5EaE0bc9Ae8AaC3",
  "Moonbeam":"0x78d43c740c3cD978b708C5104231A236B72A0087",
  "Zksync":"",
  "ZkEVM":"",
  "Optimism":"",
  "Arbitrum":"",
  "Avalanche":"0xF20c24cF9AA452c4f29CCE38F5EaE0bc9Ae8AaC3",
  "Linea":"",
  "Base":"",
  "Mantle":"",
  "Core":"0x79FbAa67A7E8f59356e5CED082DCd93769F3B8F0"
}

export const nftContracts = {
  "Goerli":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Sepolia":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Base-testnet":"0xA129eA27A62783550c113D38eD4abC72347ADB1C",
  "Scroll-testnet":"",
  "Moonbeam-alpha":"",
  "Fantom-testnet":"",
  "Linea-testnet":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Zkevm-testnet":"",
  "Mumbai":"0xbcFF3e7AB2641A4751DFD4FdD9c330E8B261D8C7",
  "Bsc-testnet":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Zksync-testnet":"",
  "Fuji":"",
  "Arbitrum-testnet":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Optimism-testnet":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Mantle-testnet":"0x79FbAa67A7E8f59356e5CED082DCd93769F3B8F0",
  
  // MAinnets
  "Ethereum":"",
  "Bsc":"0x6b63b9e6e2984C5365E90Af5Fc09A208468d370E",
  "Polygon":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Fantom":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Moonbeam":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Zksync":"",
  "ZkEVM":"",
  "Optimism":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Arbitrum":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Avalanche":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Linea":"",
  "Base":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Mantle":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Core":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd",
  "Tenet":"0xcdF79E85a5e8FFd8D93def3D3c7580B8aB8870cd"
  
}



export const tokenClaim = {
  "Goerli":"0x102b91388712c45937d25691BbB048A192419020",
  "Sepolia":"0xb5715948b5dBf8e5750f65a4C8928925B3DF4938",
  "Base-testnet":"",
  "Scroll-testnet":"",
  "Moonbeam-alpha":"",
  "Fantom-testnet":"",
  "Linea-testnet":"0xcAE41c8bc205760c4Ec40Be4E6558F886aa14321",
  "Zkevm-testnet":"",
  "Mumbai":"0x79fe3bF6E6906df1E03BCD59F864C79e5Ca34214",
  "Bsc-testnet":"0x89D7c46a1C302F9303Cc0A0BC02239beaB6DD106",
  "Zksync-testnet":"",
  "Fuji":"",
  "Arbitrum-testnet":"0x89D7c46a1C302F9303Cc0A0BC02239beaB6DD106",
  "Optimism-testnet":"0x3cB317cdBC4b36EEf3c380C5D550CbD990b4753D",
  "Mantle-testnet":"0xcAE41c8bc205760c4Ec40Be4E6558F886aa14321",
  
  // MAinnets
  "Ethereum":"",
  "Bsc":"0xe29A61754f9dAA767fD03987652A03B583e19fa2",
  "Polygon":"0xe29A61754f9dAA767fD03987652A03B583e19fa2",
  "Fantom":"0x9f19006FECfE418De493Daa918c50645925EB214",
  "Moonbeam":"0xB194174A33398A3db3972c06a6AFc81f479C41e5",
  "Zksync":"",
  "ZkEVM":"",
  "Optimism":"",
  "Arbitrum":"",
  "Avalanche":"0x9f19006FECfE418De493Daa918c50645925EB214",
  "Linea":"",
  "Base":"",
  "Mantle":"",
  "Core":"0x7Be8D8116De8d57D69BedCBFF5Cf0d4c9ae0A8Ed"
}

//0x102b91388712c45937d25691BbB048A192419020

export const chainIds = {
  "Goerli":           10121,
  "Bsc-testnet":      10102,
  "Fuji":             10106,
  "Mumbai":           10109,
  "Arbitrum-testnet":  10143,
  "Optimism-testnet":  10132,
  "Fantom-testnet":   10112,
  "Meter-testnet":    10156,
  "Zksync-testnet":   10165,
  "Scroll"        :   10170,
  "Linea-testnet"  :  10157,
  "Sepolia"        :  10161,
  "Zkevm-testnet"  :  10158,
  "Base-testnet"   :  10160,
  "Moonbeam-alpha" :  10126,
  "Mantle-testnet": 10181,

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
    "Avalanche":106,
    "Linea":183,
    "Mantle":181,
    "Base":184,
  "Moonriver":        167,
  "Core" :            153,
  "Tenet":173


}
