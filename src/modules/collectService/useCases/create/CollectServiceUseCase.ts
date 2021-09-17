import { inject, injectable } from "tsyringe";
import { ICollectServiceDTO } from "../../dtos/ICollectServiceDTO";
import { CollectService } from "../../infra/typeorm/entities/CollectService";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class CreateCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository) { }

    async execute({
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
        const collectService = new CollectService();

        Object.assign(collectService, {
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
        const createCollectService = await this.collectServiceRepository.Create(collectService);

        return createCollectService;

    }
}

export { CreateCollectServiceUseCase }