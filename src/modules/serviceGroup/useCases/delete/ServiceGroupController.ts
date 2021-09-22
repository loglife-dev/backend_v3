import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteServiceGroupUseCase } from "./ServiceGroupUseCase";

class DeleteServiceGroupController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteServiceGroupUseCase = container.resolve(DeleteServiceGroupUseCase);

        await deleteServiceGroupUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteServiceGroupController }