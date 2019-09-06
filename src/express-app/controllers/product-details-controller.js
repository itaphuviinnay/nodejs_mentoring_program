import { Request, Response } from "express";
import Product from "../models/product";

/**
 * Function which the returns details of a specific product.
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: Details of the product whose Id matches with the given Id. An error object is returned if no product is found
 *
 * @returns: **Product Id is missing** in case if product id was not found as a route parameter
 *
 */
function getProductDetails(request, response) {
  response.header("Content-Type", "application/json");
  const productId = Number(request.params.id);
  if (!productId) response.send("Product Id is missing");
  Product.findOne({ id: productId }, { _id: 0, __v: 0 }, (err, product) => {
    if (!product)
      return response.status(404).send({
        status: 404,
        err,
        message: `No product found with product id ${productId}`
      });
    return response.send(JSON.stringify(product, null, 4));
  });
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
  const productId = Number(request.params.id);
  if (!productId) response.send("Product Id is missing");
  Product.findOne({ id: productId }, { _id: 0, __v: 0 }, (err, product) => {
    if (!product)
      return response.status(500).send({
        status: 500,
        err,
        message: "No reviews found for the given product id"
      });
    return response.send(
      JSON.stringify(
        { productId: productId, reviews: product.reviews },
        null,
        4
      )
    );
  });
}

/**
 * Function which deletes a specific product.
 *
 * @param {Request} request
 * @param {Response} response
 *
 *
 */
function deleteProduct(request, response) {
  response.header("Content-Type", "application/json");
  const productId = Number(request.params.id);
  Product.findOneAndDelete({ id: productId }, (_, product) => {
    if (!product)
      return response.status(500).send({
        status: 500,
        message: "No product exists with the given product id"
      });
    return response.json({
      status: 200,
      id: productId,
      message: "Product deleted successfully"
    });
  });
}

export default { getProductDetails, getProductReviews, deleteProduct };
