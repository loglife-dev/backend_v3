import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAllocateServiceDTO } from "../../dtos/IAllocateServiceDTO";
import { AllocateService } from "../../infra/typeom/entities/AllocateService";
import { IAllocateServiceRepository } from "../../repositories/IAllocateServiceRepository";

@injectable()
class UpdateAllocateServiceUseCase {
    constructor(
        @inject("AllocateServiceRepository")
        private readonly allocateServiceRepository: IAllocateServiceRepository) { }

    async execute({
        id,
        allocated_flight,
        availability_date,
        availability_hour,
        observation,
    }: IAllocateServiceDTO): Promise<AllocateService>{
        const allocateService = await this.allocateServiceRepository.findById(id)

        if(!allocateService){
            throw new AppError('AllocateService does not exists!');
        }
        
        allocateService.allocated_flight = allocated_flight;
        allocateService.availability_date = availability_date;
        allocateService.availability_hour = availability_hour;
        allocateService.observation = observation;

        const updateAllocate = await this.allocateServiceRepository.Update(allocateService);

        return updateAllocate;        
    }
}

export { UpdateAllocateServiceUseCase }