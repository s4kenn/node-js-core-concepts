const express = require('express')
// router
const router = express.Router()
const { getAllBooks, getSingleBookByID, addNewBook, updateByID, deleteByID } = require('../controllers/book-controller.js')

// all the routes related to books
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBookByID);
router.post('/add', addNewBook);
router.put('/update/:id', updateByID);
router.delete('/delete/:id', deleteByID);

module.exports = router