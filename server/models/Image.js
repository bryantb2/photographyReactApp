const mongoose = require('mongoose');


//this creates a mongoose schema that will setup the data object model
const ImageSchema = mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
    imageNumber: {
        type: int,
        required: true
    },
    thumbnail: {
        type: URL,
        required: true
    },
    fullSizeImage: {
        type: URL,
        required: true
    },
    orientation: {
        type: URL,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

modules.exports = mongoose.model('Image', ImageSchema);