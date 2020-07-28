const Cryptr = require('cryptr');
var moment = require("moment");

const cryptr = new Cryptr('myTotalySecretKey');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question ('Input Random Number = ' , number =>{
    console.log('Ur Input Number is = ' + number)

    if (number > 5){
        const encryptedString = cryptr.encrypt(number);
        const decryptedString = cryptr.decrypt(encryptedString);
 
        console.log(encryptedString); 
        console.log(decryptedString);
        readline.close();
    }

    else {
        console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
        readline.close();
    }
});

