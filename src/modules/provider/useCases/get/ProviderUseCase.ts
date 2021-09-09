import { inject, injectable } from "tsyringe";
import { IProviderRepository } from "../../repositories/IProviderRepository";
import { Provider } from "../../infra/typeorm/entities/Provider";

@injectable()
class GetProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository) { }

    async execute(id: string): Promise<Provider> {
        const provider = await this.providerRepository.findById(id)

        return provider;
    }
}

@injectable()
class GetAllProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository) { }

    async execute(): Promise<Provider[]> {
        const provider = await this.providerRepository.Get()

        return provider;
    }
}

export { GetProviderUseCase, GetAllProviderUseCase };