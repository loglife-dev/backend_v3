import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class DeleteCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository) { }

    async execute(id: string): Promise<void> {
        const collectService = await this.collectServiceRepository.findById(id)

        if (!collectService) {
            throw new AppError("CollectService does not exists!");
        }
        await this.collectServiceRepository.Delete(collectService);
    }
}

export { DeleteCollectServiceUseCase }