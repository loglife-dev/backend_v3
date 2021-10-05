import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateAllocateServiceUseCase } from './AllocateServiceUseCase';

class UpdateAllocateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { allocated_flight, availability_date, availability_hour, observation } = request.body;

        const updateAllocateServiceUseCase = container.resolve(UpdateAllocateServiceUseCase);

        const updateResponse = await updateAllocateServiceUseCase.execute({
            id,
            allocated_flight,
            availability_date,
            availability_hour,
            observation,
        })
        return response.json(updateResponse);
    }

}
export { UpdateAllocateServiceController }