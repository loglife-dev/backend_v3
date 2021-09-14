import { Router } from "express";
import { CreateCollectorCostController } from "../../../modules/collector_cost/useCases/create/CollectorCostController";
import { DeleteCollectorCostController } from "../../../modules/collector_cost/useCases/delete/CollectorCostController";
import { GetAllCollectorCostController, GetCollectorCostController } from "../../../modules/collector_cost/useCases/get/CollectorCostController";
import { UpdateCollectorCostController } from "../../../modules/collector_cost/useCases/update/CollectorCostController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const collectorCostRoutes = Router();
const getAllCollectorCostController = new GetAllCollectorCostController();
const getCollectorCostController = new GetCollectorCostController();
const createCollectorCostController = new CreateCollectorCostController();
const updateCollectorCostController = new UpdateCollectorCostController();
const deleteCollectorCostController = new DeleteCollectorCostController();

collectorCostRoutes.use(ensureAuthenticate);
collectorCostRoutes.get("/", getAllCollectorCostController.handle);
collectorCostRoutes.get("/:id", getCollectorCostController.handle);
collectorCostRoutes.post("/", createCollectorCostController.handle);
collectorCostRoutes.put("/:id", updateCollectorCostController.handle);
collectorCostRoutes.delete("/:id", deleteCollectorCostController.handle);

export { collectorCostRoutes }