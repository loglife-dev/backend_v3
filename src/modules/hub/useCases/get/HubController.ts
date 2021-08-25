import { Request, Response } from "express";
import { GetHubAllUseCase, GetHubByIdUseCase } from "./HubUseCase";

class GetHubController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getHubAllUseCase = new GetHubAllUseCase();

    const hub = await getHubAllUseCase.execute();

    return response.json(hub);
  }
}

class GetHubByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getHubByIdUseCase = new GetHubByIdUseCase();

    const hub = await getHubByIdUseCase.execute(id);

    return response.json(hub);
  }
}
export { GetHubController, GetHubByIdController };
