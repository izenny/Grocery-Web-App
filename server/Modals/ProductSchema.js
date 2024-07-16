const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productname: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: String,
});
module.exports = mongoose.model("Product",productSchema)