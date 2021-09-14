import { Router } from "express";
import { CreateCollectorController } from "../../../modules/collector/useCases/create/CollectorController";
import { DeleteCollectorController } from "../../../modules/collector/useCases/delete/CollectorController";
import { GetAllCollectorController, GetCollectorController } from "../../../modules/collector/useCases/get/CollectorController";
import { UpdateCollectorController } from "../../../modules/collector/useCases/update/CollectorController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { collectorCostRoutes } from "./collectorCost.routes";

const collectorRoutes = Router();
const getAllCollectorController = new GetAllCollectorController();
const getCollectorController = new GetCollectorController();
const createCollectorController = new CreateCollectorController();
const updateCollectorController = new UpdateCollectorController();
const deleteCollectorController = new DeleteCollectorController();

collectorCostRoutes.use(ensureAuthenticate);
collectorRoutes.get("/", getAllCollectorController.handle)
collectorRoutes.get("/:id", getCollectorController.handle)
collectorRoutes.post("/", createCollectorController.handle);
collectorRoutes.put("/:id", updateCollectorController.handle);
collectorRoutes.delete("/:id", deleteCollectorController.handle);

export { collectorRoutes }