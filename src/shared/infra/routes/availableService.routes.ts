import { Router } from "express";
import { CreateAvailableController } from "../../../modules/availableService/useCases/create/AvailableServiceController";

const availableServiceRoutes = Router();
const createAvailableServiceController = new CreateAvailableController();

availableServiceRoutes.post("/", createAvailableServiceController.handle);

export { availableServiceRoutes }