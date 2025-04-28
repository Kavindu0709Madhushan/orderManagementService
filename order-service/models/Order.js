const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  mealId: String,
  itemName: String,
  quantity: Number,
  price: Number,
  totalPrice: Number,
});

const orderSchema = new mongoose.Schema({
  userId: String,
  userLocation: String,
  userDistance: {
    latitude: Number,
    longitude: Number,
  },
  customerName: String,
  phone: String,
  address: String,
  email: String,
  resturantId: String,
  resturantLocation: String,
  resturantDistance: {
    latitude: Number,
    longitude: Number,
  },
  items: [orderItemSchema], // 👈 Items array එක!
  driverId: String,
  driverLocation: String,
  driverName: String,
  status: {
    type: String,
    enum: [
      'Pending', 
      'Accepted', 
      'Out for Delivery', 
      'Delivered', 
      'Droped', 
      'PickUp', 
      'Assigned', 
      'Prepared'
    ],
    default: 'Pending',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
