import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICustomerRepository } from "../../../customer/repositories/ICustomerRepository";
import { IServiceDTO } from "../../dtos/IServiceDTO";
import { Service } from "../../infra/typeorm/entities/Service";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
class UpdateServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository,
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

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

        const customerId = await this.customerRepository.findById(customer_id);
        
        service.step = step;
        service.customer_id = customer_id;
        service.group_id = group_id;

        
        const updateService =  await this.serviceRepository.Update({
            ...service,
            customerId,
        });

        return updateService;
    }
}
export { UpdateServiceUseCase }