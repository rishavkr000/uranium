const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: ObjectId,
    productId: ObjectId,
    amount: {
        type: Number, 
        default: 0
    },
	isFreeAppUser: {
        type: Boolean,
        default: true
    },
	date: {
        type: String, 
        format: "dd/mm/yyyy"
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)