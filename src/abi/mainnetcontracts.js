

export const mainnetRoutes  = {
    "Bsc":["Polygon","Avalanche","Fantom","Moonbeam","Core"],
    "Polygon":["Bsc","Avalanche","Fantom","Moonbeam","Core"],
    "Avalanche":["Bsc","Polygon","Fantom","Moonbeam","Core"],
    "Fantom":["Bsc","Polygon","Avalanche","Moonbeam","Core",],
    "Moonbeam":["Bsc","Polygon","Avalanche","Fantom"],
    "Core":["Bsc","Polygon"],
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
        imageSrc: './blockchainlogos/zksync.png', // Replace with your image file path
      },{
        id: 13,
        name: 'Optimism',
        imageSrc: './blockchainlogos/zksync.png', // Replace with your image file path
      },
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
export const  mainnet_present_object = {
    "Bsc": {
      id: 2,
      name: 'Bsc',
      imageSrc: './blockchainlogos/binance.png', // Replace with your image file path
    },'Polygon':{
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
    
    // "Arbitrum":{
    //   id: 12,
    //   name: 'Arbitrum',
    //   imageSrc: './blockchainlogos/zksync.png', // Replace with your image file path
    // },"Optimism":{
    //   id: 13,
    //   name: 'Optimism',
    //   imageSrc: './blockchainlogos/zksync.png', // Replace with your image file path
    // },
  }

