import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectServiceDTO } from "../../dtos/ICollectServiceDTO";
import { CollectService } from "../../infra/typeorm/entities/CollectService";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class UpdateCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository) { }

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
        observation,
    }: ICollectServiceDTO): Promise<CollectService> {
        const collectService = await this.collectServiceRepository.findById(id);

        if (!collectService) {
            throw new AppError("CollectService does not exists!");
        }

        Object.assign(collectService, {
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
            observation,
        });
        const updateCollectService = await this.collectServiceRepository.Create(collectService);

        return collectService;
    }
}
export { UpdateCollectServiceUseCase }