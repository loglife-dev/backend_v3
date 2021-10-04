import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ServiceRepository } from '../../../service/infra/typeorm/repositories/ServiceRepository';
import { UpdateCollectServiceUseCase } from './CollectServiceUseCase';

class UpdateCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { service_id, address_id, driver_id,  step, arrival_latitude, arrival_longitude, arrival_timestamp, responsible_name, responsible_cpf, volume,
            sample, problem, box_photo, content_declaration, receipt_photo, departure_latitude, departure_longitude, departure_timestamp, unsuccess_latitude,
            unsuccess_longitude, unsuccess_timestamp, observation } = request.body;
    
        const updateCollectServiceUseCase = container.resolve(UpdateCollectServiceUseCase)

        const collectService = await updateCollectServiceUseCase.execute({
            service_id,
            address_id,
            driver_id,
            step,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            responsible_name,
            responsible_cpf,
            volume,
            sample,
            problem,
            box_photo,
            content_declaration,
            receipt_photo,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            unsuccess_latitude,
            unsuccess_longitude,
            unsuccess_timestamp,
            observation,
        })
        return response.json(collectService);
    }
}


export { UpdateCollectServiceController }