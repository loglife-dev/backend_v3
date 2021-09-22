import { Router } from "express";
import { CreateSetToBoardController } from "../../../modules/setToBoard/useCases/create/SetToBoardController";
import { DeleteSetToBoardController } from "../../../modules/setToBoard/useCases/delete/SetToBoardController";
import { GetAllSetToBoardController, GetSetToBoardController } from "../../../modules/setToBoard/useCases/get/SetToBoardController";
import { UpdateSetToBoardController } from "../../../modules/setToBoard/useCases/update/UpdateSetToBoardController";

const setToBoardRoutes = Router();
const getAllSetToBoardController = new GetAllSetToBoardController();
const getSetToBoardController = new GetSetToBoardController();
const createSetToBoardController = new CreateSetToBoardController();
const updateSetToBoardController = new UpdateSetToBoardController();
const deleteSetToBoardController = new DeleteSetToBoardController();

setToBoardRoutes.get("/", getAllSetToBoardController.handle);
setToBoardRoutes.get("/:id", getSetToBoardController.handle);
setToBoardRoutes.post("/", createSetToBoardController.handle);
setToBoardRoutes.put("/:id", updateSetToBoardController.handle);
setToBoardRoutes.delete("/:id", deleteSetToBoardController.handle);

export { setToBoardRoutes }