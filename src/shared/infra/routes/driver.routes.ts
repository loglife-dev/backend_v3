import { Router } from "express";
import { CreateDriverController } from "../../../modules/driver/useCases/create/DriverController";
import { DeleteDriverController } from "../../../modules/driver/useCases/delete/DriverController";
import { GetAllDriverCotroller, GetDriverController } from "../../../modules/driver/useCases/get/DriverController";
import { UpdateDriverController } from "../../../modules/driver/useCases/update/DriverController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const driverRoutes = Router();
const getAllDriverController = new GetAllDriverCotroller();
const getDriverController = new GetDriverController();
const createDriverController = new CreateDriverController();
const updateDriverController = new UpdateDriverController();
const deleteDriverController = new DeleteDriverController();

driverRoutes.use(ensureAuthenticate);
driverRoutes.get("/", getAllDriverController.handle);
driverRoutes.get("/:id", getDriverController.handle);
driverRoutes.post("/", createDriverController.handle);
driverRoutes.put("/:id", updateDriverController.handle);
driverRoutes.delete("/:id", deleteDriverController.handle);


export { driverRoutes }