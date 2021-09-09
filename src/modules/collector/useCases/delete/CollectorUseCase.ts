import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorRepository } from "../../repositories/ICollectorRepository";



@injectable()
class DeleteCollectorUseCase {
    constructor(
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

    async execute(id: string): Promise<void> {
        const collector = await this.collectorRepository.findById(id)

        if (!collector) {
            throw new AppError("Collector does not exists!");
        }

        await this.collectorRepository.Delete(collector);

    }
}

export { DeleteCollectorUseCase }