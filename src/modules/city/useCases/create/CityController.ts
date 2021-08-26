import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCityUseCase } from "./CityUseCase";


class CreateCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, state, hub_id, deadline_collect, observation, } = request.body;

        const createCityUseCase = container.resolve(CreateCityUseCase);

        const city = await createCityUseCase.execute({
            name,
            state,
            hub_id,
            deadline_collect,
            observation,
        });

        const cityResponse = {
            name: city.name,
            state: city.state,
            hub_id: city.hubId,
            deadline_collect: city.deadline_collect,
            observation: city.observation
        }


        return response.status(201).json(cityResponse);
    }
}
export { CreateCityController };
