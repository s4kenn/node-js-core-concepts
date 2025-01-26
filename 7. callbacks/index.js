
const fs = require('fs')

function person(name, callBackFn) {
    console.log(`Hello ${name}`);
    callBackFn()
}

function address() {
    console.log('India');
}

person('Aditya Singh', address)

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file ', err);
        return
    }
    console.log(data);
})