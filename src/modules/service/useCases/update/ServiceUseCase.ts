import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceDTO } from "../../dtos/IServiceDTO";
import { Service } from "../../infra/typeorm/entities/Service";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
class UpdateServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        id,
        step,
        customer_id,
        group_id,
    }: IServiceDTO): Promise<Service> {
        const service = await this.serviceRepository.findById(id);

        if (!service) {
            throw new AppError("Service does not exists!");
        }

        Object.assign(service, {
            id,
            step,
            customer_id,
            group_id,

        });
        const updateService = await this.serviceRepository.Update(service);

        return updateService;
    }
}
export { UpdateServiceUseCase }