import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteCityUseCase } from "./CityUseCase";



class DeleteCityController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCityUseCase = container.resolve(DeleteCityUseCase);

        await deleteCityUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteCityController }