import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateHubUseCase } from "./HubUseCase";

class CreateHubController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, state, observation } = request.body;

    const createHubUseCase = container.resolve(CreateHubUseCase);

    const hub = await createHubUseCase.execute({
      name,
      state,
      observation,
    });

    const hubResponse = {
      name: hub.name,
      state: hub.state,
      observation: hub.observation
    }


    return response.status(201).json(hubResponse);
  }
}
export { CreateHubController };
