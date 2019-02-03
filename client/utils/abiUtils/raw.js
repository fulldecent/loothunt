const raw = [
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrder',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'salt',
        type: 'uint256',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'signedExchangeTransaction',
        type: 'bytes',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'executeTransaction',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "takerAssetData",
        "type": "bytes"
      },
      {
        "name": "signerAddress",
        "type": "address"
      }
    ],
    "name": "getRequirementsAchieved",
    "outputs": [
      {
        "name": "requirementsAchieved",
        "type": "bool[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
]

export default raw
