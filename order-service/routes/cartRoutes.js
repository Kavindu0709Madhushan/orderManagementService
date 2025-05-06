const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');


// add to the cart items
router.post('/add', cartController.addToCart);
// get the cart items
router.get('/user/:userId', cartController.getCartByUserId);
// delete cart items
router.delete('/:id', cartController.deleteCartItem);
// update cart items
router.put('/:id', cartController.updateCartItem);

// all cart items
router.get('/all', cartController.getAllCartItems);

module.exports = router;
