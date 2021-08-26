import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { GetAllHubUseCase, GetHubUseCase } from "./HubUseCase";

class GetHubController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getHubUseCase = container.resolve(GetHubUseCase);

    const hub = await getHubUseCase.execute(id);

    return response.json(hub);
  }
}


class GetAllHubCotroller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;

    const getAllHubUseCase = container.resolve(GetAllHubUseCase)

    const hub = await getAllHubUseCase.execute();

    return response.json(hub);
  }
}

export { GetHubController, GetAllHubCotroller }