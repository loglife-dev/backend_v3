import { inject, injectable } from "tsyringe";
import { RequestedService } from "../../infra/typeorm/entities/RequestedService";
import { IRequestedServiceRepository } from "../../repositories/IRequestdServiceRepository";

@injectable()
class GetRequestedServiceUseCase {
    constructor(
        @inject("RequestedServiceRepository")
        private readonly requestedServiceRepository: IRequestedServiceRepository) { }

    async execute(id: string): Promise<RequestedService> {
        const requested = await this.requestedServiceRepository.findById(id)

        return requested;
    }
}

@injectable()
class GetAllRequestedServiceUseCase {
    constructor(
        @inject("RequestedServiceRepository")
        private readonly requestedServiceRepository: IRequestedServiceRepository) { }

    async execute(): Promise<RequestedService[]> {
        const requested = await this.requestedServiceRepository.Get()

        return requested;
    }
}

export { GetRequestedServiceUseCase, GetAllRequestedServiceUseCase };