import { Router } from "express";
import { CreateRequestedServiceController } from "../../../modules/requestedService/useCases/create/RequestedServiceController";
import { DeleteRequestedServiceController } from "../../../modules/requestedService/useCases/delete/RequestedServiceController";
import { GetAllRequestedServiceController, GetRequestedServiceController } from "../../../modules/requestedService/useCases/get/RequestedServiceController";
import { UpdateRequestedServiceController } from "../../../modules/requestedService/useCases/update/RequestedServiceController";

const requestedServiceRoutes = Router();
const getAllRequestedServiceController = new GetAllRequestedServiceController();
const getRequestedServiceController = new GetRequestedServiceController();
const createRequestedServiceController = new CreateRequestedServiceController();
const updateRequestedServiceController = new UpdateRequestedServiceController();
const deleteRequestedServiceController = new DeleteRequestedServiceController();

requestedServiceRoutes.get("/", getAllRequestedServiceController.handle);
requestedServiceRoutes.get("/:id", getRequestedServiceController.handle);
requestedServiceRoutes.post("/", createRequestedServiceController.handle);
requestedServiceRoutes.put("/:id", updateRequestedServiceController.handle);
requestedServiceRoutes.delete("/:id", deleteRequestedServiceController.handle);

export { requestedServiceRoutes }