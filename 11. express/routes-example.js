const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to homepage')
})

// get all products
app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label: 'Product 1',
        }, {
            id: 2,
            label: 'Product 2',
        }, {
            id: 3,
            label: 'Product 3',
        },
    ]

    res.json(products)
})

// Get a single product (Dynamic Routing)
app.get('/products/:productId', (req, res) => {
    console.log(req.params.productId);

    const productId = parseInt(req.params.productId)
    const products = [
        {
            id: 1,
            label: 'Product 1',
        }, {
            id: 2,
            label: 'Product 2',
        }, {
            id: 3,
            label: 'Product 3',
        },
    ]
    const getSingleProduct = products.find(singleProductItem =>
        singleProductItem.id === productId)

    if (getSingleProduct) {
        res.json(getSingleProduct)
    } else {
        res.status(404).send('Product not found')
    }

})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})