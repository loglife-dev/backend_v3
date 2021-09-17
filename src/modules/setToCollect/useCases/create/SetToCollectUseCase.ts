import { inject, injectable } from "tsyringe";
import { ISetToCollectDTO } from "../../dtos/ISetToCollectDTO";
import { SetToCollect } from "../../infra/typeorm/entities/SetToCollect";
import { ISetToCollectRepository } from "../../repositories/ISetToCollectRepository";

@injectable()
class CreateSetToCollectUseCase {
    constructor(
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository) { }

    async execute({
        service_id,
        step,
        address_id,
        provider_id,
        driver_id,
        observation,
    }: ISetToCollectDTO): Promise<SetToCollect> {
        const setToCollect = new SetToCollect();

        Object.assign(setToCollect, {
            service_id,
            step,
            address_id,
            provider_id,
            driver_id,
            observation
        });
        const createSetToCollect = await this.setToCollectRepository.Create(setToCollect);

        return createSetToCollect;
    }
}
export { CreateSetToCollectUseCase }