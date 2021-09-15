import { Router } from "express";
import { CreateShippingController } from "../../../modules/shipping/useCases/create/ShippingController";
import { DeleteShippingController } from "../../../modules/shipping/useCases/delete/ShippingController";
import { GetAllShippingController, GetShippingController } from "../../../modules/shipping/useCases/get/ShippingController";
import { UpdateShippingController } from "../../../modules/shipping/useCases/update/ShippingController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const shippingRoutes = Router();
const getAllShippingController = new GetAllShippingController();
const getShippingController = new GetShippingController();
const createShippingControler = new CreateShippingController();
const updateShippingController = new UpdateShippingController();
const deleteShippingController = new DeleteShippingController();


shippingRoutes.get("/", getAllShippingController.handle);
shippingRoutes.get("/:id", getShippingController.handle);
shippingRoutes.post("/", createShippingControler.handle);
shippingRoutes.put("/:id", updateShippingController.handle);
shippingRoutes.delete("/:id", deleteShippingController.handle);


export { shippingRoutes }