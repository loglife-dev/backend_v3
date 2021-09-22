import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceGroupRepository } from "../../repositories/IServiceGroupRepository";

@injectable()
class DeleteServiceGroupUseCase {
    constructor(
        @inject("ServiceGroupRepository")
        private readonly serviceGroupRepository: IServiceGroupRepository) { }

    async execute(id: string): Promise<void> {
        const group = await this.serviceGroupRepository.findById(id);

        if (!group) {
            throw new AppError("ServiceGroup does not exists!");
        }
        await this.serviceGroupRepository.Delete(group);
    }
}

export { DeleteServiceGroupUseCase }