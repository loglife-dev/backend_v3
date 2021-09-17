import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISetToCollectRepository } from "../../repositories/ISetToCollectRepository";

@injectable()
class DeleteSetToCollectUseCase {
    constructor(
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository) { }
        
    async execute(id: string): Promise<void> {
        const setCollect = await this.setToCollectRepository.findById(id);

        if (!setCollect) {
            throw new AppError("SetToCollect does not exists!");
        }
        await this.setToCollectRepository.Delete(setCollect);
    }
}
export { DeleteSetToCollectUseCase}