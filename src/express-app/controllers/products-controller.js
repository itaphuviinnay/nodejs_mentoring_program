import { Request, Response } from "express";
import Product from "../models/product";

/**
 * Function which returns the list of all the available products
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: List of the all the available products
 */
function getAllProducts(request, response) {
  response.header("Content-Type", "application/json");
  Product.find({}, { _id: 0, __v: 0 }, (error, products) => {
    if (error) {
      return response.status(500).send({
        status: 500,
        message: error
      });
    }
    return response.json(products);
  });
}

/**
 * Function which adds a new product and returns it
 *
 * @param {Request} request
 * @param {Response} response
 */
function addProduct(request, response) {
  response.header("Content-Type", "application/json");
  const { name, brand, price, color, size } = request.body;
  Product.create(
    {
      name,
      brand,
      price,
      color,
      size
    },
    (error, product) => {
      if (error) {
        return response.status(400).json({
          status: 400,
          message: error
        });
      }
      return response.status(201).send(product);
    }
  );
}

export default { getAllProducts, addProduct };
