import { Router } from "express";
import { CreateHubController } from "../../modules/hub/useCases/create/HubController";
import { DeleteHubController } from "../../modules/hub/useCases/delete/HubController";
import { GetHubController, GetHubByIdController } from "../../modules/hub/useCases/get/HubController";
import { UpdateHubController } from "../../modules/hub/useCases/update/HubController";



const hubRoutes = Router();
const createHubController = new CreateHubController();
const getHubController = new GetHubController();
const getHubByIdController = new GetHubByIdController();
const updateHubController = new UpdateHubController();
const deleteHubController = new DeleteHubController();

hubRoutes.get("/", getHubController.handle)
hubRoutes.get("/:id", getHubByIdController.handle)
hubRoutes.post("/", createHubController.handle);
hubRoutes.put("/:id", updateHubController.handle)
hubRoutes.delete("/:id", deleteHubController.handle)


export { hubRoutes }