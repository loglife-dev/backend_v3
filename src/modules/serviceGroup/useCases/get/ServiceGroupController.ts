import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllServiceGroupUseCase, GetServiceGroupUseCase } from "./ServiceGroupUseCase";

class GetServiceGroupController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getServiceGroupUseCase = container.resolve(GetServiceGroupUseCase);

        const group = await getServiceGroupUseCase.execute(id);

        return response.json(group);
    }
}

class GetAllServiceGroupController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllServiceGroupUseCase = container.resolve(GetAllServiceGroupUseCase)

        const group = await getAllServiceGroupUseCase.execute();

        return response.json(group);
    }
}

export { GetServiceGroupController, GetAllServiceGroupController }