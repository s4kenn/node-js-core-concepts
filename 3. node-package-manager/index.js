const lodash = require("lodash")

const names = ["aditya", "ankur", "cristiano"]

const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize);
