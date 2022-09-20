require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture story rate saddle proud grace office army gather'; 
let testAccounts = [
"0x8860e2a9c9ebc994d7fb71a0dfdb02d687fd32f31c27d10ca7d420fc231d2c2b",
"0x0fa9bf9cd7318315fa1bcdd0d7b7cf3a191f3b1a50949ed5f0ffdbfa853b638a",
"0x3d2de41dbc0beecc8255af0487b61ef217617bc9ccc7ea165d0761164d353f7d",
"0x8a4fc0daaca286780aab58b5871d1a967e0fd59b9a041b2f0e47b960118e1de5",
"0xec0269c7445d7df4c4c32836ce2b15e5687da531e0db6c5fe0e6fd5445d72360",
"0x31544ef52f6a1d3cfa7c6d8e3ceb3e9a3343f69c3d5977cece2ce7411c77b7ee",
"0x91f4cc084bf30d457f5e63a2ab7b0eef0eddc08926320a7c55e3eda86b8e4361",
"0x5174bff33f3527621cdfe3b7df39c060f4fdce93f6a623e7a5ad141a17358487",
"0x882babe882d84be58080500e05ad3a7dfe1ef2b1a75cc36d7283aa9f7afe416f",
"0x0bb6baba4c0b4f26dbf0173893baa7719d68fff7be7ed0b9d4e4013ccb5525aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

