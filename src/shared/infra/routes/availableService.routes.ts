import { Router } from "express";
import { CreateAvailableController } from "../../../modules/availableService/useCases/create/AvailableServiceController";
import { GetAllAvailableServiceController, GetAvailableServiceController } from "../../../modules/availableService/useCases/get/AvaiableServiceRepository";
import { UpdateAvailableServiceController } from "../../../modules/availableService/useCases/update/AvailableServiceUseCase";

const availableServiceRoutes = Router();
const createAvailableServiceController = new CreateAvailableController();
const getAllAvailableServiceController = new GetAllAvailableServiceController();
const getAvailableServiceController = new GetAvailableServiceController();
const updateAvailableServiceController = new UpdateAvailableServiceController();

availableServiceRoutes.post("/", createAvailableServiceController.handle);
availableServiceRoutes.get("/", getAllAvailableServiceController.handle);
availableServiceRoutes.get("/:id", getAvailableServiceController.handle);
availableServiceRoutes.put("/:id", updateAvailableServiceController.handle);

export { availableServiceRoutes }