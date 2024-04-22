

export const mainnetRoutes  = {
    "Bsc":["Polygon","Avalanche","Fantom","Base","Moonbeam","Core","Arbitrum","Optimism","Mantle","Metis","Linea"],
    "Polygon":["Bsc","Avalanche","Fantom","Base","Moonbeam","Arbitrum","Optimism","Core","Mantle","Metis","Linea"],
    "Avalanche":["Bsc","Polygon","Fantom","Moonbeam","Core","Arbitrum","Optimism","Base","Mantle","Metis","Linea"],
    "Fantom":["Bsc","Polygon","Avalanche","Moonbeam","Core","Arbitrum","Optimism","Base","Mantle","Metis","Linea"],
    "Optimism":["Bsc","Polygon","Base","Avalanche","Fantom","Arbitrum","Moonbeam","Base","Linea"],
    "Arbitrum":["Bsc","Polygon","Avalanche","Fantom","Optimism","Moonbeam","Base","Linea"],
    "Moonbeam":["Bsc","Polygon","Avalanche","Fantom","Linea"],
    "Core":["Bsc","Polygon"],
    "Base":["Bsc","Polygon","Optimism","Arbitrum","Moonbeam","Linea"],
    "Tenet":["Bsc","Polygon","Fantom","Avalanche","Linea"],
    "Mantle":["Bsc","Polygon","Fantom","Avalanche"],
    "Metis":["Bsc","Polygon","Fantom","Avalanche"],
    "Linea": ["Bsc","Polygon","Avalanche","Fantom","Base","Moonbeam","Core","Arbitrum","Optimism","Tenet"],

}


 const optionsMainnet = [
    {
      id: 1,
      name: 'Ethereum',
      imageSrc: './blockchainlogos/ethereum.png', // Replace with your image file path
      color:'pink'
    },
    {
      id: 2,
      name: 'Bsc',
      imageSrc: './blockchainlogos/binance.png', // Replace with your image file path
    },
    {
        id: 3,
        name: 'Polygon',
        imageSrc: './blockchainlogos/polygonmatic.png', // Replace with your image file path
      },
      {
        id: 4,
        name: 'Avalanche',
        imageSrc: './blockchainlogos/avax.png', // Replace with your image file path
      }, {
        id: 5,
        name: 'Fantom',
        imageSrc: './blockchainlogos/fantom.png', // Replace with your image file path
      },
      {
        id: 6,
        name: 'Base',
        imageSrc: './blockchainlogos/base.png', // Replace with your image file path
      }, {
        id: 7,
        name: 'Linea',
        imageSrc: './blockchainlogos/linea.png', // Replace with your image file path
      },
      {
        id: 8,
        name: 'zkEvm',
        imageSrc: './blockchainlogos/polygonmatic.png', // Replace with your image file path
      }, {
        id: 9,
        name: 'Moonbeam',
        imageSrc: './blockchainlogos/moonbeam.png', // Replace with your image file path
      }, {
        id: 10,
        name: 'Scroll',
        imageSrc: './blockchainlogos/scroll.png', // Replace with your image file path
      },{
        id: 11,
        name: 'zkSync',
        imageSrc: './blockchainlogos/zksync.png', // Replace with your image file path
      },{
        id: 12,
        name: 'Arbitrum',
        imageSrc: './blockchainlogos/arbitrum.png', // Replace with your image file path
      },{
        id: 13,
        name: 'Optimism',
        imageSrc: './blockchainlogos/op.png', // Replace with your image file path
      },
      {
        id:14,
        name:"Sepolia",
        imageSrc:"./blockchainlogos/ethereum.png"
      }
  ];
