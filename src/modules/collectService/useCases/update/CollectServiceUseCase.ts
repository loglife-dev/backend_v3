import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ISetToCollectRepository } from "../../../setToCollect/repositories/ISetToCollectRepository";
import { ICollectServiceDTO } from "../../dtos/ICollectServiceDTO";
import { CollectService } from "../../infra/typeorm/entities/CollectService";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class UpdateCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository,
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository) { }

    async execute({
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
    }: ICollectServiceDTO): Promise<CollectService> {
        const collectService = await this.collectServiceRepository.findById(id);

        if (!collectService) {
            throw new AppError("CollectService does not exists!");
        }

        const serviceId = await this.serviceRepository.findById(service_id);

        if (!serviceId) {
            throw new AppError("ServiceId does not exists!");
        }

        const collectId = await this.setToCollectRepository.findById(collect_id);

        if (!collectId) {
            throw new AppError("CollectId does not exists!");
        }

        collectService.service_id = service_id;
        collectService.collect_id = collect_id;
        collectService.arrival_latitude = arrival_latitude;
        collectService.arrival_longitude = arrival_longitude;
        collectService.arrival_timestamp = arrival_timestamp;
        collectService.responsible_name = responsible_name;
        collectService.responsible_cpf = responsible_cpf;
        collectService.volume = volume;
        collectService.sample = sample;
        collectService.problem = problem;
        collectService.box_photo = box_photo;
        collectService.content_declaration = content_declaration;
        collectService.receipt_photo = receipt_photo;
        collectService.departure_latitude = departure_latitude;
        collectService.departure_longitude = departure_longitude;
        collectService.departure_timestamp = departure_timestamp;
        collectService.unsuccess_latitude = unsuccess_latitude;
        collectService.unsuccess_longitude = unsuccess_longitude;
        collectService.unsuccess_timestamp = unsuccess_timestamp;
        collectService.observation = observation;

        const updateCollectService = await this.collectServiceRepository.Create({
            ...collectService,
            serviceId,
            collectId,
        });

        return updateCollectService;
    }
}
export { UpdateCollectServiceUseCase }