import { Router } from "express";
import { CreateAddressController } from "../../../modules/address/useCases/create/AddressController";
import { DeleteAddressController } from "../../../modules/address/useCases/delete/AddressController";
import { GetAddressController, GetAllAddressController } from "../../../modules/address/useCases/get/AddressController";
import { UpdateAddressController } from "../../../modules/address/useCases/update/AddressController";

const addressRoutes = Router();
const getAllAddressController = new GetAllAddressController();
const getAddressController = new GetAddressController();
const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

addressRoutes.get("/", getAllAddressController.handle);
addressRoutes.get("/:id", getAddressController.handle);
addressRoutes.post("/", createAddressController.handle);
addressRoutes.put("/:id", updateAddressController.handle);
addressRoutes.delete("/:id", deleteAddressController.handle);
export { addressRoutes }