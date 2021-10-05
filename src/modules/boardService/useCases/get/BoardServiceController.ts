import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllBoardServiceUseCase, GetBoardServiceUseCase } from "./BoardServiceUseCase";

class GetBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getBoardServiceUseCase = container.resolve(GetBoardServiceUseCase);
        const board = await getBoardServiceUseCase.execute(id);
        
        return response.json(board);
    }
}

class GetAllBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllBoardServiceUseCase = container.resolve(GetAllBoardServiceUseCase)

        const board = await getAllBoardServiceUseCase.execute();

        return response.json(board);
    }
}

export { GetBoardServiceController, GetAllBoardServiceController }