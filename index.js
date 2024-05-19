require('dotenv').config();

const express = require ('express');

const productRouter = require ('./routes/products.route')

const cartRouter = require('./routes/cart.route')

const categoryRouter = require('./routes/categories.route')

const app = express();

app.use(express.json())

const port = process.env.PORT || 3006;

app.use('/api/products', productRouter);

app.use('/api/cart', cartRouter);

app.use('/api/categories', categoryRouter)


app.listen(port, ()=>{
    console.log(" I am listening");
})