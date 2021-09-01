import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCityUseCase } from "./CityUseCase";


class CreateCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, state, hub_id, schedule_deadline, observation, } = request.body;

        const createCityUseCase = container.resolve(CreateCityUseCase);

        const city = await createCityUseCase.execute({
            name,
            state,
            hub_id,
            schedule_deadline,
            observation,
        });

        const cityResponse = {
            name: city.name,
            state: city.state,
            hub_id: city.hubId,
            schedule_deadline: city.schedule_deadline,
            observation: city.observation
        }


        return response.status(201).json(cityResponse);
    }
}
export { CreateCityController };
