import { Router } from "express";
import { CreateServiceGroupController } from "../../../modules/serviceGroup/useCases/create/ServiceGroupController";
import { DeleteServiceGroupController } from "../../../modules/serviceGroup/useCases/delete/ServiceGroupController";
import { GetAllServiceGroupController, GetServiceGroupController } from "../../../modules/serviceGroup/useCases/get/ServiceGroupController";
import { UpdateServiceGroupController } from "../../../modules/serviceGroup/useCases/update/ServiceGroupController";

const serviceGroupRoutes = Router();
const getAllServiceGroupController = new GetAllServiceGroupController();
const getServiceGroupController = new GetServiceGroupController();
const createServiceGroupController = new CreateServiceGroupController();
const updateServiceGroupController = new UpdateServiceGroupController();
const deleteServiceGroupController = new DeleteServiceGroupController();

serviceGroupRoutes.get("/", getAllServiceGroupController.handle);
serviceGroupRoutes.get("/:id", getServiceGroupController.handle);
serviceGroupRoutes.post("/", createServiceGroupController.handle);
serviceGroupRoutes.put("/:id", updateServiceGroupController.handle);
serviceGroupRoutes.delete("/:id", deleteServiceGroupController.handle);

export { serviceGroupRoutes }