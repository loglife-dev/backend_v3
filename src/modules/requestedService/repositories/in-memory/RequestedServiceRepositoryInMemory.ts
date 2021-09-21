import { IRequestedServiceDTO } from "../../dtos/IRequestedServiceDTO";
import { RequestedService } from "../../infra/typeorm/entities/RequestedService";
import { IRequestedServiceRepository } from "../IRequestdServiceRepository";



class RequestedServiceRepositoryInMemory implements IRequestedServiceRepository {
    requestedServices: RequestedService[] = [];

    async Get(): Promise<RequestedService[]> {
        const all = this.requestedServices;
        return all;
    }

    async findById(id: string): Promise<RequestedService> {
        const requested = this.requestedServices.find((requested) => requested.id === id);

        return requested;
    }

    async Create({
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
        const requestedService = new RequestedService();

        Object.assign(requestedService, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            budget_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            source_address_id,
            destination_address_id,
            source_collector_id,
            destination_collector_id,
            source_branch_id,
            destination_branch_id,
            provider_id: "fee4d482-744c-48a4-aa23-881859bb6074",
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
        this.requestedServices.push(requestedService);


        return requestedService;

    }

    async Update(requestedService: RequestedService): Promise<RequestedService> {
        this.requestedServices.push(requestedService);

        return requestedService;
    }

    async Delete(requestedService: RequestedService): Promise<void> {
        const findIndex = this.requestedServices.findIndex(requestedService => requestedService === requestedService);

        this.requestedServices.splice(findIndex, 1);
    }

}
export { RequestedServiceRepositoryInMemory }