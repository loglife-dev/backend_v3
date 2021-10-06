import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IDeliveryServiceDTO } from "../../dtos/IDeliveryServiceDTO";
import { DeliveryService } from "../../infra/typeorm/entities/DeliveryService";
import { IDeliveryServiceRepository } from "../../repositories/IDeliveryServiceRepository";

@injectable()
class UpdateDeliveryServiceUseCase {
    constructor(
        @inject("DeliveryServiceRepository")
        private readonly deliveryServiceRepository: IDeliveryServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        id,
        step,
        responsible_name,
        responsible_cpf,
        delivery_volume,
        problem,
        box_photo,
        content_declaration,
        departure_latitude,
        departure_longitude,
        departure_timestamp,
        observation,
    }: IDeliveryServiceDTO): Promise<DeliveryService> {
        const delivery = await this.deliveryServiceRepository.findById(id);

        const serviceId = await this.serviceRepository.findById(id);
        serviceId.step = 'finishedService'
        await this.serviceRepository.Update(serviceId);

        delivery.step = step;
        delivery.responsible_name = responsible_name
        delivery.responsible_cpf = responsible_cpf;
        delivery.delivery_volume = delivery_volume;
        delivery.problem = problem;
        delivery.box_photo = box_photo;
        delivery.content_declaration = content_declaration;
        delivery.departure_latitude = departure_latitude;
        delivery.departure_longitude = departure_longitude;
        delivery.departure_timestamp = departure_timestamp;
        delivery.observation = observation;

        const updateDelivery = await this.deliveryServiceRepository.Update(delivery);

        return updateDelivery;
    }
}

export { UpdateDeliveryServiceUseCase }