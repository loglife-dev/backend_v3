import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllSetToCollectUseCase, GetSetToCollectUseCase } from "./SetToCollectUseCase";

class GetSetToCollectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getSetToCollectUseCase = container.resolve(GetSetToCollectUseCase);

        const setToCollect = await getSetToCollectUseCase.execute(id);

        return response.json(setToCollect);
    }
}

class GetAllSetToCollectController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllSetToCollectUseCase = container.resolve(GetAllSetToCollectUseCase)

        const setToCollect = await getAllSetToCollectUseCase.execute();

        return response.json(setToCollect);
    }
}

export { GetSetToCollectController, GetAllSetToCollectController }