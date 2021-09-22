import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceGroupUseCase } from "./ServiceGroupUseCase";

class CreateServiceGroupController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_list } = request.body;
        const createServiceGroupUseCase = container.resolve(CreateServiceGroupUseCase);

        const group = await createServiceGroupUseCase.execute({
            service_list,
        });

        const groupResponse = {
            service_list: group.service_list
        };
        return response.status(201).json(groupResponse);

    }
}
export { CreateServiceGroupController }