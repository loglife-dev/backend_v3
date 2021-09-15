import { inject, injectable } from "tsyringe";
import { Service } from "../../infra/typeorm/entities/Service";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
class GetServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute(id: string): Promise<Service> {
        const service = await this.serviceRepository.findById(id)

        return service;
    }
}

@injectable()
class GetAllServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute(): Promise<Service[]> {
        const service = await this.serviceRepository.Get()

        return service;
    }
}

export { GetServiceUseCase, GetAllServiceUseCase };