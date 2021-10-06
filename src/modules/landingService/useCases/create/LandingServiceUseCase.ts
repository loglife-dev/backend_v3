import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ILandingServiceDTO } from "../../dtos/ILandingServiceDTO";
import { LandingService } from "../../infra/typeorm/entities/LandingService";
import { ILandingServiceRepository } from "../../repositories/ILandingServiceRepository";

@injectable()
class CreateLandingServiceUseCase {
    constructor(
        @inject("LandingServiceRepository")
        private readonly landingServiceRepository: ILandingServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        service_id,
        address_id,
        driver_id,
        step,
        arrival_latitude,
        arrival_longitude,
        arrival_timestamp,
        landing_volume,
        box_break,
        cargo_photo,
        departure_latitude,
        departure_longitude,
        departure_timestamp,
        observation,
    }: ILandingServiceDTO): Promise<LandingService> {
        const landingService = new LandingService();

        const serviceId = await this.serviceRepository.findById(service_id);
        serviceId.step = 'landingService'
        await this.serviceRepository.Update(serviceId);

        Object.assign(landingService, {
            service_id,
            address_id,
            driver_id,
            step,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            landing_volume,
            box_break,
            cargo_photo,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            observation,
        });
        const createLanding = await this.landingServiceRepository.Create(landingService);

        return createLanding;
    }
}
export { CreateLandingServiceUseCase }