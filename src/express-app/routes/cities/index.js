import express from "express";
import citiesController from "../../controllers/cities-controller";
import { isAuthenticated } from "../../middlewares/jwtTokenVerifier";

const citiesRouter = express.Router();

citiesRouter.use(isAuthenticated);

citiesRouter.get("/", (request, response) => {
  citiesController.getAllCities(request, response);
});

citiesRouter.get("/random", (request, response) => {
  citiesController.getRandomCity(request, response);
});

citiesRouter.post("/", (request, response) => {
  citiesController.addCity(request, response);
});

citiesRouter.put("/:id", (request, response) => {
  citiesController.updateCity(request, response);
});

citiesRouter.delete("/:id", (request, response) => {
  citiesController.deleteCity(request, response);
});

export default citiesRouter;
