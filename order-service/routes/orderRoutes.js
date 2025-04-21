const express = require("express");
const { createOrder, getOrders, updateOrder , assignDriver , updateOrderStatus , updateRestaurantDetails , updateUserDetails , updateMealDetails} = require("../controllers/orderController");
const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);
router.put("/:id", updateOrder);

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

module.exports = router;
