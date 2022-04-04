
/*
export const ABI =[{"anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" } ], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "address", "name": "_signer", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "_hash", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "digest", "type": "bytes32" }, { "internalType": "bytes", "name": "signature", "type": "bytes" } ], "name": "_verify", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "ADDR_DAO", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ADDR_LP", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ADDR_STAKING", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "AMOUNT_AIREDROP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "AMOUNT_DAO", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "AMOUNT_LP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "AMOUNT_STAKING", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cSigner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_SUPPLY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINT_CALL_HASH_TYPE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "minted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }];

export const contract = "0xA61F3a4387471C4cd5Cda126337aA1389551210e";

export const signs = [{'addr':'0x44857e863dFFf1f992F644e75b0f3B6fF88311f9','sign':'0x21c09b634def0f2808e5442e985512919e39d2372622c4943212c8997f86c8712e3fa22d3f780f032dfc793dddf5890a263c6f7ef3ab2d4f5918729fb7e21f6f1b','amt':'100000000000000000000'},
{'addr':'0x32d7cE8AeE6B063367826A0c4aa0D27D69977e48','sign':'0xaf04a3d2bc0d4075586bdb44cc9d0d134b139ed0cc35da04ea4d73b82c3b33ff2ec4b53274c67d9b7fb8fd73aa60828d63ee90d2e4e07373d12685a917c7479e1b','amt':'100000000000000000000'},
{'addr':'0x947a07AE1df7F65333592C5b7c2aace87a556b45','sign':'0xc6929310044ddfdf861d2d07ded33e627095ca2904d2df00abb6bdb50a1c37ac398904f5cd73c89c4a475f7d2d7b09d3859943ffa14e17fef8942b16a381411d1c','amt':'200000000000000000000'}];
*/
export const contract = "0x2Ec375FBc1d252786Baab3a3dfdD95a8611B89Cf";

export const signs = 
[{'addr':'0x44857e863dFFf1f992F644e75b0f3B6fF88311f9','sign':'0x6a6e3a864d24a8a630395d2f2cd54b1cb7da1f2b8af478bf98685a5fdf3751275c9611c9d3531f629996e51f2980f2d11ffed87dfd9a280cce8b10448a7cf6871c','amt':'100000000000000000000'},
{'addr':'0x32d7cE8AeE6B063367826A0c4aa0D27D69977e48','sign':'0x2970a0492773d2d746a71818053a75eae810eb5cf0789673078b35c688f6e620599e06c06c26b0cd887ae7b8719bbc7a8f81664c7d7c1df4ed152b7a0d7328811c','amt':'100000000000000000000'},
{'addr':'0x947a07AE1df7F65333592C5b7c2aace87a556b45','sign':'0x6c2a943c8a013ac664deb813dc0cb3cf2c4e8da63739081d2194af5215d23b775ca094091a869ed96381fe8ec9907b4540abc360660137d8d42569738031781b1c','amt':'200000000000000000000'},
{'addr':'0xdC4ECB6276d3DB1942EE13AAeaAb126c3e1993AD','sign':'0x151b4cff04e2a654f545a41819b04e19eeb83d495e66d64c310ed32ca46d3ce51f5c94a0fbf8d39f7d2644072203ed5f0c59054a6658f63b805b8875f397a0481b','amt':'300000000000000000000'}];
export const ABI = [
    "constructor(string,string,address)",
    "event Approval(address indexed,address indexed,uint256)",
    "event Transfer(address indexed,address indexed,uint256)",
    "function ADDR_DAO() view returns (address)",
    "function ADDR_LP() view returns (address)",
    "function ADDR_STAKING() view returns (address)",
    "function AMOUNT_AIREDROP() view returns (uint256)",
    "function AMOUNT_DAO() view returns (uint256)",
    "function AMOUNT_LP() view returns (uint256)",
    "function AMOUNT_STAKING() view returns (uint256)",
    "function MAX_SUPPLY() view returns (uint256)",
    "function MINT_CALL_HASH_TYPE() view returns (bytes32)",
    "function _hash(address,uint256) view returns (bytes32)",
    "function _verify(bytes32,bytes) pure returns (address)",
    "function allowance(address,address) view returns (uint256)",
    "function approve(address,uint256) returns (bool)",
    "function balanceOf(address) view returns (uint256)",
    "function cSigner() view returns (address)",
    "function claim(uint256,bytes)",
    "function decimals() view returns (uint8)",
    "function decreaseAllowance(address,uint256) returns (bool)",
    "function increaseAllowance(address,uint256) returns (bool)",
    "function minted(address) view returns (uint256)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function transfer(address,uint256) returns (bool)",
    "function transferFrom(address,address,uint256) returns (bool)"
  ];
  