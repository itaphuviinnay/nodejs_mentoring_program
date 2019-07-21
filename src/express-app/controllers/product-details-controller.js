import { Request, Response } from "express";
import products from "../models/products";
import reviews from "../models/reviews";

/**
 * Function which the returns details of a specific product.
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: Details of the product whose Id matches with the given Id
 *
 * @returns: **Product Id is missing** in case if product id was not found as a route parameter
 *
 * @returns: **No products found with the given id** in case if there are no products matching with the given id
 *
 */
function getProductDetails(request, response) {
  response.header("Content-Type", "application/json");
  const productId = Number(request.params.id);
  if (!productId) response.send("Product Id is missing");
  const searchedProduct = products.find(product => product.id === productId);
  if (!searchedProduct) {
    response.send("No products found with the given id");
  }
  response.send(JSON.stringify(searchedProduct, null, 4));
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
 * @returns: **No reviews found with for the given product id** in case if there are no reviews available for the product with the given id
 */
function getProductReviews(request, response) {
  response.header("Content-Type", "application/json");
  const productId = Number(request.params.id);
  if (!productId) response.send("Product Id is missing");
  const productName = products.find(product => product.id === productId).name;
  const searchedReviews = reviews
    .filter(review => review.productId === productId)
    .map(review => {
      return { ...review, productName };
    });
  if (!searchedReviews.length) {
    response.send("No reviews found with for the given product id");
  }
  response.send(JSON.stringify(searchedReviews, null, 4));
}

export default { getProductDetails, getProductReviews };
