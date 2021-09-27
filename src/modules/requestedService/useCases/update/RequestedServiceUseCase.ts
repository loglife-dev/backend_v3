import { request } from "express";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBranchRepository } from "../../../branch/repositories/IBranchRepository";
import { IBudgetRepository } from "../../../budget/repositories/IBudgetRepository";
import { ICollectorRepository } from "../../../collector/repositories/ICollectorRepository";
import { IProviderRepository } from "../../../provider/repositories/IProviderRepository";
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
        private readonly serviceRepository: IServiceRepository,
        @inject("BudgetRepository")
        private readonly budgetRepository: IBudgetRepository,
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository,
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository,
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository) { }

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

        const requested = await this.requestedServiceRepository.findById(id);

        if (!requested) {
            throw new AppError("RequestedService does not exists!");
        }

        const serviceId = await this.serviceRepository.findById(service_id);

        if (!serviceId) {
            throw new AppError("ServiceId does not exists!");
        }

        const budgetId = await this.budgetRepository.findById(budget_id);

        if (!budgetId) {
            throw new AppError("BudgetId does not exists!");
        }

        const sourceCollectorId = await this.collectorRepository.findById(source_collector_id);

        if (!sourceCollectorId) {
            throw new AppError("SourceCollectorId does not exists!");
        }

        const destinationCollectorId = await this.collectorRepository.findById(destination_collector_id)

        if (!destinationCollectorId) {
            throw new AppError("destinationCollectorId does not exists!");
        }

        const sourceBranchId = await this.branchRepository.findById(source_branch_id)

        if (!sourceBranchId) {
            throw new AppError("sourceBranchId does not exists!");
        }

        const destinationBranchId = await this.branchRepository.findById(destination_branch_id);

        if (!destinationBranchId) {
            throw new AppError("DestinationBranchId does not exists!");
        }

        const providerId = await this.providerRepository.findById(provider_id);

        requested.service_id = service_id;
        requested.budget_id = budget_id;
        requested.source_address_id = source_address_id;
        requested.destination_address_id = destination_address_id;
        requested.source_collector_id = source_collector_id;
        requested.destination_collector_id = destination_collector_id;
        requested.source_branch_id = source_branch_id;
        requested.destination_branch_id = destination_branch_id;
        requested.provider_id = provider_id;
        requested.deadline = deadline;
        requested.service_type = service_type;
        requested.franchising = franchising;
        requested.modal = modal;
        requested.vehicle = vehicle;
        requested.caixa_termica = caixa_termica;
        requested.embalagem_secundaria = embalagem_secundaria;
        requested.gelo_seco = gelo_seco;
        requested.gelox = gelox;
        requested.isopor3l = isopor3l;
        requested.isopor7l = isopor7l;
        requested.terciaria3l = terciaria3l;
        requested.terciaria8l = terciaria3l;
        requested.collect_date = collect_date;
        requested.collect_hour_start = collect_hour_start;
        requested.collect_hour_end = collect_hour_end;
        requested.delivery_date = delivery_date;
        requested.delivery_hour = delivery_hour;
        requested.observation = observation;

        const updateRequested = await this.requestedServiceRepository.Update({
            ...requested,
            serviceId,
            budgetId,
                      
        })

        return updateRequested;
    }
}

export { UpdateRequestedServiceUseCase }