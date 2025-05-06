const Cart = require('../models/cart');


// add to the cart items
exports.addToCart = async (req, res) => {
    let { userId, mealId, itemName, quantity, price, restaurantId,image } = req.body;

    //  auto-generate to the userId 
    if (!userId) {
        userId = "guest_" + Date.now(); // e.g., guest_1714906400000
    }

    try {
        const totalPrice = quantity * price;

        const cartItem = new Cart({
            userId,
            mealId,
            itemName,
            quantity,
            price,
            totalPrice,
            restaurantId,
            image
        });

        const savedItem = await cartItem.save();

        res.status(201).json({
            message: "Item added to cart",
            userId, // return the userId if generated
            cart: savedItem
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get all item
// get all cart items (Admin use)
exports.getAllCartItems = async (req, res) => {
    try {
        const allItems = await Cart.find({});
        res.status(200).json(allItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// get item by userid

// exports.getCartItemsByUser = async (req, res) => {
//     try {
//         const cartItems = await Cart.find({ userId: req.params.userId });
//         res.status(200).json(cartItems);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
exports.getCartByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const cartItems = await Cart.find({ userId });

        if (cartItems.length === 0) {
            return res.status(404).json({ message: "No items in cart for this user." });
        }

        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// update the cart items
exports.updateCartItem = async (req, res) => {
    const { quantity, price } = req.body;

    try {
        const updatedItem = await Cart.findById(req.params.id);
        if (!updatedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        updatedItem.quantity = quantity || updatedItem.quantity;
        updatedItem.price = price || updatedItem.price;
        updatedItem.totalPrice = updatedItem.quantity * updatedItem.price;

        const saved = await updatedItem.save();
        res.status(200).json(saved);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete cart items
exports.deleteCartItem = async (req, res) => {
    try {
        const deletedItem = await Cart.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        res.status(200).json({ message: "Cart item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



