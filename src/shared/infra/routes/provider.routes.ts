import { Router } from "express";
import { CreateProviderController } from "../../../modules/provider/useCases/create/ProviderController";
import { DeleteProviderController } from "../../../modules/provider/useCases/delete/ProviderController";
import { GetAllProviderCotroller, GetProviderController } from "../../../modules/provider/useCases/get/ProviderController";
import { UpdateProviderController } from "../../../modules/provider/useCases/update/ProviderController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const providerRoutes = Router();
const getAllProviderController = new GetAllProviderCotroller();
const getProviderController = new GetProviderController();
const updateProviderController = new UpdateProviderController();
const createProviderController = new CreateProviderController();
const deleteProviderController = new DeleteProviderController();

providerRoutes.use(ensureAuthenticate);
providerRoutes.get("/", getAllProviderController.handle);
providerRoutes.get("/:id", getProviderController.handle);
providerRoutes.post("/", createProviderController.handle);
providerRoutes.put("/:id", updateProviderController.handle);
providerRoutes.delete("/:id", deleteProviderController.handle);

export { providerRoutes }