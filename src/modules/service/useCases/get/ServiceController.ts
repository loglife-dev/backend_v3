import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllServiceUseCase, GetServiceUseCase } from "./ServiceUseCase";

class GetServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getServiceUseCase = container.resolve(GetServiceUseCase);

        const service = await getServiceUseCase.execute(id);

        return response.json(service);
    }
}

class GetAllServiceController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllServiceUseCase = container.resolve(GetAllServiceUseCase)

        const service = await getAllServiceUseCase.execute();

        return response.json(service);
    }
}

export { GetServiceController, GetAllServiceController }