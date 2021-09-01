import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateCityUseCase } from "./CityUseCase";


class UpdateCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, state, hub_id, schedule_deadline, observation, } = request.body;

        const updateCity = container.resolve(UpdateCityUseCase)

        const updatedCity = await updateCity.execute({
            id,
            name,
            state,
            hub_id,
            schedule_deadline,
            observation,
        })
        return response.json(updatedCity);
    }
}

export { UpdateCityController };