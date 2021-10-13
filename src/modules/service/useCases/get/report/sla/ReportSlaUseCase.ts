import { inject, injectable } from "tsyringe";
import { handleSla, handleSlaTransfer } from "../../../../../../utils/report/Sla";
import { ICollectServiceRepository } from "../../../../../collectService/repositories/ICollectServiceRepository";
import { IDeliveryServiceRepository } from "../../../../../deliveryService/repositories/IDeliveryServiceRepository";
import { ServiceRepository } from "../../../../infra/typeorm/repositories/ServiceRepository";

@injectable()
class GetReportSlaUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: ServiceRepository,
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository,
        @inject("DeliveryServiceRepository")
        private readonly deliveryServiceRepository: IDeliveryServiceRepository) { }

    async execute({
        service_id,
        startFilter,
        endFilter,
    }): Promise<any[]> {
        const services = await this.serviceRepository.filterSla(startFilter, endFilter)

        const collectService = await this.collectServiceRepository.findAllIds(service_id)

        const deliveryService = await this.deliveryServiceRepository.findAllIds(service_id);

        const serviceList = services.map(service => {
            if (service.step === 'finishedService') {
                return service;
            }
        })

        const response = serviceList.map(async service => {
            const estimatedTimeAvailable = service.requestedServiceId.service_type.toUpperCase() === 'FRACIONADO' ? service.allocateServiceId.availability_hour : '-';
            const realTimeAvailable = service.requestedServiceId.service_type.toUpperCase() === 'FRACIONADO' ? service.availableServiceId.landing_availability_hour : '-';

            console.log({
                protocol: service.protocol,
                customer: service.customerId.trading_firstname,
                step: service.step,
                startFilter: startFilter,
                endFilter: endFilter,
                collectDate: service.requestedServiceId.collect_date,
                sourceBranch: service.requestedServiceId.source_branch_id,
                destinationBranch: service.requestedServiceId.destination_branch_id,
                estimatedTimeAvailable: estimatedTimeAvailable,
                realTimeAvailable: realTimeAvailable,
                slaTransfer: await handleSlaTransfer(service.requestedServiceId.service_type, realTimeAvailable, estimatedTimeAvailable),
                sourceCollector: service.requestedServiceId.source_collector_id,
                expectedCollectTime: service.requestedServiceId.collect_hour_end,
                slaCollect: await handleSla(collectService, service.requestedServiceId.collect_hour_end),
                destinationCollector: service.requestedServiceId.destination_collector_id,
                expectedDeliveryTime: service.requestedServiceId.delivery_hour,
                slaDelivery: await handleSla(deliveryService, service.requestedServiceId.delivery_hour),

            })
        })


        return serviceList;
    }

}

export { GetReportSlaUseCase }

