import { Router } from "express";
import { CreateUserController } from "../../../modules/user/useCases/create/UserController";
import { DeleteUserController } from "../../../modules/user/useCases/delete/UserController";
import { GetAllUserCotroller } from "../../../modules/user/useCases/get/UserController";
import { UpdateUserController } from "../../../modules/user/useCases/update/UserController";

const userRoutes = Router();
const getAllUserController = new GetAllUserCotroller();
const getUserController = new GetAllUserCotroller();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


userRoutes.get("/", getAllUserController.handle);
userRoutes.get("/:id", getUserController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.put("/:id", updateUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes }