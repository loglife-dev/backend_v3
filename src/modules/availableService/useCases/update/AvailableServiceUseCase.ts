import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateAvailableServiceUseCase } from './AvialableServiceController';

class UpdateAvailableServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { landing_availability_date, landing_availability_hour, observation } = request.body;

        const updateBoardServiceUseCase = container.resolve(UpdateAvailableServiceUseCase);

        const updateResponse = await updateBoardServiceUseCase.execute({
            id,
            landing_availability_date,
            landing_availability_hour,
            observation,
        })
        return response.json(updateResponse)
    }

}
export { UpdateAvailableServiceController }