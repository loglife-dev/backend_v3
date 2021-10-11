import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateLandingServiceUseCase } from "./LandingServiceUseCase";

class UpdateLandingServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const files = request.files;
        const { branch_id, driver_id, landing_volume, box_break, departure_latitude, departure_longitude,
            departure_timestamp, observation } = request.body;


        let cargo_photo = ''

        for (let file of (files as any)) {
            if (file.fieldname === 'cargo_photo') {
                cargo_photo = file.key
            }
        }

        const updateLandingServiceUseCase = container.resolve(UpdateLandingServiceUseCase);
        const updateLanding = await updateLandingServiceUseCase.execute({
            id,
            branch_id,
            driver_id,
            landing_volume,
            box_break,
            cargo_photo: cargo_photo,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            observation,
        })
        return response.status(201).json(updateLanding);
    }
}

export { UpdateLandingServiceController }