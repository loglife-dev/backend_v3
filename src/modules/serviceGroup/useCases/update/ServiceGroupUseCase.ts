import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ServiceGroup } from "../../infra/typeorm/entities/ServiceGroup";
import { IServiceGroupRepository } from "../../repositories/IServiceGroupRepository";

@injectable()
class UpdateServiceGroupUseCase {
    constructor(
        @inject("ServiceGroupRepository")
        private readonly serviceGroupRepository: IServiceGroupRepository) { }

    async execute({
        id,
        service_list,
    }: IServiceGroupDTO): Promise<ServiceGroup> {
        const group = await this.serviceGroupRepository.findById(id);

        if (!group) {
            throw new AppError("ServiceGroup does not exists!");
        }

        Object.assign(group, {
            id,
            service_list,
        });
        const updateServiceGroup = await this.serviceGroupRepository.Update(group);

        return updateServiceGroup;
    }
}
export { UpdateServiceGroupUseCase }