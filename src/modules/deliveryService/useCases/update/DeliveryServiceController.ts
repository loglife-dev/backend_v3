import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateDeliveryServiceUseCase } from "./DeliveryServiceUseCase";

class UpdateDeliveryServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const files = request.files as any;
        const { responsible_name, responsible_cpf, delivery_volume, problem, departure_latitude,
            departure_longitude, departure_timestamp, observation } = request.body;

        let box_photo = ''
        let content_declaration = ''

        for (let file of files) {
            
            if (file.fieldname === 'box_photo') {
                box_photo = file.key
            }
            if (file.fieldname === 'content_declaration') {
                content_declaration = file.key
            }
        }

        const updateDeliveryServiceUseCase = container.resolve(UpdateDeliveryServiceUseCase);

        const updateDelivery = await updateDeliveryServiceUseCase.execute({
            id,
            responsible_name,
            responsible_cpf,
            delivery_volume,
            problem,
            box_photo: box_photo,
            content_declaration: content_declaration,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            observation,
        })
        return response.status(201).json(updateDelivery);
    }
}

export { UpdateDeliveryServiceController }