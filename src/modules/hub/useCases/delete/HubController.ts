import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteHubUseCase } from "./HubUseCase";


class DeleteHubController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteHubUseCase = container.resolve(DeleteHubUseCase);

        await deleteHubUseCase.execute(id)



        return response.sendStatus(200)
    }
}

export { DeleteHubController }