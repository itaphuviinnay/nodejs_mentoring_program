import { Request, Response } from "express";
import users from "../models/users";

/**
 * Function which returns the list of all the available users
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: List of the all the available users
 *
 * @returns: **No users available** if there are no existing users
 */
function getAllUsers(request, response) {
  response.header("Content-Type", "application/json");
  if (!users.length) {
    response.send("No users available");
  }
  response.send(JSON.stringify(users, null, 4));
}

export default { getAllUsers };
