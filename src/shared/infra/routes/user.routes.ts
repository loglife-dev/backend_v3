import { Router } from "express";
import { CreateUserController } from "../../../modules/user/useCases/create/UserController";
import { DeleteUserController } from "../../../modules/user/useCases/delete/UserController";
import { GetAllUserCotroller } from "../../../modules/user/useCases/get/UserController";
import { UpdateUserController } from "../../../modules/user/useCases/update/UserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const userRoutes = Router();
const getAllUserController = new GetAllUserCotroller();
const getUserController = new GetAllUserCotroller();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


userRoutes.get("/", ensureAuthenticate, getAllUserController.handle);
userRoutes.get("/:id", ensureAuthenticate, getUserController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.put("/:id", ensureAuthenticate, updateUserController.handle);
userRoutes.delete("/:id", ensureAuthenticate, deleteUserController.handle);

export { userRoutes }