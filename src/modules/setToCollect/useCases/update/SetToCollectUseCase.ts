import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressRepository } from "../../../address/repositories/IAddressRepository";
import { IDriverRepository } from "../../../driver/repositories/IDriverRepository";
import { IProviderRepository } from "../../../provider/repositories/IProviderRepository";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ISetToCollectDTO } from "../../dtos/ISetToCollectDTO";
import { SetToCollect } from "../../infra/typeorm/entities/SetToCollect";
import { ISetToCollectRepository } from "../../repositories/ISetToCollectRepository";

@injectable()
class UpdateSetToCollectUseCase {
    constructor(
        @inject("SetToCollectRepository")
        private readonly setToCollectRepository: ISetToCollectRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository,
        @inject("AddressRepository")
        private readonly addressRepository: IAddressRepository,
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository,
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

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

        const serviceId = await this.serviceRepository.findById(service_id);

        if (!serviceId) {
            throw new AppError("ServiceId does not exists!");
        }

        const addressId = await this.addressRepository.findById(address_id);
        const providerId = await this.providerRepository.findById(provider_id);

        const driverId = await this.driverRepository.findById(driver_id);

        if (!driverId) {
            throw new AppError("DriverId does not exists!");
        }

        setToCollect.service_id = service_id;
        setToCollect.step = step;
        setToCollect.address_id = address_id;
        setToCollect.provider_id = provider_id;
        setToCollect.driver_id = driver_id;
        setToCollect.observation = observation;

        const updateSetToCollect = await this.setToCollectRepository.Update({
            ...setToCollect,
            serviceId,
            addressId,
            providerId,
            driverId,
        });

        return updateSetToCollect;
    }
}
export { UpdateSetToCollectUseCase }