import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteRequestedServiceUseCase } from "./RequestedServiceUseCase";

class DeleteRequestedServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteRequestedServiceUseCase = container.resolve(DeleteRequestedServiceUseCase);

        await deleteRequestedServiceUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteRequestedServiceController }