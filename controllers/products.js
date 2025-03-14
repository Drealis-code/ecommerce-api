import { ProductModel } from "../models/product.js";

export const addProduct = async (req, res, next) => {
 try {
   // upload product image
   // validate product information
   // save product information in database
   const result = await ProductModel.create(req.body);
   // return response
   res.json(result);
 } catch (error) {
  next(error);
 }
};

export const getProducts = async (req, res) => {
 try {
   // fetch products from database
   const result = await ProductModel.find();
   // return response
   res.json(result);
 } catch (error) {
  next(error);
  
 }
};

export const countProducts = (req, res) => {
  res.send("All products count!");
};

export const updateProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} updated!`);
};

export const deleteProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} deleted!`);
};
