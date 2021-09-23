import { request } from "express";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Service } from "../../../service/infra/typeorm/entities/Service";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IRequestedServiceDTO } from "../../dtos/IRequestedServiceDTO";
import { RequestedService } from "../../infra/typeorm/entities/RequestedService";
import { IRequestedServiceRepository } from "../../repositories/IRequestdServiceRepository";

@injectable()
class UpdateRequestedServiceUseCase {
    constructor(
        @inject("RequestedServiceRepository")
        private readonly requestedServiceRepository: IRequestedServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        id,
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
      
        const requestedService = await this.requestedServiceRepository.findById(id);

        if (!requestedService) {
            throw new AppError("RequestedService does not exists!");
        }

        Object.assign(requestedService, {
            id,
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
        const updateRequestedService = await this.requestedServiceRepository.Update(requestedService);

        return requestedService;
    }
}

export { UpdateRequestedServiceUseCase }