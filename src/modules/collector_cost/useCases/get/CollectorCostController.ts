import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCollectorCostUseCase, GetCollectorCostUseCase } from "./CollectorCostUseCase";


class GetCollectorCostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getCollectorCostUseCase = container.resolve(GetCollectorCostUseCase);

        const collectorCost = await getCollectorCostUseCase.execute(id);

        return response.json(collectorCost);
    }
}

class GetAllCollectorCostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllCollectorCostUseCase = container.resolve(GetAllCollectorCostUseCase);

        const collectorCost = await getAllCollectorCostUseCase.execute();

        return response.json(collectorCost)
    }
}

export { GetCollectorCostController, GetAllCollectorCostController }