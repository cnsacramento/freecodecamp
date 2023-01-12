const fs = require('fs');

const promise = new Promise( (resolve, reject) => {
    try {
        fs.writeFileSync('promise.example.html', '<h1>Promise example</h1>');
        resolve('File correctly written');
    } catch(err) {
        reject(err);
    }
});

/*
promise.then(() => console.log('File correctly written.'))
    .catch(err => console.log(err));
*/

function shouldIorderThePc() {
    return Math.random() < 0.8;
}

const pcOrder = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(shouldIorderThePc()) {
            resolve('Your order is on the way')
        } else {
            reject('An error has ocurred, try it again')
        }
    }, 1000);

});


pcOrder
    .then((confirmationMessage) => console.log(confirmationMessage))
    .then(null, (errorMessage) => console.log(errorMessage));

// This is a simplify way if you don't want to write null
pcOrder
    .then((confirmationMessage) => console.log(confirmationMessage))
    .catch((errorMessage) => console.log(errorMessage));
    
/*
async function writeAndOrder() {

    try {  
        const writeResponse = await promise();
        console.log(writeResponse);
        const orderResponse = await pcOrder();
        console.log(orderResponse); 
    } catch(err) {
        console.log(err);
    }

}
*/