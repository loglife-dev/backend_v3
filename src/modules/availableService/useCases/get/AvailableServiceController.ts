import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { AvailableService } from "../../infra/typeorm/entities/AvailableService";
import { IAvailableServiceRepository } from "../../repositories/IAvaiableServiceRepository";

@injectable()
class GetAvailableServiceUseCase {
    constructor(
        @inject("AvailableServiceRepository")
        private readonly availableServiceRepository: IAvailableServiceRepository) { }

    async execute(id: string): Promise<AvailableService> {
        const available = await this.availableServiceRepository.findById(id)

        if (!available) {
            throw new AppError("AvailableService does not exists.")
        }

        return available;
    }
}

@injectable()
class GetAllAvailableServiceUseCase {
    constructor(
        @inject("AvailableServiceRepository")
        private readonly availableServiceRepository: IAvailableServiceRepository) { }

    async execute(): Promise<AvailableService[]> {
        const available = await this.availableServiceRepository.Get()

        return available;
    }
}

export { GetAvailableServiceUseCase, GetAllAvailableServiceUseCase };