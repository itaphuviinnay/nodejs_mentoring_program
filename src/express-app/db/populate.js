import City from "../models/city";
import cities from "./cities";
import Product from "../models/product";
import products from "./products";
import User from "../models/user";
import users from "./users";
import { Model } from "mongoose";

/**
 *
 * @param {Model} model
 * @param {Array} array
 */
function batchInserts(model, array) {
  model.deleteMany({}, err => {});
  model.insertMany(array);
}

function populateDB() {
  batchInserts(Product, products);
  batchInserts(User, users);
  batchInserts(City, cities);
}

export default populateDB;
