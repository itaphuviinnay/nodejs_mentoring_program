import { Request, Response } from "express";
import products from "../models/products";

/**
 * Function which returns the list of all the available products
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: List of the all the available products
 *
 * @returns: **No products available** if there are no existing products
 */
function getAllProducts(request, response) {
  response.header("Content-Type", "application/json");
  if (!products.length) {
    response.send("No products available");
  }
  response.send(JSON.stringify(products, null, 4));
}

/**
 * Function which adds a new product
 *
 * @param {Request} request
 * @param {Response} response
 */
function addProduct(request, response) {
  response.header("Content-Type", "text/plain");
  products.push(request.body);
  response.send("Product added successfully");
}

export default { getAllProducts, addProduct };
