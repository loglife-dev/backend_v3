import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateHubUseCase } from "./HubUseCase";


class UpdateHubController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, state, observation } = request.body;

        const updateHub = container.resolve(UpdateHubUseCase)

        const updatedHub = await updateHub.execute({
            id,
            name,
            state,
            observation
        })
        return response.json(updatedHub);
    }
}

export { UpdateHubController };