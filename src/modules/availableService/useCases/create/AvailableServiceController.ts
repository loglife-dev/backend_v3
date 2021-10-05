import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAvailableServiceUseCase } from "./AvailableSeviceUseCase";

class CreateAvailableController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, landing_availability_date, landing_availability_hour, observation } = request.body;
        const createAvailableServiceUseCase = container.resolve(CreateAvailableServiceUseCase);

        const createAvailable = await createAvailableServiceUseCase.execute({
            service_id,
            landing_availability_date,
            landing_availability_hour,
            observation,
        });
        return response.json(createAvailable);
    }
}

export { CreateAvailableController }