const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectToDB = require('./database/db.js')
const bookRoutes = require('./routes/book-routes.js')

dotenv.config()

connectToDB()

// middleware -> to parse my json data
app.use(express.json())

// routes here
app.use('/api/books', bookRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})