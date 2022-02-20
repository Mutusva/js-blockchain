const {Blockchain, Transaction} =  require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('0be2ea23f1b10ef33dac37dc1a07888acaf787d0938eb2c8b9f28e4b71cb882a');
const walletAddress = myKey.getPublic('hex');

let innoCoin = new Blockchain();


const tx1 = new Transaction(walletAddress, "someone's wallet address", 20);
tx1.signTransaction(myKey);
innoCoin.addTransaction(tx1)


console.log('\n Starting the miner...')
innoCoin.minePendingTransactions(walletAddress);
console.log('\nBalance of inno is ', innoCoin.getBalanceOfAddress(walletAddress))

/*
console.log('Mining block 1.....')
innoCoin.addBlock(new Block(1,"18/02/2022", {amount: 4}))
console.log('Mining block 2.....')
innoCoin.addBlock(new Block(2,"19/02/2022", {amount: 10}))
*/

// console.log(JSON.stringify(innoCoin,null,4))

