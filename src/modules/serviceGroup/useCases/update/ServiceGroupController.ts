import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateServiceGroupUseCase } from "./ServiceGroupUseCase";

class UpdateServiceGroupController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { service_list } = request.body;

        const updateServiceGroupUseCase = container.resolve(UpdateServiceGroupUseCase);

        const group = await updateServiceGroupUseCase.execute({
            id,
            service_list,
        });
        return response.json(group);
    }
}
export { UpdateServiceGroupController }