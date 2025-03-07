import express from 'express';
import productsRouter from './routes/products.js';
import mongoose from 'mongoose';

// make database connection
 
await mongoose.connect(process.env.MONGO_URL);

// create an express app
const app = express();

// use global middlewares
app.use(express.json());

// use routes
app.use(productsRouter);

// Listen for incoming request
app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
})