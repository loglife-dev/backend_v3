import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressRepository } from "../../../address/repositories/IAddressRepository";
import { IDriverRepository } from "../../../driver/repositories/IDriverRepository";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ICollectServiceDTO } from "../../dtos/ICollectServiceDTO";
import { CollectService } from "../../infra/typeorm/entities/CollectService";
import { ICollectServiceRepository } from "../../repositories/ICollectServiceRepository";

@injectable()
class UpdateCollectServiceUseCase {
    constructor(
        @inject("CollectServiceRepository")
        private readonly collectServiceRepository: ICollectServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository,
        @inject("AddressRepository")
        private readonly addressRepository: IAddressRepository,
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute({
        service_id,
        address_id,
        driver_id,
        step,
        responsible_name,
        responsible_cpf,
        volume,
        sample,
        problem,
        box_photo,
        content_declaration,
        receipt_photo,
        departure_latitude,
        departure_longitude,
        departure_timestamp,
        unsuccess_latitude,
        unsuccess_longitude,
        unsuccess_timestamp,
        observation,
    }: ICollectServiceDTO): Promise<CollectService> {
        const collectService = await this.collectServiceRepository.findQuery(service_id, address_id)
       
        if (!collectService) {
            throw new AppError("CollectService does not exists!");
        }

        const addressId = await this.addressRepository.findById(address_id);

        if (!addressId) {
            throw new AppError("AddressId does not exists!");
        }

        const driverId = await this.driverRepository.findById(driver_id);

        if (!driverId) {
            throw new AppError("DriverId does not exists!");
        }

        const service = await this.serviceRepository.findById(service_id);
        service.step = 'toBoardService'
        await this.serviceRepository.Update(service);

        collectService.address_id = address_id,
        collectService.driver_id = driver_id,
        collectService.step = step;
        collectService.responsible_name = responsible_name;
        collectService.responsible_cpf = responsible_cpf;
        collectService.volume = volume;
        collectService.sample = sample;
        collectService.problem = problem;
        collectService.box_photo = box_photo;
        collectService.content_declaration = content_declaration;
        collectService.receipt_photo = receipt_photo;
        collectService.departure_latitude = departure_latitude;
        collectService.departure_longitude = departure_longitude;
        collectService.departure_timestamp = departure_timestamp;
        collectService.unsuccess_latitude = unsuccess_latitude;
        collectService.unsuccess_longitude = unsuccess_longitude;
        collectService.unsuccess_timestamp = unsuccess_timestamp;
        collectService.observation = observation;

        const updateCollectService = await this.collectServiceRepository.Update({
            ...collectService,
            addressId,
            driverId,
        })

        return updateCollectService;
    }
}
export { UpdateCollectServiceUseCase }