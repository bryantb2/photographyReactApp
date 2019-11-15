const mongoose = require('mongoose');


//this creates a mongoose schema that will reflect the structure of the storage container
const ImageContainerSchema = mongoose.Schema({
    storingImages: {
        type: Boolean,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    imageArray: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('ImageContainer', ImageContainerSchema);
