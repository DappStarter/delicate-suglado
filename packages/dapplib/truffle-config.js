require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind huge guess glide flip test'; 
let testAccounts = [
"0xce4175ec96be17ae9b2dfdbec575609bffdf48603021a454ec0f128b688fd23f",
"0xfa3c1b959f31342a3a867c778548ff80d179984b2dc0add65dc579204e41a89b",
"0x9a4166c280a9c8be31816baf0e2625224683533a747f71e7fc5288593e411372",
"0x7feada2618ac2f7a1662350c773bbbac093ce2be7b3f6cf6aa52c7f7f5b0fb31",
"0x1b7930c347aebd4485f72cb005fbafe38342f2b3325e10030ec6a58223ab3210",
"0x78734722b0fbae49957520a8d3b5993578f1007c27cebaef87da243eddd6023d",
"0xe0743a204e9b92315861090bf0c868b55bb2327411e16a94f739c2a8273eca2a",
"0x949e6bab06756515895bd94cf9006afe272de2db372ea402f58bb167e98b6bdf",
"0xd0e67fc2703fb4f6004b015300827b28d9d26018de61ba508641d64667abee17",
"0xa90d2048d1bce30059466384edd052e614b8dc18dfefaae7b2df9da1e21d07ec"
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
            version: '^0.5.11'
        }
    }
};
