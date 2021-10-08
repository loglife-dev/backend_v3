import { Router } from "express";
import multer from "multer"
import multerConfig = require("../../../config/multer")
import { CreateLandingServiceController } from "../../../modules/landingService/useCases/create/LandingServiceController";
import { GetAllLandingServiceController, GetLandingServiceController } from "../../../modules/landingService/useCases/get/LandingServiceController";
import { UpdateLandingServiceController } from "../../../modules/landingService/useCases/update/LandingServiceController";

const landingServiceRoutes = Router();
const getAllLandingServiceController = new GetAllLandingServiceController();
const getLandingServiceController = new GetLandingServiceController();
const createLandingServiceController = new CreateLandingServiceController();
const updateLandingServiceController = new UpdateLandingServiceController();

landingServiceRoutes.get("/", getAllLandingServiceController.handle);
landingServiceRoutes.get("/:id", getLandingServiceController.handle);
landingServiceRoutes.post("/", createLandingServiceController.handle);
landingServiceRoutes.put("/:id", multer(multerConfig).any(), updateLandingServiceController.handle);

export { landingServiceRoutes }
