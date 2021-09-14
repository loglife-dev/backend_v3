import { Router } from "express";
import { AuthenticateUserController } from "../../../modules/user/useCases/authenticate/UserController";

const authenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes }