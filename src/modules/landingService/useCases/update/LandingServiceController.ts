import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateLandingServiceUseCase } from "./LandingServiceUseCase";

class UpdateLandingServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { step, landing_volume, box_break, cargo_photo, departure_latitude, departure_longitude,
            departure_timestamp, observation } = request.body;

        const updateLandingServiceUseCase = container.resolve(UpdateLandingServiceUseCase);
        const updateLanding = await updateLandingServiceUseCase.execute({
            id,
            step,
            landing_volume,
            box_break,
            cargo_photo,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            observation,
        })
        return response.status(201).json(updateLanding);
    }
}

export { UpdateLandingServiceController }