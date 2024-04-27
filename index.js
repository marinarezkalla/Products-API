const express = require ('express');

const productRouter = require ('./routes/products.route')

const app = express();

app.use(express.json())


app.use('/api/products', productRouter);


app.listen(3004, ()=>{
    console.log(" I am listening");
})