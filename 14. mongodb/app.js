const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9yny4.mongodb.net/`).then(() => {
    console.log(`MongoDB connected successfully`);
}).catch((e) => {
    console.log(e);
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});

// create user model
const User = mongoose.model('User', userSchema)


async function runQueryExamples() {
    try {

        // create a new document

        // const newUser = await User.create({
        //     name: 'John Doe',
        //     email: 'johndoe@gmail.com',
        //     age: 25,
        //     isActive: true,
        //     tags: ['Bot', 'User', 'Non-existent'],
        // })

        // const newUser = new User({
        //     name: 'Aditya Singh',
        //     email: 'yeezusgod01@gmail.com',
        //     age: 21,
        //     isActive: true,
        //     tags: ['Developer', 'Gamer', 'Human'],
        // })

        // await newUser.save()

        // console.log('Created new user ', newUser)

        // get all users

        // const allUsers = await User.find({});
        // console.log(allUsers)

        // get all users where isActive is false

        // const getInactiveUsers = await User.find({ isActive: false })
        // console.log(getInactiveUsers);

        // Find one returns first occurence of our search

        // const getOneUser = await User.findOne({ name: 'Aditya Singh' })
        // console.log(getOneUser);

        // Find by id
        // const getLastCreatedUserByUserID = await User.findById(newUser._id)
        // console.log(getLastCreatedUserByUserID);

        // Get name and email

        // const selectedFields = await User.find().select('name email -_id')
        // console.log(selectedFields);

        // Pagination

        // const LimitedUser = await User.find().limit(5).skip(1)
        // console.log(LimitedUser);

        // Sorting
        // const sortedUsers = await User.find().sort({ age: -1 }); // for ascending age:1
        // console.log(sortedUsers);

        // Count total number of documents where isActive is true

        // const countDocuments = await User.countDocuments({ isActive: true })
        // console.log(countDocuments);

        // Delete a user
        // const deletedUser = await User.findByIdAndDelete(newUser._id)
        // console.log(deletedUser);

        // Update user
        const updateUser = await User.findByIdAndUpdate('6795b6cc8c25fb6a56d2d611', {
            $set: { age: 51 }, $push: { tags: 'Hero' }
        }, {
            new: true
        })

        console.log(updateUser);

    } catch (e) {
        console.log(e.message);
    } finally {
        await mongoose.connection.close()
    }
}

runQueryExamples()