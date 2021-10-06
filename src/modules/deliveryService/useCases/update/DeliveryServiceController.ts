import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateDeliveryServiceUseCase } from "./DeliveryServiceUseCase";

class UpdateDeliveryServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { step, responsible_name, responsible_cpf, delivery_volume, problem, box_photo, content_declaration, departure_latitude,
            departure_longitude, departure_timestamp, observation } = request.body;

        const updateDeliveryServiceUseCase = container.resolve(UpdateDeliveryServiceUseCase);

        const updateDelivery = await updateDeliveryServiceUseCase.execute({
            id,
            step,
            responsible_name,
            responsible_cpf,
            delivery_volume,
            problem,
            box_photo,
            content_declaration,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            observation,
        })
        return response.status(201).json(updateDelivery);
    }
}

export { UpdateDeliveryServiceController }