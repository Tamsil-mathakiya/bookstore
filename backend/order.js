const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String, // Using String to accommodate various phone number formats
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema); // Ensure the capitalization is correct

module.exports = Order;
