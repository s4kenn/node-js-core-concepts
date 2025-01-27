const Book = require('../models/book.js')

const getAllBooks = async (req, res) => {

    try {

        const allBooks = await Book.find()
        const totalBooks = await Book.countDocuments()
        if (allBooks) {
            res.status(200).json({
                success: true,
                message: 'Books fetched successfully',
                data: allBooks,
                TotalBooks: totalBooks
            })
        } else {
            res.status(404).json({
                success: true,
                message: 'No book found',
            })
        }

    } catch (error) {

        res.status(500).json({
            success: false,
            message: `Error fetching data -> ${error.message}`
        })

    }

}

const getSingleBookByID = async (req, res) => {

    try {

        const getCurrentBookId = req.params.id
        const bookDetailsByID = await Book.findById(getCurrentBookId)
        if (!bookDetailsByID) {
            res.status(404).json({
                success: false,
                message: `Book with ${getCurrentBookId} not found`,
            })
        }

        res.status(200).json({
            success: true,
            data: bookDetailsByID,
            message: `Book with ${getCurrentBookId} found`
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching data -> ${error.message}`
        })
    }

}

const addNewBook = async (req, res) => {

    try {

        const newBookFormData = req.body
        const newlyCreatedBook = await Book.create(newBookFormData)

        if (newlyCreatedBook) {
            res.status(201).json({
                success: true,
                message: 'New book created successfully',
                data: newlyCreatedBook
            })
        } else {
            res.status(500).json({
                success: false,
                message: 'Failed to add new book',
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to add new book ${error.message}`,
        })
    }

}

const updateByID = async (req, res) => {

    try {

        const id = req.params.id
        const updatedBookFormData = req.body

        const updatedBook = await Book.findByIdAndUpdate(id, updatedBookFormData, {
            new: true
        })

        if (updatedBook) {
            res.status(200).json({
                success: true,
                message: `Book updated successfully`,
                data: updatedBook
            })
        } else {
            res.status(404).json({
                success: false,
                message: `Book not found`,
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error updating book -> ${error.message}`
        })
    }


}

const deleteByID = async (req, res) => {

    try {

        const id = req.params.id
        const deletedBook = await Book.findByIdAndDelete(id)

        if (!deletedBook) {
            res.status(404).json({
                success: false,
                message: `Book with id ${id} not found`
            })
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: deletedBook
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error in Server or MongoDB`,
        })
    }

}

module.exports = { getAllBooks, getSingleBookByID, addNewBook, updateByID, deleteByID }