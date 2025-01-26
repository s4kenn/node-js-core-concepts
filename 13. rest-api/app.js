const express = require('express')
const app = express()

// Middleware
app.use(express.json())


let books = [
    {
        id: '1',
        title: 'Book1',
    }, {
        id: '2',
        title: 'Book2',
    }, {
        id: '3',
        title: 'Book3',
    },
]

// intro route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our book store api'
    })
})

// get all books
app.get('/get', (req, res) => {
    res.json(books)
})

// get a single book 
app.get('/get/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(singleBook => singleBook.id === id)
    if (book) res.status(200).json(book)
    else res.status(404).json({ message: 'Book not found' })
})

// add a new book
app.post('/add', (req, res) => {
    const newBook = {
        id: (Math.floor(Math.random() * 1000)).toString(),
        title: `Book${Math.floor(Math.random() * 1000)}`
    }
    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: 'New book added successfully',
    })
})

// update a book based on id
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const getCurrBook = books.find(singleBook => singleBook.id === id)

    if (!getCurrBook) {
        res.status(404).json({
            message: 'Book not found',
        })
    }

    getCurrBook.title = req.body.title || getCurrBook.title
    res.status(200).json({
        data: getCurrBook,
        message: `Book with ${id} updated successfully`,
    })

})

// delete a book
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    const idx = books.findIndex(item => item.id === id)
    if (idx != -1) {
        const deletedBook = books.splice(idx, 1);
        res.status(200).json({
            message: 'Book deleted successfully'
        })
    } else {
        res.status(404).json({ message: 'Book not found' })
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on port number ${PORT}`);
})