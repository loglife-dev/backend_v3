import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllRequestedServiceUseCase, GetRequestedServiceUseCase } from "./RequestedServiceUseCase";

class GetRequestedServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getRequestedUseCase = container.resolve(GetRequestedServiceUseCase);

        const requested = await getRequestedUseCase.execute(id);

        return response.json(requested);
    }
}

class GetAllRequestedServiceController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllRequestedServiceUseCase = container.resolve(GetAllRequestedServiceUseCase)

        const requested = await getAllRequestedServiceUseCase.execute();

        return response.json(requested);
    }
}

export { GetRequestedServiceController, GetAllRequestedServiceController }