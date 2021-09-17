import { inject, injectable } from "tsyringe";
import { SetToCollect } from "../../infra/typeorm/entities/SetToCollect";
import { ISetToCollectRepository } from "../../repositories/ISetToCollectRepository";

@injectable()
class GetSetToCollectUseCase {
    constructor(
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository) { }

    async execute(id: string): Promise<SetToCollect> {
        const setToCollect = await this.setToCollectRepository.findById(id)

        return setToCollect;
    }
}

@injectable()
class GetAllSetToCollectUseCase {
    constructor(
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository) { }

    async execute(): Promise<SetToCollect[]> {
        const setToCollect = await this.setToCollectRepository.Get()

        return setToCollect;
    }
}

export { GetSetToCollectUseCase, GetAllSetToCollectUseCase };