const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    author: {
        type: ObjectId,
        ref: "NewAuthor"
    },
	name: String,
	price: Number,
	ratings: Number,
	publisher: {
        type: ObjectId,
        ref: "NewPublisher",
    },
    isHardCover: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema) //newbooks

