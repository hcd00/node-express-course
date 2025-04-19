const express = require('express');
const { products, people } = require('./data');
const peopleRouter = require('./routes/people.js');
const app = express();
const port = 3000;

//Middleware function
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toDateString()
    console.log("Method: ", method);
    console.log('Url: ', url);
    console.log("Time: ", time);
    next()
}

//Middleware
app.use(express.static('./public'), logger);


//parse form data 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//people router
app.use("/api/v1/people", peopleRouter);


app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

//GET products
app.get('/api/v1/products', (req, res) => {
    res.json(products);
})

//GET people
// app.get('/api/v1/people', (req, res) => {
//     res.json(people);
// })

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

// app.post('api/v1/people', (req, res) => {
//     if (req.body.name === null){
//         res.status(400).json({ success: false, message: "Please provide a name" });
//     }
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
// })

app.all('./public', (req, res, next) => {
    next();
})

app.listen(port, () => {
    console.log(`My app is listening on port: ${port}`)
})