const express = require("express");
const { createOrder, getOrders, updateOrder , assignDriver , updateOrderStatus , updateRestaurantDetails , updateUserDetails , updateMealDetails , getOrderById ,deleteOrderById} = require("../controllers/orderController");
const router = express.Router();
const orderController = require('../controllers/orderController');


router.post("/", createOrder);
router.get("/", getOrders);
// get order by id
router.get('/:id', getOrderById);   // Get by ID
// update order by id
router.put("/:id", updateOrder);
// delete order by id
router.put("/delete/:id", deleteOrderById);

// Assign Driver to an Order
router.patch("/:id/assign-driver", assignDriver);

// update the order status
router.patch("/:id/update-status", updateOrderStatus);

// update the resturant details
router.patch("/:id/update-restaurant", updateRestaurantDetails);

// update the user details
router.patch("/:id/update-user", updateUserDetails);

//update the meal details
router.patch("/:id/update-meal", updateMealDetails);

// Get accepted orders
router.get('/status/:status', orderController.getOrdersByStatus);


module.exports = router;
