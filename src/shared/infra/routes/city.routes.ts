import { Router } from "express";
import { CreateCityController } from "../../../modules/city/useCases/create/CityController";
import { DeleteCityController } from "../../../modules/city/useCases/delete/CityController";
import { GetAllCityCotroller, GetCityController } from "../../../modules/city/useCases/get/CityController";
import { UpdateCityController } from "../../../modules/city/useCases/update/CityController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const cityRoutes = Router();
const getAllCityController = new GetAllCityCotroller();
const getCityController = new GetCityController();
const createCityController = new CreateCityController();
const updateCityController = new UpdateCityController();
const deleteCityController = new DeleteCityController();


cityRoutes.get("/", getAllCityController.handle);
cityRoutes.get("/:id", getCityController.handle);
cityRoutes.post("/", createCityController.handle);
cityRoutes.put("/:id", updateCityController.handle)
cityRoutes.delete("/:id", deleteCityController.handle)

export { cityRoutes }
