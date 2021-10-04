import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ICollectServiceDTO } from "../../dtos/ICollectServiceDTO";
import { CollectService } from "../../infra/typeorm/entities/CollectService";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class CreateCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
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
    }: ICollectServiceDTO): Promise<CollectService> {
        const collectService = new CollectService();

        const serviceId = await this.serviceRepository.findById(service_id);
        serviceId.step = 'Collect-service';
        await this.serviceRepository.Update(serviceId);

        Object.assign(collectService, {
            service_id: serviceId.id,
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
        });
        const createCollectService = await this.collectServiceRepository.Create(collectService);

        return createCollectService;

    }
}

export { CreateCollectServiceUseCase }