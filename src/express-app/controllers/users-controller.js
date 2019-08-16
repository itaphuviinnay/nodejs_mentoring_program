import { Request, Response } from "express";
import users from "../models/users";
import models from "../../models";

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
  models.User.findAll({
    attributes: ["id"]
  }).then(res => response.json(res));
}

export default { getAllUsers };
