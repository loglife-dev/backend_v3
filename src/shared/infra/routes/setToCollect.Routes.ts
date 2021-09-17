import { Router } from "express";
import { CreateSetToCollectController } from "../../../modules/setToCollect/useCases/create/SetToCollectController";
import { DeleteSetToCollectController } from "../../../modules/setToCollect/useCases/delete/SetToCollectController";
import { GetAllSetToCollectController, GetSetToCollectController } from "../../../modules/setToCollect/useCases/get/SetToCollectController";
import { UpdateSetToCollectController } from "../../../modules/setToCollect/useCases/update/SetToCollectController";

const setToCollectRoutes = Router();
const getAllSetToController = new GetAllSetToCollectController();
const getSetToController = new GetSetToCollectController();
const createSetToController = new CreateSetToCollectController();
const updateSetToController = new UpdateSetToCollectController();
const deleteSetToController = new DeleteSetToCollectController();

setToCollectRoutes.get("/", getAllSetToController.handle);
setToCollectRoutes.get("/:id", getSetToController.handle);
setToCollectRoutes.post("/", createSetToController.handle);
setToCollectRoutes.put("/:id", updateSetToController.handle);
setToCollectRoutes.delete("/:id", deleteSetToController.handle);

export { setToCollectRoutes }