import { Request, Response } from "express";
import { UpdateHubUseCase } from "../update/HubUseCase";

class UpdateHubController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, state, observation } = request.body;

    const updateHubUseCase = new UpdateHubUseCase();

    const hub = await updateHubUseCase.execute({
      id,
      name,
      state,
      observation,
    });

    return response.status(200).json(hub);
  }
}
export { UpdateHubController };
