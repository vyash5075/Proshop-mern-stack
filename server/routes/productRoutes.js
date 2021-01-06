const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");
//fetch all products
router.route("/").get(getProducts);

//fetch product by id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
module.exports = router;
