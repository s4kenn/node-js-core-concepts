const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware.js')

// we will protect this route with an auth middleware
router.get('/welcome', authMiddleware, (req, res) => {

    const { userId, username, role } = req.userInfo
    res.json({
        message: 'Welcome to home page',
        user: {
            _id: userId,
            username,
            role
        }
    })
})

module.exports = router