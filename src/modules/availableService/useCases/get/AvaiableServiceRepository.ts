import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllAvailableServiceUseCase, GetAvailableServiceUseCase } from "./AvailableServiceController";

class GetAvailableServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getAvailableServiceUseCase = container.resolve(GetAvailableServiceUseCase);
        const board = await getAvailableServiceUseCase.execute(id);
        
        return response.json(board);
    }
}

class GetAllAvailableServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllAvailableServiceUseCase = container.resolve(GetAllAvailableServiceUseCase)

        const board = await getAllAvailableServiceUseCase.execute();

        return response.json(board);
    }
}

export { GetAvailableServiceController, GetAllAvailableServiceController }