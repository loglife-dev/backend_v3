import { Router } from "express";
import { CreateAllocateServiceController } from "../../../modules/allocateService/useCases/create/AllocateServiceController";
import { GetAllAllocateServiceController, GetAllocateServiceController } from "../../../modules/allocateService/useCases/get/AllocateServiceController";
import { UpdateAllocateServiceController } from "../../../modules/allocateService/useCases/update/AllocateServiceController";

const allocateServiceRoutes = Router();
const getAllAllocateServiceController = new GetAllAllocateServiceController();
const getAllocateServiceController = new GetAllocateServiceController();
const createAllocateController = new CreateAllocateServiceController();
const updateAllocateServiceController = new UpdateAllocateServiceController();

allocateServiceRoutes.get("/", getAllAllocateServiceController.handle);
allocateServiceRoutes.get("/:id", getAllocateServiceController.handle);
allocateServiceRoutes.post("/", createAllocateController.handle);
allocateServiceRoutes.put("/:id", updateAllocateServiceController.handle);

export { allocateServiceRoutes }
