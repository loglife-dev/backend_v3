import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteServiceUseCase } from "./ServiceUseCase";

class DeleteServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteServiceUseCase = container.resolve(DeleteServiceUseCase);

        await deleteServiceUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteServiceController }