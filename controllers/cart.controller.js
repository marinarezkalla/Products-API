let cart = [];

const getCart = (req, res) => {
    const response = {
        status: "success",
        message: "Cart retrieved successfully",
        data: {
            cartOwner: "exampleUserId",  // Replace with actual user ID if needed
            products: cart
        }
    };
    res.status(200).json(response);
}

const addItem = (req, res) => {
    const { item, quantity, price } = req.body;  // Assume each item has an id and a price
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
            cartOwner: "exampleUserId",  // Replace with actual user ID if needed
            products: cart
        }
    };

    res.status(201).json(response);
}

module.exports = {
    getCart,
    addItem
}
