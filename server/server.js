const express = require("express");
const products = require("./data/products.js");
const connectDB = require("./db");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const {
  notFound,
  errorhandler,
  errorHandler,
} = require("./middleware/errorMiddleware");

connectDB();
const PORT = process.env.PORT;
dotenv.config();
const app = express();

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// app.get("/", (req, res) => {
//   res.send("Api is running...");
// });

app.use("/api/products/", productRoutes);

//global middleware url hi galat hai .   to handle 404 status code
app.use(notFound);

//global middleware to handle error 500 status code        url sahi hai pr id wagera match nai ho rhi ya present  nahi hai database me toh usko handle karne ke liye
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);
