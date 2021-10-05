import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBoardServiceRepository } from "../../../boardService/repositories/IBoardServiceRepository";
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
        private serviceRepository: IServiceRepository,
        @inject("boardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository) { }

    async execute({
        service_id,
        allocated_filight,
        availability_date,
        availability_hour,
        observation,
    }: IAllocateServiceDTO): Promise<AllocateService> {

        const serviceId = await this.serviceRepository.findById(service_id);
        serviceId.step = 'allocate-service'
        await this.serviceRepository.Update(serviceId)

        const boardService = await this.boardServiceRepository.findById(service_id);
        boardService.step = 'allocate'
        await this.boardServiceRepository.Update(boardService);

        const allocateService = new AllocateService();
        Object.assign(allocateService, {
            service_id,
            allocated_filight,
            availability_date,
            availability_hour,
            observation,
        })
        const createAllocate = await this.allocateServiceRepository.Create(allocateService);

        return createAllocate;
    }
}

export { CreateAllocateServiceUseCase }