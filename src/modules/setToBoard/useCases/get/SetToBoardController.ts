import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllSetToBoardUseCase, GetSetToBoardUseCase } from "./SetToBoardUseCase";

class GetSetToBoardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getSetToBoardUseCase = container.resolve(GetSetToBoardUseCase);

        const board = await getSetToBoardUseCase.execute(id);

        return response.json(board);
    }
}

class GetAllSetToBoardController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllSetToBoardUseCase = container.resolve(GetAllSetToBoardUseCase)

        const board = await getAllSetToBoardUseCase.execute();

        return response.json(board);
    }
}

export { GetSetToBoardController, GetAllSetToBoardController }