export const present_mainnet = [
    {
        id: 2,
        name: 'Bsc',
        imageSrc: './blockchainlogos/binance.png', // Replace with your image file path
      },
      {
          id: 3,
          name: 'Polygon',
          imageSrc: './blockchainlogos/polygonmatic.png', // Replace with your image file path
        },
        {
          id: 4,
          name: 'Avalanche',
          imageSrc: './blockchainlogos/avax.png', // Replace with your image file path
        },{
          id: 5,
          name: 'Fantom',
          imageSrc: './blockchainlogos/fantom.png', // Replace with your image file path
        }, {
          id: 9,
          name: 'Moonbeam',
          imageSrc: './blockchainlogos/moonbeam.png', // Replace with your image file path
        },
        {
          id: 12,
          name: 'Arbitrum',
          imageSrc: './blockchainlogos/arbitrum.png', // Replace with your image file path
        },{
          id: 13,
          name: 'Optimism',
          imageSrc: './blockchainlogos/op.png', // Replace with your image file path
        },
        {
          id: 14,
          name: 'Core',
          imageSrc: './blockchainlogos/core.png', // Replace with your image file path
        },
        {
          id: 6,
          name: 'Base',
          imageSrc: './blockchainlogos/base.png', // Replace with your image file path
        },{
          id: 16,
          name: 'Mantle',
          imageSrc: './blockchainlogos/Mantle-logo.jpg', // Replace with your image file path
        }
        
        ,{
          id:15,
          name:"Tenet",
          imageSrc:"./blockchainlogos/tenet.jpg"
        },{
          id: 17,
              name: 'Metis',
              imageSrc: './blockchainlogos/metis.png', // Replace with your image file path
        },
        {
          id: 18,
              name: 'Linea',
              imageSrc: './blockchainlogos/linea.png', // Replace with your image file path
        }
    
    

    ]
export const  mainnet_present_object = {
    "Bsc": {
      id: 2,
      name: 'Bsc',
      imageSrc: './blockchainlogos/binance.png', // Replace with your image file path
    },"Polygon":{
      id: 3,
      name: 'Polygon',
      imageSrc: './blockchainlogos/polygonmatic.png', // Replace with your image file path
    },
    "Avalanche":{
      id: 4,
      name: 'Avalanche',
      imageSrc: './blockchainlogos/avax.png', // Replace with your image file path
    },"Fantom":{
      id: 5,
      name: 'Fantom',
      imageSrc: './blockchainlogos/fantom.png', // Replace with your image file path
    }, "Moonbeam":{
      id: 9,
      name: 'Moonbeam',
      imageSrc: './blockchainlogos/moonbeam.png', // Replace with your image file path
    },"Core":{
      id: 14,
      name: 'Core',
      imageSrc: './blockchainlogos/core.png', // Replace with your image file path
    },
    "Arbitrum":{
      id: 12,
      name: 'Arbitrum',
      imageSrc: './blockchainlogos/arbitrum.png', // Replace with your image file path
    },"Optimism":{
      id: 13,
      name: 'Optimism',
      imageSrc: './blockchainlogos/op.png', // Replace with your image file path
    },"sepolia":{
      id:14,
      name:"Sepolia",
      imageSrc:"./blockchainlogos/ethereum.png"
    },"Base":
    {
      id: 6,
      name: 'Base',
      imageSrc: './blockchainlogos/base.png', // Replace with your image file path
    },
    "Tenet":{
      id:15,
      name:"Tenet",
      imageSrc:"./blockchainlogos/tenet.jpg"
    },"Mantle":{
      id: 16,
          name: 'Mantle',
          imageSrc: './blockchainlogos/Mantle-logo.jpg', // Replace with your image file path
    },"Metis":{
      id: 17,
          name: 'Metis',
          imageSrc: './blockchainlogos/metis.png', // Replace with your image file path
    },"Linea":{
      id: 18,
          name: 'Linea',
          imageSrc: './blockchainlogos/linea.png', // Replace with your image file path
    }
  }

  export const present_Tokens_mainnet = [
    {
        id: 2,
        name: 'Bsc',
        imageSrc: './blockchainlogos/binance.png', // Replace with your image file path
      },
      {
          id: 3,
          name: 'Polygon',
          imageSrc: './blockchainlogos/polygonmatic.png', // Replace with your image file path
        },
        {
          id: 4,
          name: 'Avalanche',
          imageSrc: './blockchainlogos/avax.png', // Replace with your image file path
        },{
          id: 5,
          name: 'Fantom',
          imageSrc: './blockchainlogos/fantom.png', // Replace with your image file path
        }, {
          id: 9,
          name: 'Moonbeam',
          imageSrc: './blockchainlogos/moonbeam.png', // Replace with your image file path
        },
        // {
        //   id: 12,
        //   name: 'Arbitrum',
        //   imageSrc: './blockchainlogos/arbitrum.png', // Replace with your image file path
        // },{
        //   id: 13,
        //   name: 'Optimism',
        //   imageSrc: './blockchainlogos/op.png', // Replace with your image file path
        // },
        {
          id: 14,
          name: 'Core',
          imageSrc: './blockchainlogos/core.png', // Replace with your image file path
        },

    ]
