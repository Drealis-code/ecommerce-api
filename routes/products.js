import { Router } from "express";
import {
  addProduct,
  countProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";

// create the products router

const productsRouter = Router();

// Define routes

productsRouter.post("/products", remoteUpload.single("image"), addProduct);

productsRouter.get("/products", getProducts);

productsRouter.get("/products/count", countProducts);

productsRouter.patch("/products/:id", updateProduct);

productsRouter.delete("/products/:id", deleteProduct);

// export router
export default productsRouter;
