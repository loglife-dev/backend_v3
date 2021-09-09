import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IProviderRepository } from "../../repositories/IProviderRepository";


@injectable()
class DeleteProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository) { }

    async execute(id: string): Promise<void> {
        const provider = await this.providerRepository.findById(id)

        if (!provider) {
            throw new AppError("Provider does not exists!");
        }

        await this.providerRepository.Delete(provider);

    }
}

export { DeleteProviderUseCase }