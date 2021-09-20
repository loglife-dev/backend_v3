import { Router } from "express";
import multer = require("multer");

import { CreateCollectServiceController } from "../../../modules/collectService/useCases/create/CollectServiceController";
import { DeleteCollectServiceController } from "../../../modules/collectService/useCases/delete/CollectServiceController";
import { GetAllCollectServiceController, GetCollectServiceController } from "../../../modules/collectService/useCases/get/CollectServiceController";
import { UpdateCollectServiceController } from "../../../modules/collectService/useCases/update/CollectServiceController";

import multerConfig = require("../../../config/multer")



const collectServiceRoutes = Router();
const getAllCollectServiceController = new GetAllCollectServiceController();
const getCollectServiceController = new GetCollectServiceController();
const createCollectServiceController = new CreateCollectServiceController();
const updateCollectServiceController = new UpdateCollectServiceController();
const deleteCollectServiceController = new DeleteCollectServiceController();

collectServiceRoutes.get("/", getAllCollectServiceController.handle);
collectServiceRoutes.get("/:id", getCollectServiceController.handle);
collectServiceRoutes.post("/",multer(multerConfig).single("file"), createCollectServiceController.handle);
collectServiceRoutes.put("/:id", updateCollectServiceController.handle);
collectServiceRoutes.delete("/:id", deleteCollectServiceController.handle);

export { collectServiceRoutes }