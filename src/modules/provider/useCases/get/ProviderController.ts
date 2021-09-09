import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllProviderUseCase, GetProviderUseCase } from "./ProviderUseCase";


class GetProviderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getProviderUseCase = container.resolve(GetProviderUseCase);

        const provider = await getProviderUseCase.execute(id);

        return response.json(provider);
    }
}

class GetAllProviderCotroller {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllProviderUseCase = container.resolve(GetAllProviderUseCase)

        const provider = await getAllProviderUseCase.execute();

        return response.json(provider);
    }
}

export { GetProviderController, GetAllProviderCotroller }