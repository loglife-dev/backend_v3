import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllDriverUseCase, GetDriverUseCase } from "./DriverUseCase";

class GetDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getDriverUseCase = container.resolve(GetDriverUseCase);

        const driver = await getDriverUseCase.execute(id);

        return response.json(driver);
    }
}

class GetAllDriverCotroller {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllDriverUseCase = container.resolve(GetAllDriverUseCase)

        const driver = await getAllDriverUseCase.execute();

        return response.json(driver);
    }
}

export { GetDriverController, GetAllDriverCotroller }