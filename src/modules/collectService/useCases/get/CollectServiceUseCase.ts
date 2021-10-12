import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CollectService } from "../../infra/typeorm/entities/CollectService";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class GetCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository) { }

    async execute(id: string): Promise<CollectService[]> {
        const collectService = await this.collectServiceRepository.findAllIds(id)

        if (!collectService) {
            throw new AppError("CollectService does not exists!")
        }

        return collectService;
    }
}

@injectable()
class GetAllCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository) { }

    async execute(): Promise<CollectService[]> {
        const collectService = await this.collectServiceRepository.Get()

        return collectService
    }
}


export { GetCollectServiceUseCase, GetAllCollectServiceUseCase }