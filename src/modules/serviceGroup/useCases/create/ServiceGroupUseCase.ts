import { inject, injectable } from "tsyringe";
import { ServiceGroup } from "../../infra/typeorm/entities/ServiceGroup";
import { IServiceGroupRepository } from "../../repositories/IServiceGroupRepository";

@injectable()
class CreateServiceGroupUseCase {
    constructor(
        @inject("ServiceGroupRepository")
        private readonly serviceGroupRepository: IServiceGroupRepository) { }

    async execute({
        service_list,
    }: IServiceGroupDTO): Promise<ServiceGroup> {
       const serviceGroup = new ServiceGroup();

       Object.assign(serviceGroup, {
           service_list,
       });
       const createGroup = await this.serviceGroupRepository.Create(serviceGroup);

       return createGroup;
    }
}

export { CreateServiceGroupUseCase }