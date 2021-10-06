import { inject, injectable } from "tsyringe";
import { DeliveryService } from "../../infra/typeorm/entities/DeliveryService";
import { IDeliveryServiceRepository } from "../../repositories/IDeliveryServiceRepository";

@injectable()
class GetDeliveryServiceUseCase {
    constructor(
        @inject("DeliveryServiceRepository")
        private readonly deliveryServiceRepository: IDeliveryServiceRepository) { }

    async execute(id: string): Promise<DeliveryService> {
        const delivery = await this.deliveryServiceRepository.findById(id)

        return delivery;
    }
}

@injectable()
class GetAllDeliveryServiceUseCase {
    constructor(
        @inject("DeliveryServiceRepository")
        private readonly deliveryServiceRepository: IDeliveryServiceRepository) { }

    async execute(): Promise<DeliveryService[]> {
        const delivery = await this.deliveryServiceRepository.Get()

        return delivery;
    }
}

export { GetDeliveryServiceUseCase, GetAllDeliveryServiceUseCase };