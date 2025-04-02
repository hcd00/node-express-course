const express = require('express');
const { products } = require('./data');
const app = express();
const port = 3000;

//Middleware
app.use(express.static('./public'))

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

//GET products
app.get('/api/v1/products', (req, res) => {
    res.json(products);
})

//GET Product ID
app.get('/api/v1/products/:productID', (req, res) => {
    //Parse ID
    const Id = parseInt(req.params.productID);
    //Product ID
    const product = products.find((p) => p.id === Id);
    if (!product) {
        return res.status(404).json({ message : "That product id was not found."})
    }
    res.json(product);
})

app.get('/api/v1/query', (req, res) => {
    let filteredProducts = [...products]; // Start with all products

    // Check if "search" query exists
    if (req.query.search) {
        const searchTerm = req.query.search.toLowerCase();
        //filter & startsWith w/ callback
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().startsWith(searchTerm)
        );
    }

    // Check if "limit" query exists
    if (req.query.limit) {
        const limit = parseInt(req.query.limit);
        //slice
        filteredProducts = filteredProducts.slice(0, limit);
    }

    //Check price
    if (req.query.price) {
        const maxPrice = parseFloat(req.query.price);
        //filter w callback
        filteredProducts = filteredProducts.filter( product => product.price <= maxPrice);
    }

    //Search Desc
    if (req.query.desc) {
        const description = req.query.desc.toLowerCase();
        //filter and includes w callback
        filteredProducts = filteredProducts.filter(product => product.description.toLowerCase().includes(description))
    }
    // Return the filtered results
    res.json(filteredProducts);
});

//app.post()

app.all('./public', (req, res, next) => {
    next();
})

app.listen(port, () => {
    console.log(`My app is listening on port: ${port}`)
})