import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteProviderUseCase } from "./ProviderUseCase";

class DeleteProviderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteProviderUseCase = container.resolve(DeleteProviderUseCase);

        await deleteProviderUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteProviderController }