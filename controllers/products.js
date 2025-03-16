import { ProductModel } from "../models/product.js";
import { addProductValidator } from "../validators/products.js";

export const addProduct = async (req, res, next) => {
  try {
    // upload product image
    console.log(req.body);
    // validate product information
    const { error, value } = addProductValidator.validate({
      ...req.body,
      image: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }

    // save product information in database 
    const result = await ProductModel.create(value);
    // return response
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const { filter = "{}", sort = "{}" } = req.query;
    // fetch products from database
    const result = await ProductModel.find(JSON.parse(filter)).sort(
      JSON.parse(sort)
    );
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
