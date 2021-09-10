import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCollectorCostUseCase } from "./CollectorCostUseCase";


class CreateCollectorCostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { collector_id, city_id, cost_motorcycle, additional_cost_motorcycle, cost_car, additional_cost_car, cost_truck, additional_cost_truck, observation } = request.body;

        const createCollectorCostUseCase = container.resolve(CreateCollectorCostUseCase);

        const collectorCost = await createCollectorCostUseCase.execute({
            collector_id,
            city_id,
            cost_motorcycle,
            additional_cost_motorcycle,
            cost_car,
            additional_cost_car,
            cost_truck,
            additional_cost_truck,
            observation,
        });

        const collectorCostResponse = {
            collector_id: collectorCost.collector_id,
            city_id: collectorCost.city_id,
            cost_motorcycle: collectorCost.cost_motorcycle,
            additional_cost_motorcycle: collectorCost.additional_cost_motorcycle,
            cost_car: collectorCost.cost_car,
            additional_cost_car: collectorCost.additional_cost_car,
            cost_truck: collectorCost.cost_truck,
            additional_cost_truck: collectorCost.additional_cost_truck,
            observation: collectorCost.observation
        }

        return response.status(201).json(collectorCostResponse);
    }
}
export { CreateCollectorCostController }