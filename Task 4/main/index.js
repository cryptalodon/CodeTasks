///npm i node
///npm i nodemon
///task qovlugunun icinde: npm init -y
///npm i express
///npm i
///npm -v
///node -v
///npm express -v
///npx nodemon main/index.js or nodemon main/index.js
///////////////////////////////////////////////////////////////////////////////
const express = require('express')
const app = express()
/////bir seyin bodysini oxumaq ucun express json istifade etmek lazimdir
app.use(express.json())


const products = [
    {id: 1,name: "Laptop",price: 1200,category: "Electronics"},
    {id: 2,name: "Smartphone",price: 800,icategory: "Electronics"},
    {id: 3,name: "Coffee Mug",price: 12.99,category: "Kitchen"},
    {id: 4,name: "Desk Chair",price: 150,category: "Furniture"},
    {id: 5, name: "Notebook",price: 3.5,category: "Stationery"}
  ];
app.get('/', (req, res) => {
    res.send('Hello World!')
  });
app.post('/', (req, res) => {
    res.send('successful products post request')
  })

app.get('/products', (req, res) => {
  res.send(products)
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };
    products.push(newProduct);
    console.log('New product is added:', newProduct);
    res.status(201).send(newProduct);
  } );

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const product = products.find(p => p.id === productId)
    if (product) {
        console.log('Product is found:', product)
        res.status(201).json(product)
    } else {
        res.status(404).send('Product not found')
    }
  })

app.listen(3000, () => {  
    console.log('Server is running on http://localhost:3000')
  })