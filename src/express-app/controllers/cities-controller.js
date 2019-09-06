import { Request, Response } from "express";
import City from "../models/city";

/**
 * Function which returns a random city from the list of available cities
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: A random city model
 */
function getRandomCity(request, response) {
  response.header("Content-Type", "application/json");
  City.find({}, { _id: 0, __v: 0 }, (err, cities) => {
    if (err) return response.send(err);
    const cityIndex = Math.round(Math.random() * (cities.length - 1));
    return response.json(cities[cityIndex]);
  });
}

/**
 * Function which returns the list of available cities
 *
 * @param {Request} request
 * @param {Response} response
 *
 * @returns: List of available cities
 */
function getAllCities(request, response) {
  response.header("Content-Type", "application/json");
  City.find({}, { _id: 0, __v: 0 }, (err, cities) => {
    if (err) return response.send(err);
    return response.json(cities);
  });
}

/**
 * Function which adds a new city and returns it
 *
 * @param {Request} request
 * @param {Response} response
 *
 */
function addCity(request, response) {
  response.header("Content-Type", "application/json");
  const { id, name, country, capital, location } = request.body;
  City.create(
    {
      id,
      name,
      country,
      capital,
      location: {
        lat: location.lat,
        long: location.long
      }
    },
    (error, city) => {
      if (error) {
        return response.status(400).json({
          status: 400,
          error
        });
      }
      return response.status(201).send(city);
    }
  );
}

/**
 * Function which updates an existing city and returns it
 *
 * @param {Request} request
 * @param {Response} response
 *
 */
function updateCity(request, response) {
  response.header("Content-Type", "application/json");
  const cityId = Number(request.params.id);
  const options = {
    new: true
  };
  City.findOneAndUpdate({ id: cityId }, request.body, options, (err, city) => {
    if (err) return response.send(err);
    return response.json(city);
  });
}

/**
 * Function which deletes a specific city
 *
 * @param {Request} request
 * @param {Response} response
 *
 */
function deleteCity(request, response) {
  response.header("Content-Type", "application/json");
  const cityId = Number(request.params.id);
  City.findOneAndDelete({ id: cityId }, (_, city) => {
    if (!city)
      return response.status(500).send({
        status: 500,
        message: "No city exists with the given id"
      });
    return response.json({
      status: 200,
      id: cityId,
      message: "City deleted successfully"
    });
  });
}

export default { getAllCities, getRandomCity, addCity, updateCity, deleteCity };
