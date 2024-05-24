const { validationResult } = require('express-validator');

let cart = [];

const getCart = (req, res) => {
    const response = {
        status: "success",
        message: "Cart retrieved successfully",
        data: {
            products: cart
        }
    };
    res.status(200).json(response);
}

const addItem = (req, res) => {
    
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
    
            const { item, quantity, price } = req.body;
    
            // Extract headers
            const hostHeader = req.headers['host'];
            const userAgentHeader = req.headers['user-agent'];
            const acceptHeader = req.headers['accept'];
            const acceptEncodingHeader = req.headers['accept-encoding'];
            const connectionHeader = req.headers['connection'];
    
            console.log('Host:', hostHeader);
            console.log('User-Agent:', userAgentHeader);
            console.log('Accept:', acceptHeader);
            console.log('Accept-Encoding:', acceptEncodingHeader);
            console.log('Connection:', connectionHeader);
    
            const existingItem = cart.find(cartItem => cartItem.item === item);
    
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ item, quantity, price });
            }
    
            const response = {
                status: "success",
                message: "Product added successfully to your cart",
                data: {
                    products: cart
                }
            };
    
            res.status(201).json(response);
        }
    




module.exports = {
    getCart,
    addItem
}
