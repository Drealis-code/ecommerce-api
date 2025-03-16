import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";

// make database connection

await mongoose.connect(process.env.MONGO_URL);

// create an express app
const app = express();

// use global middlewares
app.use(express.json());

// use routes
app.use(productsRouter);

// Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
