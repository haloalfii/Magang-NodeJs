const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you? = ', name => {
    console.log(`Hey there ${name}!`);
    const encryptedString = cryptr.encrypt(name);
    const decryptedString = cryptr.decrypt(encryptedString);
 
    console.log(encryptedString); 
    console.log(decryptedString);
    readline.close();
});