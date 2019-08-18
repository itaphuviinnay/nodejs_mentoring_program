import { Request, Response } from "express";
import db from "../models";

/**
 * Function which returns the list of all the available users
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: List of the all the available users
 */
function getAllUsers(request, response) {
  response.header("Content-Type", "application/json");
  db.userModel.findAll().then(users => response.json(users));
}

export default { getAllUsers };
