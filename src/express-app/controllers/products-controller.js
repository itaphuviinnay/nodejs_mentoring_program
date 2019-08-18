import { Request, Response } from "express";
import db from "../models";

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
  return db.productModel.findAll().then(products => response.json(products));
}

/**
 * Function which adds a new product
 *
 * @param {Request} request
 * @param {Response} response
 */
function addProduct(request, response) {
  response.header("Content-Type", "application/json");
  return db.productModel
    .create(request.body)
    .then(product => response.status(201).send(product))
    .catch(error => response.status(400).send(error));
}

export default { getAllProducts, addProduct };
