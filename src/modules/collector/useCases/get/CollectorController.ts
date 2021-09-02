import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCollectorUseCase, GetCollectorUseCase } from "./CollectorUseCase";

class GetCollectorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getCollectorUseCase = container.resolve(GetCollectorUseCase);

        const collector = await getCollectorUseCase.execute(id);

        return response.json(collector);
    }
}

class GetAllCollectorController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllCollectorUseCase = container.resolve(GetAllCollectorUseCase)

        const collector = await getAllCollectorUseCase.execute();

        return response.json(collector);
    }
}

export { GetCollectorController, GetAllCollectorController }