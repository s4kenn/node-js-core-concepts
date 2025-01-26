// provides utilities to work with file and directory paths

const { log } = require('console');
const path = require('path')

console.log('Directory name is ', __dirname);
console.log('Directory name is ', path.dirname(__filename));

console.log('File name is ', __filename);
console.log('File name is ', path.basename(__filename));

console.log('File extension is ', path.extname(__filename));

const joinPath = path.join('/user', 'documents', 'node', 'projects')
console.log(joinPath);


// Check whether this path exists or not
const resolvePath = path.resolve('user', 'documents', 'node', 'projects')
console.log(resolvePath);


const normalizePath = path.normalize("/user/documents/../node/projects")
console.log(normalizePath);
