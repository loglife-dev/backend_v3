import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAvaiableServiceDTO } from "../../dtos/IAvailableServiceDTO";
import { AvailableService } from "../../infra/typeorm/entities/AvailableService";
import { IAvailableServiceRepository } from "../../repositories/IAvaiableServiceRepository";

@injectable()
class UpdateAvailableServiceUseCase {
    constructor(
        @inject("AvailableServiceRepository")
        private readonly availableServiceRepository: IAvailableServiceRepository) { }

    async execute({
        id,
        landing_availability_date,
        landing_availability_hour,
        observation,
    }: IAvaiableServiceDTO): Promise<AvailableService> {
        const available = await this.availableServiceRepository.findById(id);

        if (!available) {
            throw new AppError('AvailableService does not exists!')
        }

        available.landing_availability_date = landing_availability_date,
        available.landing_availability_hour = landing_availability_hour;
        available.observation = observation;

        const updateAvailable = await this.availableServiceRepository.Update(available);

        return updateAvailable;
    }

}

export { UpdateAvailableServiceUseCase }