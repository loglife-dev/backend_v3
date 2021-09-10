import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateCollectorCostUseCase } from './CollectorCostUseCase';

class UpdateCollectorCostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { collector_id, city_id, cost_motorcycle, additional_cost_motorcycle, cost_car, additional_cost_car, cost_truck,  additional_cost_truck,  observation } = request.body;

        const updateCollectorCostUseCase = container.resolve(UpdateCollectorCostUseCase)

        const collectorCost = await updateCollectorCostUseCase.execute({
            id,
            collector_id,
            city_id,
            cost_motorcycle,
            additional_cost_motorcycle,
            cost_car,
            additional_cost_car,
            cost_truck,
            additional_cost_truck,
            observation,
        })
        return response.json(collectorCost);
    }
}


export { UpdateCollectorCostController }