import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSetToCollectUseCase } from "./SetToCollectUseCase";

class CreateSetToCollectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, step, address_id, provider_id, driver_id, observation } = request.body;
        const createSetToCollectUseCase = container.resolve(CreateSetToCollectUseCase);

        const collect = await createSetToCollectUseCase.execute({
            service_id,
            step,
            address_id,
            provider_id,
            driver_id,
            observation,
        });

        const collectResponse = {
            service_id: collect.service_id,
            step: collect.step,
            address_id: collect.address_id,
            provider_id: collect.provider_id,
            driver_id: collect.driver_id,
            observation: collect.observation,
        };
        return response.status(201).json(collectResponse);

    }
}
export { CreateSetToCollectController }