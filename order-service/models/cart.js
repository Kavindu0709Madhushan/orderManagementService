const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
       
    },
    mealId: {
        type: String,
        
    },
    itemName: {
        type: String,
        
    },
    quantity: {
        type: Number,
        
    },
    price: {
        type: Number,
        
    },
    totalPrice: {
        type: Number,
        
    },
    restaurantId: {
        type: String,
        
    },
    image: {
        type: String, // Store image URL or Base64 string
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Cart", cartSchema);
