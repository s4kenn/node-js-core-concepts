const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectToDB = async () => {
    try {
        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9yny4.mongodb.net/book-store`)
        console.log(`MongoDB is connected successfully`);
    } catch (error) {
        console.log("MongoDB connection failed ", error.message);
        process.exit(1)
    }
}

module.exports = connectToDB