const express = require('express')
const app = express()

const requestTimeStampLogger = (req, res, next) => {
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(requestTimeStampLogger)

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/about', (req, res) => {
    res.send('About page')
})


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})
