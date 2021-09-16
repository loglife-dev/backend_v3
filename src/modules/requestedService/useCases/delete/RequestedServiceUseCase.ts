import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRequestedServiceRepository } from "../../repositories/IRequestdServiceRepository";

@injectable()
class DeleteRequestedServiceUseCase {
    constructor(
        @inject("RequestedServiceRepository")
        private readonly requestedServiceRepository: IRequestedServiceRepository) { }

    async execute(id: string): Promise<void> {
        const requested = await this.requestedServiceRepository.findById(id)

        if (!requested) {
            throw new AppError("RequestedService does not exists!");
        }

        await this.requestedServiceRepository.Delete(requested);

    }
}

export { DeleteRequestedServiceUseCase }