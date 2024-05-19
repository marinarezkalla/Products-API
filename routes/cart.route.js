const express = require('express');

const cartController = require('../controllers/cart.controller');

const router = express.Router();


router.route('/')
    .get(cartController.getCart)
    .post(cartController.addItem)




module.exports = router;