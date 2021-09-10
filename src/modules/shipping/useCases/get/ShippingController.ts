import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllShippingUseCase, GetShippingUseCase } from "./ShippingUseCase";



class GetShippingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getShippingnUseCase = container.resolve(GetShippingUseCase);

        const shipping = await getShippingnUseCase.execute(id);

        return response.json(shipping);
    }
}

class GetAllShippingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllShippingUseCase = container.resolve(GetAllShippingUseCase)

        const shipping = await getAllShippingUseCase.execute()

        return response.json(shipping);
    }
}

export { GetShippingController, GetAllShippingController }