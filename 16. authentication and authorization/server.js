const dotenv = require('dotenv')
const express = require('express')
const connectToDB = require('./database/index.js')
const AuthRoutes = require('./routes/auth-routes.js')
const HomeRoutes = require('./routes/home-routes.js')
const AdminRoutes = require('./routes/admin-routes.js')


dotenv.config()

const app = express()
app.use(express.json())
connectToDB()

app.use('/api/auth', AuthRoutes)
app.use('/api/home', HomeRoutes)
app.use('/api/admin', AdminRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server started on port number ${PORT}`);
})