const mongoose = require("mongoose");
const {Schema} = mongoose;

const gallerySchema = new Schema({
    title:String,
    URL:String
})

module.exports = mongoose.model('Gallery',gallerySchema);
