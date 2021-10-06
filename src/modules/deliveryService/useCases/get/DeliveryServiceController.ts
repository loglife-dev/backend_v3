import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllDeliveryServiceUseCase, GetDeliveryServiceUseCase } from "./DeliveryServiceUseCase";

class GetDeliveryServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getDeliveryServiceUseCase = container.resolve(GetDeliveryServiceUseCase);

        const delivery = await getDeliveryServiceUseCase.execute(id);

        return response.json(delivery);
    }
}

class GetAllDeliveryServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllDeliveryServiceUseCase = container.resolve(GetAllDeliveryServiceUseCase)

        const delivery = await getAllDeliveryServiceUseCase.execute();

        return response.json(delivery);
    }
}

export { GetDeliveryServiceController, GetAllDeliveryServiceController }