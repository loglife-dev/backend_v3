import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllLandingServiceUseCase, GetLandingServiceUseCase } from "./LandingServiceUseCase";

class GetLandingServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getLandingUseCase = container.resolve(GetLandingServiceUseCase);

        const landing = await getLandingUseCase.execute(id);

        return response.json(landing);
    }
}

class GetAllLandingServiceController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllLandingServiceUseCase = container.resolve(GetAllLandingServiceUseCase)

        const landing = await getAllLandingServiceUseCase.execute();

        return response.json(landing);
    }
}

export { GetLandingServiceController, GetAllLandingServiceController }