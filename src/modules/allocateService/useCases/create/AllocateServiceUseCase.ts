import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IAllocateServiceDTO } from "../../dtos/IAllocateServiceDTO";
import { AllocateService } from "../../infra/typeom/entities/AllocateService";
import { IAllocateServiceRepository } from "../../repositories/IAllocateServiceRepository";

@injectable()
class CreateAllocateServiceUseCase {
    constructor(
        @inject("AllocateServiceRepository")
        private readonly allocateServiceRepository: IAllocateServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        service_id,
        allocated_flight,
        availability_date,
        availability_hour,
        observation,
    }: IAllocateServiceDTO): Promise<AllocateService> {

        const serviceId = await this.serviceRepository.findById(service_id);
        serviceId.step = 'toAvailableService'
        await this.serviceRepository.Update(serviceId)

        const allocateService = new AllocateService();
        Object.assign(allocateService, {
            service_id,
            allocated_flight,
            availability_date,
            availability_hour,
            observation,
        })
        const createAllocate = await this.allocateServiceRepository.Create(allocateService);

        return createAllocate;
    } 
}

export { CreateAllocateServiceUseCase }