require('dotenv').config();

const express = require ('express');

const productRouter = require ('./routes/products.route')

<<<<<<< HEAD
const cartRouter = require('./routes/cart.route')

=======
>>>>>>> 8befa86869b956183724a4cbfb4dc59a2092520e
const app = express();

app.use(express.json())

const port = process.env.PORT || 3006;

app.use('/api/products', productRouter);

<<<<<<< HEAD
app.use('/api/cart', cartRouter);

=======
>>>>>>> 8befa86869b956183724a4cbfb4dc59a2092520e

app.listen(port, ()=>{
    console.log(" I am listening");
})