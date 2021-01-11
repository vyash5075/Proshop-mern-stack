const express = require("express");
const products = require("./data/products.js");
const connectDB = require("./db");
const dotenv = require("dotenv");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const morgan = require("morgan");
const {
  notFound,
  errorhandler,
  errorHandler,
} = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
connectDB();
const PORT = process.env.PORT;
dotenv.config();
const app = express();
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.use(express.json()); //this will allow json data in the body

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Setup CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/test", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products/", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//const __dirname=path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//global middleware url hi galat hai .   to handle 404 status code
app.use(notFound);

//global middleware to handle error 500 status code        url sahi hai pr id wagera match nai ho rhi ya present  nahi hai database me toh usko handle karne ke liye
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);
