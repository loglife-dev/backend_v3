import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateLandingServiceUseCase } from './LandingServiceUseCase';

class CreateLandingServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, branch_id, driver_id, arrival_latitude, arrival_longitude, arrival_timestamp, landing_volume,
            box_break, cargo_photo, departure_latitude, departure_longitude, departure_timestamp, observation } = request.body;

        const createLandingServiceUseCase = container.resolve(CreateLandingServiceUseCase);

        const createLanding = await createLandingServiceUseCase.execute({
            service_id,
            branch_id,
            driver_id,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            landing_volume,
            box_break,
            cargo_photo,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            observation,
        })
        return response.json(createLanding);
    }
}
export { CreateLandingServiceController }