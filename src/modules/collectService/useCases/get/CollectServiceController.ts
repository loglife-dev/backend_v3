import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCollectServiceUseCase, GetCollectServiceUseCase } from "./CollectServiceUseCase";

class GetCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getCollectServiceUseCase = container.resolve(GetCollectServiceUseCase);

        const collectoService = await getCollectServiceUseCase.execute(id);

        return response.json(collectoService);
    }
}

class GetAllCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllCollectServiceUseCase = container.resolve(GetAllCollectServiceUseCase);

        const collectService = await getAllCollectServiceUseCase.execute();

        return response.json(collectService)
    }
}

export { GetCollectServiceController, GetAllCollectServiceController }