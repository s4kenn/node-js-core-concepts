const express = require('express')


const app = express()

// It will run everytime and we need to call next middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log('this first middleware will run on every request');
    next()
};


app.use(myFirstMiddleware);

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/about', (req, res) => {
    res.send('About page')
})


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})