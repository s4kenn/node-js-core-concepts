const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder)
    console.log("Data folder created");
}

const filePath = path.join(dataFolder, "example.txt")
// sync way of creating the file
fs.writeFileSync(filePath, "Hello from Node.js");

const readContentFromFile = fs.readFileSync(filePath, 'utf8')
console.log(readContentFromFile);

fs.appendFileSync(filePath, '\n This is a new line')

const asyncFilePath = path.join(dataFolder, "async.txt");
fs.writeFile(asyncFilePath, "Async Example", (err) => {
    if (err) { throw err }
    else {
        console.log("File created");

    }
})

fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data);

    fs.appendFile(asyncFilePath, "\nAnother line added", (err) => {
        if (err) throw err
        console.log("New line added")
    })

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if (err) throw err
        console.log(data);
    })

})

