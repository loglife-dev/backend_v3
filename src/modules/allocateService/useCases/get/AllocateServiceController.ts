import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllAllocateServiceUseCase, GetAllocateServiceUseCase } from "./AllocateServiceUseCase";

class GetAllocateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getAllocateServiceUseCase = container.resolve(GetAllocateServiceUseCase);
        const board = await getAllocateServiceUseCase.execute(id);
        
 

        return response.json(board);
    }
}

class GetAllAllocateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllAllocateServiceUseCase = container.resolve(GetAllAllocateServiceUseCase)

        const board = await getAllAllocateServiceUseCase.execute();

        return response.json(board);
    }
}

export { GetAllocateServiceController, GetAllAllocateServiceController }