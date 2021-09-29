import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ServiceRepository } from '../../../service/infra/typeorm/repositories/ServiceRepository';
import { SetToCollectRepository } from '../../../setToCollect/infra/typeorm/repositories/SetToCollectRepository';
import { UpdateCollectServiceUseCase } from './CollectServiceUseCase';

class UpdateCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceRepository = new ServiceRepository();
        const setToCollectRepository = new SetToCollectRepository();
        const { id } = request.params
        const { service_id, collect_id, arrival_latitude, arrival_longitude, arrival_timestamp, responsible_name, responsible_cpf, volume,
            sample, problem, box_photo, content_declaration, receipt_photo, departure_latitude, departure_longitude, departure_timestamp, unsuccess_latitude,
            unsuccess_longitude, unsuccess_timestamp, observation, step, hasUnsuccess } = request.body;

        const service = await serviceRepository.findById(service_id);
        service.step = step
        await serviceRepository.Update(service);

        const setCollect = await setToCollectRepository.findById(collect_id);
        setCollect.step = hasUnsuccess ? 'UNSUCCESS' : 'DONE'
        await setToCollectRepository.Update(setCollect);

        const updateCollectServiceUseCase = container.resolve(UpdateCollectServiceUseCase)

        const collectService = await updateCollectServiceUseCase.execute({
            id,
            service_id,
            collect_id,
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