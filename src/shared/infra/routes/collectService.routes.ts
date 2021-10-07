import { request, response, Router } from "express";
import multer from "multer"

import { CreateCollectServiceController } from "../../../modules/collectService/useCases/create/CollectServiceController";
import { DeleteCollectServiceController } from "../../../modules/collectService/useCases/delete/CollectServiceController";
import { GetAllCollectServiceController, GetCollectServiceController } from "../../../modules/collectService/useCases/get/CollectServiceController";
import { UpdateCollectServiceController } from "../../../modules/collectService/useCases/update/CollectServiceController";

import multerConfig = require("../../../config/multer")


const collectServiceRoutes = Router();
const getAllCollectServiceController = new GetAllCollectServiceController();
const getCollectServiceController = new GetCollectServiceController()
const createCollectServiceController = new CreateCollectServiceController();
const updateCollectServiceController = new UpdateCollectServiceController();
const deleteCollectServiceController = new DeleteCollectServiceController();

collectServiceRoutes.get("/", getAllCollectServiceController.handle);
collectServiceRoutes.get("/:id", getCollectServiceController.handle);
collectServiceRoutes.post("/", multer(multerConfig).any(), createCollectServiceController.handle);
collectServiceRoutes.put("/:id", multer(multerConfig).any(), updateCollectServiceController.handle);
collectServiceRoutes.delete("/:id", deleteCollectServiceController.handle);

export { collectServiceRoutes }