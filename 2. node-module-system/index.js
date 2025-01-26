// index.js is our root file of 2. node-module-system

// module.exports -> Similar to export (from commonJS)
// require -> Similar to import (from commonJS)

const firstModule = require('./first-module')
console.log(firstModule.add(2, 3));
console.log(firstModule.sub(5, 2));
try {
    console.log(firstModule.divide(20, 0));
} catch (error) {
    console.log("Caught error", error.message)
}

// module wrapper
// (
//     function(exports,require,module,__filename,__dirname){
//         // module code goes here
//     }
// )

