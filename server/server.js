const express = require("express");
const products = require("./data/products.js");
const connectDB = require("./db");
const dotenv = require("dotenv");

connectDB();
const app = express();

const PORT = process.env.PORT;
dotenv.config();
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((result) => result._id === req.params.id);
  res.json(product);
});
app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);
