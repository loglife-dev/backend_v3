import { Router } from "express";
import { CreateAllocateServiceController } from "../../../modules/allocateService/useCases/create/AllocateServiceController";

const allocateServiceRoutes = Router();
const createAllocateController = new CreateAllocateServiceController();

allocateServiceRoutes.post("/", createAllocateController.handle);

export { allocateServiceRoutes }
