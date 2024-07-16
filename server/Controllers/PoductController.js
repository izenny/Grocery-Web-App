const Product = require("../Modals/ProductSchema");
exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      productname: req.body.productname,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("error in creating product");
    res.status(400).json({ meesage: error.message });
  }
};

exports.productbyCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    console.log("error category product");
    res.status(400).json({ meesage: error.message });
  }
};
