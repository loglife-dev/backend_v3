import { Router } from "express";
import { CreateBranchController } from "../../../modules/branch/useCases/create/BranchController";
import { DeleteBranchController } from "../../../modules/branch/useCases/delete/BranchController";
import { GetAllBranchController, GetBranchController } from "../../../modules/branch/useCases/get/BranchController";
import { UpdateBranchController } from "../../../modules/branch/useCases/update/BranchController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const branchRoutes = Router();
const getAllBranchController = new GetAllBranchController();
const getBranchController = new GetBranchController();
const createBranchController = new CreateBranchController();
const updateBranchController = new UpdateBranchController();
const deleteBranchController = new DeleteBranchController();


branchRoutes.get("/", getAllBranchController.handle);
branchRoutes.get("/:id", getBranchController.handle);
branchRoutes.post("/", createBranchController.handle);
branchRoutes.put("/:id", updateBranchController.handle);
branchRoutes.delete("/:id", deleteBranchController.handle);

export { branchRoutes }