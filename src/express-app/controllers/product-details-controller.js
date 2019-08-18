import { Request, Response } from "express";
import db from "../models";
/**
 * Function which the returns details of a specific product.
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: Details of the product whose Id matches with the given Id. An empty object is returned if no product is found
 *
 * @returns: **Product Id is missing** in case if product id was not found as a route parameter
 *
 */
function getProductDetails(request, response) {
  response.header("Content-Type", "application/json");
  const productId = Number(request.params.id);
  if (!productId) response.send("Product Id is missing");
  return db.productModel
    .findByPk(productId)
    .then(product => response.json(product))
    .catch(_ =>
      response.status(404).send(`No product found with product id ${productId}`)
    );
}

/**
 * Function which the returns reviews for a specific product.
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: List of the all the reviews associated to a specific product
 *
 * @returns: **Product Id is missing** in case if product id was not found as a route parameter
 *
 */
function getProductReviews(request, response) {
  response.header("Content-Type", "application/json");
  const id = Number(request.params.id);
  if (!id) response.send("Product Id is missing");
  return db.reviewModel
    .findAll({
      where: {
        productId: id
      }
    })
    .then(reviews => response.json(reviews))
    .catch(_ =>
      response.status(400).send(`No product found with product id ${id}`)
    );
}

export default { getProductDetails, getProductReviews };
