import { Router } from "express";

import { GetHubController, GetHubByIdController } from "../../modules/hub/useCases/get/HubController";
import { CreateHubController } from "../../modules/hub/useCases/create/HubController";
import { UpdateHubController } from "../../modules/hub/useCases/update/HubController";
import { DeleteHubController } from "../../modules/hub/useCases/delete/HubController";

const hubRoutes = Router();

const getHubController = new GetHubController();
const getHubByIdController = new GetHubByIdController();
const createHubController = new CreateHubController();
const updateHubController = new UpdateHubController();
const deleteHubController = new DeleteHubController();

hubRoutes.get("/", getHubController.handle)
hubRoutes.get("/:id", getHubByIdController.handle)
hubRoutes.post("/", createHubController.handle);
hubRoutes.put("/:id", updateHubController.handle)
hubRoutes.delete("/:id", deleteHubController.handle)

export { hubRoutes }
