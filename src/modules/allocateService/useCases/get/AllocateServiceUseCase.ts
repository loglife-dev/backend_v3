import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { AllocateService } from "../../infra/typeom/entities/AllocateService";
import { IAllocateServiceRepository } from "../../repositories/IAllocateServiceRepository";

@injectable()
class GetAllocateServiceUseCase {
    constructor(
        @inject("AllocateServiceRepository")
        private readonly allocateServiceRepository: IAllocateServiceRepository) { }

    async execute(id: string): Promise<AllocateService> {
        const allocate = await this.allocateServiceRepository.findById(id)

        if (!allocate) {
            throw new AppError("AllocateService does not exists.")
        }

        return allocate;
    }
}

@injectable()
class GetAllAllocateServiceUseCase {
    constructor(
        @inject("AllocateServiceRepository")
        private readonly allocateServiceRepository: IAllocateServiceRepository) { }

    async execute(): Promise<AllocateService[]> {
        const allocate = await this.allocateServiceRepository.Get()

        return allocate;
    }
}

export { GetAllocateServiceUseCase, GetAllAllocateServiceUseCase };