const express = require('express');

const router = express.Router();

const categoriesController = require ('../controllers/categories.controller');


router.route('/')
     .get(categoriesController.getAllCategories);

router.route('/:categoryId/product')
     .get(categoriesController.getProductsByCategory)


module.exports = router;