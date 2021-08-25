import { Request, Response } from "express";
import { DeleteHubUseCase } from "./HubUseCase";

class DeleteHubController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteHubUseCase = new DeleteHubUseCase();

    await deleteHubUseCase.execute(id);

    return response.sendStatus(200);
  }
}

export { DeleteHubController };
