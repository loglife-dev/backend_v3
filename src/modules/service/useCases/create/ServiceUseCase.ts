import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceDTO } from "../../dtos/IServiceDTO";
import { Service } from "../../infra/typeorm/entities/Service";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
class CreateServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        protocol,
        step,
        customer_id,
        collect_date,
    }: IServiceDTO): Promise<Service> {

        if (step == "" || customer_id == "") {
            throw new AppError("fill in all fields")
        }

        const protocoll = await this.serviceRepository.findByProtocol(protocol)

        if (protocoll) {
            throw new AppError('Protocol already exists');
        }
        const service = new Service();

        Object.assign(service, {
            protocol,
            step,
            customer_id,
            collect_date,
        });
        const createService = await this.serviceRepository.Create(service);

        return createService;

    }
}
export { CreateServiceUseCase }