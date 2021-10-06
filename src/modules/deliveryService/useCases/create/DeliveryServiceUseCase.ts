import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IDeliveryServiceDTO } from "../../dtos/IDeliveryServiceDTO";
import { DeliveryService } from "../../infra/typeorm/entities/DeliveryService";
import { IDeliveryServiceRepository } from "../../repositories/IDeliveryServiceRepository";

@injectable()
class CreateDeliveryServiceUseCase {
    constructor(
        @inject("DeliveryServiceRepository")
        private readonly deliveryServiceRepository: IDeliveryServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        service_id,
        address_id,
        driver_id,
        arrival_latitude,
        arrival_longitude,
        arrival_timestamp,
    }: IDeliveryServiceDTO): Promise<DeliveryService> {
        const deliveryService = new DeliveryService();

        const serviceId = await this.serviceRepository.findById(service_id);
        serviceId.step = 'deliveringService'
        await this.serviceRepository.Update(serviceId);

        Object.assign(deliveryService, {
            service_id,
            address_id,
            driver_id,
            step: 'GOING',
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
        });
        const createDelivery = await this.deliveryServiceRepository.Create(deliveryService);

        return createDelivery;
    }
}

export { CreateDeliveryServiceUseCase }