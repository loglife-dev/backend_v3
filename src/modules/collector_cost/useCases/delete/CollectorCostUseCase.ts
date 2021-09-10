import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorCostRepository } from "../../repositories/ICollectorCostRepository";


@injectable()
class DeleteCollectorCostUseCase {
    constructor(
        @inject("CollectorCostRepository")
        private readonly collectorCostRepository: ICollectorCostRepository) { }

    async execute(id: string): Promise<void> {
        const collectorCost = await this.collectorCostRepository.findById(id)

        if (!collectorCost) {
            throw new AppError("CollectorCost does not exists!");
        }
        await this.collectorCostRepository.Delete(collectorCost);
    }
}

export { DeleteCollectorCostUseCase }