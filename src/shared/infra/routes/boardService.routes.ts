import { Router } from "express";
import { CreateBoardServiceController } from "../../../modules/boardService/useCases/create/BoardServiceController";
import { DeleteBoardServiceController } from "../../../modules/boardService/useCases/delete/BoardServiceController";
import { GetAllBoardServiceController, GetBoardServiceController } from "../../../modules/boardService/useCases/get/BoardServiceController";
import { UpdateBoardServiceController } from "../../../modules/boardService/useCases/update/BoardServiceController";

const boardServiceRoutes = Router();
const getAllBoardServiceController = new GetAllBoardServiceController();
const getBoardServiceController = new GetBoardServiceController();
const createBoardServiceController = new CreateBoardServiceController();
const updateBoardServiceController = new UpdateBoardServiceController();
const deleteBoardServiceController = new DeleteBoardServiceController();

boardServiceRoutes.get("/", getAllBoardServiceController.handle);
boardServiceRoutes.get("/:id", getBoardServiceController.handle);
boardServiceRoutes.post("/", createBoardServiceController.handle);
boardServiceRoutes.put("/:id", updateBoardServiceController.handle);
boardServiceRoutes.delete("/", deleteBoardServiceController.handle);

export { boardServiceRoutes }