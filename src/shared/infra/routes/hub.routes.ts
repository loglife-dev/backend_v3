import { Router } from "express";
import { CreateHubController } from "../../../modules/hub/useCases/create/HubController";
import { DeleteHubController } from "../../../modules/hub/useCases/delete/HubController";
import { GetAllHubCotroller, GetHubController } from "../../../modules/hub/useCases/get/HubController";
import { UpdateHubController } from "../../../modules/hub/useCases/update/HubController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const hubRoutes = Router();
const getHubController = new GetHubController();
const getAllHubController = new GetAllHubCotroller();
const createHubController = new CreateHubController()
const updateHubController = new UpdateHubController()
const deleteHubController = new DeleteHubController();


hubRoutes.get("/", getAllHubController.handle)
hubRoutes.get("/:id", getHubController.handle)
hubRoutes.post("/", createHubController.handle);
hubRoutes.put("/:id", updateHubController.handle)
hubRoutes.delete("/:id", deleteHubController.handle)

export { hubRoutes }
