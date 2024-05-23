const express = require('express');

// const {validationSchema} = require ('../middlewares/validationSchema')

const productController = require ('../controllers/products.controller')

const router = express.Router();


router.route("/")
        .get(productController.getAllProducts)
        // .post(validationSchema(), productController.createProduct)

router.route("/:productId")
        .get(productController.getSingleProduct )
        // .patch(productController.updateProduct)
        // .delete(productController.deleteProduct)

module.exports = router;