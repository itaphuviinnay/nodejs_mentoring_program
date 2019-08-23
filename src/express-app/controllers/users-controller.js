import { Request, Response } from "express";
import User from "../models/user";

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
  User.find({}, { _id: 0, __v: 0 }, (error, users) => {
    if (error) {
      return response.status(500).send({
        status: 500,
        message: error
      });
    }
    return response.json(users);
  });
}

/**
 * Function which deletes a specific user.
 *
 * @param {Request} request
 * @param {Response} response
 *
 *
 */
function deleteUser(request, response) {
  response.header("Content-Type", "application/json");
  const userId = Number(request.params.id);
  User.deleteOne({ id: userId }, (err, _) => {
    if (err)
      return response.status(500).send({
        status: 500,
        message: "Failed to delete the user"
      });
    return response.json({
      status: 200,
      id: userId,
      message: "User deleted successfully"
    });
  });
}
export default { getAllUsers, deleteUser };
