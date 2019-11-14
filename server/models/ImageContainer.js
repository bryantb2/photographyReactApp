const mongoose = require('mongoose');


//this creates a mongoose schema that will reflect the structure of the storage container
const ImageSchema = mongoose.Schema({
    genre: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    fullSizeImage: {
        type: String,
        required: true
    },
    orientation: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Image', ImageSchema);
