const express = require('express');

const {cartValidationSchema} = require ('../middlewares/validationSchema')

const cartController = require('../controllers/cart.controller');

const router = express.Router();


router.route('/')
    .get(cartController.getCart)
    .post(cartValidationSchema(), cartController.addItem)




module.exports = router;