import { inject, injectable } from "tsyringe";
import { IRequestedServiceDTO } from "../../dtos/IRequestedServiceDTO";
import { RequestedService } from "../../infra/typeorm/entities/RequestedService";
import { IRequestedServiceRepository } from "../../repositories/IRequestdServiceRepository";

@injectable()
class CreateRequestedServiceUseCase {
    constructor(
        @inject("RequestedServiceRepository")
        private readonly requestedServiceRepository: IRequestedServiceRepository) { }

    async execute({
        service_id,
        budget_id,
        source_address_id,
        destination_address_id,
        source_collector_id,
        destination_collector_id,
        source_branch_id,
        destination_branch_id,
        provider_id,
        deadline,
        service_type,
        franchising,
        modal,
        vehicle,
        caixa_termica,
        embalagem_secundaria,
        gelo_seco,
        gelox,
        isopor3l,
        isopor7l,
        terciaria3l,
        terciaria8l,
        collect_date,
        collect_hour_start,
        collect_hour_end,
        delivery_date,
        delivery_hour,
        observation,
    }: IRequestedServiceDTO): Promise<RequestedService> {
        const requestedService = new RequestedService();

        Object.assign(requestedService, {
            service_id,
            budget_id,
            source_address_id,
            destination_address_id,
            source_collector_id,
            destination_collector_id,
            source_branch_id,
            destination_branch_id,
            provider_id,
            deadline,
            service_type,
            franchising,
            modal,
            vehicle,
            caixa_termica,
            embalagem_secundaria,
            gelo_seco,
            gelox,
            isopor3l,
            isopor7l,
            terciaria3l,
            terciaria8l,
            collect_date,
            collect_hour_start,
            collect_hour_end,
            delivery_date,
            delivery_hour,
            observation,
        });
        const createRequestedService = await this.requestedServiceRepository.Create(requestedService);

        return requestedService;
    }

}

export { CreateRequestedServiceUseCase }