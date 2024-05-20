const categories = require ('../data/Categories');

const {products} = require ('../data/products');


const getAllCategories = (req, res) => {
    res.json(categories);
}

const getProductsByCategory = (req, res) => {
    const categoryId = +req.params.categoryId;
    let categoryProducts = products.filter(product => product.categoryId === categoryId);

    if (!categoryProducts.length) {
        return res.status(404).json("No products found for this category");
    }

    res.json(categoryProducts);
}


module.exports = {
    getAllCategories,
    getProductsByCategory

}