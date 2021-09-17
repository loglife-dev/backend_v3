import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateSetToCollectUseCase } from "./SetToCollectUseCase";

class UpdateSetToCollectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { service_id, step, address_id, provider_id, driver_id, observation } = request.body;

        const updateSetToCollectUseCase = container.resolve(UpdateSetToCollectUseCase);

        const setToCollect = await updateSetToCollectUseCase.execute({
            id,
            service_id,
            step,
            address_id,
            provider_id,
            driver_id,
            observation,
        });
        return response.json(setToCollect);
    }
}
export { UpdateSetToCollectController }