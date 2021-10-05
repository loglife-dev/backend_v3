import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateAllocateServiceUseCase } from "./AllocateServiceUseCase"

class CreateAllocateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, allocated_flight, availability_date, availability_hour, observation } = request.body

        const createAllocateServiceUseCase = container.resolve(CreateAllocateServiceUseCase);
        const createAllocate = await createAllocateServiceUseCase.execute({
            service_id,
            allocated_flight,
            availability_date,
            availability_hour,
            observation,
        });
        return response.json(createAllocate)

    }
}

export { CreateAllocateServiceController }