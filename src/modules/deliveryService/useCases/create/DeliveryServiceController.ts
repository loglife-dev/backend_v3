import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDeliveryServiceUseCase } from "./DeliveryServiceUseCase";

class CreateDeliveryServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, address_id, driver_id, arrival_latitude, arrival_longitude, arrival_timestamp } = request.body;

        const createDeliveryServiceUseCase = container.resolve(CreateDeliveryServiceUseCase);

        const createDelivery = await createDeliveryServiceUseCase.execute({
            service_id,
            address_id,
            driver_id,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp
        });
        return response.status(201).json(createDelivery);
    }
}
export { CreateDeliveryServiceController };