import { Request, Response } from "express";
import { container } from "tsyringe";
import { ServiceRepository } from "../../../service/infra/typeorm/repositories/ServiceRepository";
import { CreateCollectServiceUseCase } from "./CollectServiceUseCase";

class CreateCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceRepository = new ServiceRepository();
        const { service_id, arrival_latitude, arrival_longitude, arrival_timestamp, responsible_name, responsible_cpf, volume,
            sample, problem, box_photo, content_declaration, receipt_photo, departure_latitude, departure_longitude, departure_timestamp, unsuccess_latitude,
            unsuccess_longitude, unsuccess_timestamp, observation, hasValidate } = request.body;

        const serviceId = await serviceRepository.findById(service_id);
        serviceId.step = 'Collect-service';
        await serviceRepository.Update(serviceId);

        const createCollectServiceUseCase = container.resolve(CreateCollectServiceUseCase);

        const collectService = await createCollectServiceUseCase.execute({
            service_id,
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
        });

        const collectServiceResponse = {
            service_id: collectService.service_id,
            arrival_latitude: collectService.arrival_latitude,
            arrival_longitude: collectService.arrival_longitude,
            arrival_timestamp: collectService.arrival_timestamp,
            responsible_name: collectService.responsible_name,
            responsible_cpf: collectService.responsible_cpf,
            volume: collectService.volume,
            sample: collectService.sample,
            problem: collectService.problem,
            box_photo: collectService.box_photo,
            content_declaration: collectService.content_declaration,
            receipt_photo: collectService.receipt_photo,
            departure_latitude: collectService.departure_latitude,
            departure_longitude: collectService.departure_longitude,
            departure_timestamp: collectService.departure_timestamp,
            unsuccess_latitude: collectService.unsuccess_latitude,
            unsuccess_longitude: collectService.unsuccess_longitude,
            unsuccess_timestamp: collectService.unsuccess_timestamp,
            observation: collectService.observation,
        }

        return response.status(201).json(collectServiceResponse);
    }
}
export { CreateCollectServiceController }


