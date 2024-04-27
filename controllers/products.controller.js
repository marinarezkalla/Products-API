let {products} = require ('../data/products')

const {validationResult} = require ('express-validator')


const getAllProducts =  (req,res)=>{
    res.json(products);
}


const getSingleProduct = (req, res)=>{
    const productId = +req.params.productId;
    let product = products.find ((product) => product.id === productId);

    if(!product){
       return res.status(404).json("Not Found");
    }

    res.json(product);
}


const createProduct = (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors.array());
    }
    products.push({id: products.length +1 , ...req.body})
    res.status(201).json(products)
}


const updateProduct =  (req, res)=>{
    const productId = +req.params.productId;
    let product = products.find ((product) => product.id === productId);

    if(!product){
       return res.status(404).json("Not Found");
    }
    product = ({...product, ...req.body});
    res.status(200).json(product);

}

const deleteProduct = (req, res)=>{
    const productId = +req.params.productId;
    products = products.filter((product)=> product.id !== productId);
    res.status(200).json({success:true});
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}