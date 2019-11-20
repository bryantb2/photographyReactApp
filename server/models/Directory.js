const mongoose = require('mongoose');


//this creates a mongoose schema that will reflect the structure of the storage container
const DirectorySchema = mongoose.Schema({
    storingImages: {
        type: Boolean,
        required: true
    },
    genre: {
        type: Object,
        required: true
    }
},{
    collection: 'images'
});

module.exports = mongoose.model('Directory', DirectorySchema);
    