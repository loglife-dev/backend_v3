import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IAvaiableServiceDTO } from "../../dtos/IAvailableServiceDTO";
import { AvailableService } from "../../infra/typeorm/entities/AvailableService";
import { IAvailableServiceRepository } from "../../repositories/IAvaiableServiceRepository";

@injectable()
class CreateAvailableServiceUseCase {
    constructor(
        @inject("AvailableServiceRepository")
        private readonly availableServiceRepository: IAvailableServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        service_id,
        landing_availability_date,
        landing_availability_hour,
        observation,
    }: IAvaiableServiceDTO): Promise<AvailableService> {

        const serviceId = await this.serviceRepository.findById(service_id)
        serviceId.step = 'available-service'
        await this.serviceRepository.Update(serviceId);

        const availableService = new AvailableService();
        Object.assign(availableService, {
            service_id: serviceId,
            landing_availability_date,
            landing_availability_hour,
            observation,
        });
        const createAvailableService = await this.availableServiceRepository.Create(availableService);

        return createAvailableService;
    }
}
export { CreateAvailableServiceUseCase }