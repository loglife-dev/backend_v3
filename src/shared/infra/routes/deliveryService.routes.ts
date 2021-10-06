import { Router } from "express";
import { CreateDeliveryServiceController } from "../../../modules/deliveryService/useCases/create/DeliveryServiceController";
import { GetAllDeliveryServiceController, GetDeliveryServiceController } from "../../../modules/deliveryService/useCases/get/DeliveryServiceController";
import { UpdateDeliveryServiceController } from "../../../modules/deliveryService/useCases/update/DeliveryServiceController";

const deliveryServiceRoutes = Router();
const getAllDeliveryServiceController = new GetAllDeliveryServiceController();
const getDeliveryServiceController = new GetDeliveryServiceController();
const createDeliveryServiceController = new CreateDeliveryServiceController();
const updateDeiliveryServiceController = new UpdateDeliveryServiceController();

deliveryServiceRoutes.get("/", getAllDeliveryServiceController.handle);
deliveryServiceRoutes.get("/", getDeliveryServiceController.handle);
deliveryServiceRoutes.post("/", createDeliveryServiceController.handle);
deliveryServiceRoutes.put("/:id", updateDeiliveryServiceController.handle);

export { deliveryServiceRoutes }