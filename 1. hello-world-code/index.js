console.log("Hello js");

const arr = [1, 2, 3, 4]


setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
    console.log(arr);
}, 2000)

console.log("Last line of synchronous code");


// node index.js
