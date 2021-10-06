import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ILandingServiceDTO } from "../../dtos/ILandingServiceDTO";
import { LandingService } from "../../infra/typeorm/entities/LandingService";
import { ILandingServiceRepository } from "../../repositories/ILandingServiceRepository";

@injectable()
class UpdateLandingServiceUseCase {
    constructor(
        @inject("LandingServiceRepository")
        private readonly landingServiceRepository: ILandingServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        id,
        service_id,
        step,
        landing_volume,
        box_break,
        cargo_photo,
        departure_latitude,
        departure_longitude,
        departure_timestamp,
        observation,
    }: ILandingServiceDTO): Promise<LandingService> {
        const landingService = await this.landingServiceRepository.findById(id)

        if (!landingService) {
            throw new AppError("LandingService does not exists!");
        }

        const serviceId = await this.serviceRepository.findById(id)
        serviceId.step = 'toDeliveryService'
        await this.serviceRepository.Update(serviceId);

        landingService.step = step;
        landingService.landing_volume = landing_volume;
        landingService.box_break = box_break;
        landingService.cargo_photo = cargo_photo;
        landingService.departure_latitude = departure_latitude;
        landingService.departure_longitude = departure_longitude;
        landingService.departure_timestamp = departure_timestamp;
        landingService.observation = observation;

        const updateLanding = await this.landingServiceRepository.Update(landingService);

        return updateLanding;
    }
}

export { UpdateLandingServiceUseCase }