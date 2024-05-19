let cart = [];

const getCart = (req, res) =>{
    res.status(200).json(cart);
}

const addItem = (req, res) =>{
    const {item, quantity} = req.body;
    const existingItem = cart.find((cartItem) => cartItem.item === item);

    if (existingItem){

        existingItem.quantity+=quantity;

    } else {

        cart.push({item, quantity});
    }

    res.status(201).json(cart);
}


module.exports = {
    getCart,
    addItem
}