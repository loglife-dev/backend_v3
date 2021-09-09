import { inject, injectable } from "tsyringe";
import { Collector } from "../../infra/typeorm/entities/Collector";
import { ICollectorRepository } from "../../repositories/ICollectorRepository";



@injectable()
class GetCollectorUseCase {
    constructor(
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

    async execute(id: string): Promise<Collector> {
        const collector = await this.collectorRepository.findById(id);

        return collector;
    }
}

@injectable()
class GetAllCollectorUseCase {
    constructor(
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

    async execute(): Promise<Collector[]> {
        const collector = await this.collectorRepository.Get()

        return collector;
    }
}

export { GetCollectorUseCase, GetAllCollectorUseCase };