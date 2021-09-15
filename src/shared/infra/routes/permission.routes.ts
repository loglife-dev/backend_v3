import { Router } from "express";
import { CreatePermissionController } from "../../../modules/permission/useCases/create/PermissionController";
import { DeletePermissionController } from "../../../modules/permission/useCases/delete/PermissionController";
import { GetAllPermissionCotroller, GetPermissionController } from "../../../modules/permission/useCases/get/PermissionController";
import { UpdatePermissionController } from "../../../modules/permission/useCases/update/PermissionController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const permissionRoutes = Router()
const getAllPermissionController = new GetAllPermissionCotroller();
const getPermissionController = new GetPermissionController();
const createPermissionController = new CreatePermissionController();
const updatePermissionController = new UpdatePermissionController();
const deletePermissionController = new DeletePermissionController();


permissionRoutes.get("/", getAllPermissionController.handle)
permissionRoutes.get("/:id", getPermissionController.handle)
permissionRoutes.post("/", createPermissionController.handle);
permissionRoutes.put("/:id", updatePermissionController.handle);
permissionRoutes.delete("/:id", deletePermissionController.handle);

export { permissionRoutes }