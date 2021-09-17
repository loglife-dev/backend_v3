import { inject, injectable } from "tsyringe";
import { IProviderDTO } from "../../dtos/IProviderDTO";
import { IProviderRepository } from "../../repositories/IProviderRepository";
import { Provider } from "../../infra/typeorm/entities/Provider";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class UpdateProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository) { }

    async execute({
        id,
        company_name,
        trading_name,
        hub_id,
        email,
        cnpj,
        material,
        unit_cost,
        payment_conditional,
        day_expiration_1,
        day_expiration_2,
        payment_type,
        cellphone,
        telephone,
        cep,
        state,
        city,
        street,
        number,
        neighborhood,
        complement,
        business_open,
        business_close,
        saturday_open,
        saturday_close,
        sunday_open,
        sunday_close,
        observation,
    }: IProviderDTO): Promise<Provider> {
        const provider = await this.providerRepository.findById(id)

        if (!provider) {
            throw new AppError("Provider does not exists!");
        }

        const providerEmailExists = await this.providerRepository.findByEmail(email);

        if (providerEmailExists && provider.id !== id) {
            throw new AppError("Email already exists!");
        }

        const cnpjAlreadyExists = await this.providerRepository.findByCnpj(cnpj);

        if (cnpjAlreadyExists && provider.id !== id){
            throw new AppError("Cnpj already exists!")
        }

        Object.assign(provider, {
            id,
            company_name,
            trading_name,
            hub_id,
            email,
            cnpj,
            material,
            unit_cost,
            payment_conditional,
            day_expiration_1,
            day_expiration_2,
            payment_type,
            cellphone,
            telephone,
            cep,
            state,
            city,
            street,
            number,
            neighborhood,
            complement,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation,
        });
        const updateProvider = await this.providerRepository.Update(provider);

        return updateProvider;

    }
}
export { UpdateProviderUseCase }