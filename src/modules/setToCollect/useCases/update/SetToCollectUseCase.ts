import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISetToCollectDTO } from "../../dtos/ISetToCollectDTO";
import { SetToCollect } from "../../infra/typeorm/entities/SetToCollect";
import { ISetToCollectRepository } from "../../repositories/ISetToCollectRepository";

@injectable()
class UpdateSetToCollectUseCase {
    constructor(
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository) { }
    async execute({
        id,
        service_id,
        step,
        address_id,
        provider_id,
        driver_id,
        observation,
    }: ISetToCollectDTO): Promise<SetToCollect> {
        const setToCollect = await this.setToCollectRepository.findById(id);

        if (!setToCollect) {
            throw new AppError("SetToCollect does not exists!");
        }

        Object.assign(setToCollect, {
            id,
            service_id,
            step,
            address_id,
            provider_id,
            driver_id,
            observation,
        });
        const updateSetToCollect = await this.setToCollectRepository.Update(setToCollect);

        return updateSetToCollect;
    }
}
export { UpdateSetToCollectUseCase }