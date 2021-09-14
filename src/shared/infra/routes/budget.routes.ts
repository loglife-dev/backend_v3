import { Router } from "express";
import { CreateBudgetController } from "../../../modules/budget/useCases/create/BudgetController";
import { DeleteBudgetController } from "../../../modules/budget/useCases/delete/BudgetController";
import { GetAllBudgetController, GetBudgetController } from "../../../modules/budget/useCases/get/BudgetController";
import { UpdateBudgetController } from "../../../modules/budget/useCases/update/BudgetController";


const budgetRoutes = Router();
const getAllBudgetController = new GetAllBudgetController();
const getBudgetController = new GetBudgetController();
const createBudgetController = new CreateBudgetController();
const updateBudgetController = new UpdateBudgetController();
const deleteBudgetController = new DeleteBudgetController();


budgetRoutes.get("/", getAllBudgetController.handle);
budgetRoutes.get("/:id", getBudgetController.handle);
budgetRoutes.post("/", createBudgetController.handle);
budgetRoutes.put("/:id", updateBudgetController.handle);
budgetRoutes.delete("/:id", deleteBudgetController.handle);

export { budgetRoutes }