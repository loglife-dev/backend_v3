import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCityUseCase, GetCityUseCase } from "./CityUseCase";


class GetCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getCityUseCase = container.resolve(GetCityUseCase);

        const city = await getCityUseCase.execute(id);

        return response.json(city);
    }
}

class GetAllCityCotroller {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllcityUseCase = container.resolve(GetAllCityUseCase)

        const city = await getAllcityUseCase.execute();

        return response.json(city);
    }
}

export { GetCityController, GetAllCityCotroller }