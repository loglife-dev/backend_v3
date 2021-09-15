import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { CreateCustomerController } from "../../../modules/customer/useCases/create/CustomerController";
import { DeleteCustomerController } from "../../../modules/customer/useCases/delete/CustomerController";
import { GetAllCustomerCotroller, GetCustomerController } from "../../../modules/customer/useCases/get/CustomerController";
import { UpdateCustomerController } from "../../../modules/customer/useCases/update/CustomerController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const customerRoutes = Router();
const getCustomerController = new GetCustomerController();
const getAllCustomerController = new GetAllCustomerCotroller();
const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();


customerRoutes.get("/", getAllCustomerController.handle);
customerRoutes.get("/:id", getCustomerController.handle);
customerRoutes.post("/", createCustomerController.handle);
customerRoutes.put("/:id", updateCustomerController.handle);
customerRoutes.delete("/:id", deleteCustomerController.handle);

export { customerRoutes }