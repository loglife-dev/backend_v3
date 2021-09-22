import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ServiceGroup } from "../../infra/typeorm/entities/ServiceGroup";
import { IServiceGroupRepository } from "../../repositories/IServiceGroupRepository";

@injectable()
class GetServiceGroupUseCase {
    constructor(
        @inject("ServiceGroupRepository")
        private readonly serviceGroupRepository: IServiceGroupRepository) { }

    async execute(id: string): Promise<ServiceGroup> {
        const group = await this.serviceGroupRepository.findById(id)

        if (!group) {
            throw new AppError("ServiceGroup does not exists.", 400)
        }

        return group;
    }
}

@injectable()
class GetAllServiceGroupUseCase {
    constructor(
        @inject("ServiceGroupRepository")
        private readonly serviceGroupRepository: IServiceGroupRepository) { }

    async execute(): Promise<ServiceGroup[]> {
        const group = await this.serviceGroupRepository.Get()

        return group;
    }
}

export { GetServiceGroupUseCase, GetAllServiceGroupUseCase };