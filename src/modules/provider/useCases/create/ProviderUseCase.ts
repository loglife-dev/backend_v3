import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IProviderDTO } from "../../dtos/IProviderDTO";
import { Provider } from "../../infra/typeorm/entities/Provider";
import { IProviderRepository } from "../../repositories/IProviderRepository";



@injectable()
class CreateProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository) { }

    async execute({
        company_name,
        trading_name,
        hub_id,
        email,
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

        if (company_name == "" || trading_name == "" || email == "" || material == "" || unit_cost == "" || payment_conditional == "" || day_expiration_1 == "" || day_expiration_2 == "" ||
            payment_type == "" || cellphone == "" || telephone == "" || cep == "" || street == "" || number == "" || neighborhood == "" || complement == "") {
            throw new AppError("fill in all fields")
        }

        const provider = new Provider();

        Object.assign(provider, {
            company_name,
            trading_name,
            hub_id,
            email,
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
        const createProvider = await this.providerRepository.Create(provider);

        return createProvider;

    }
}
export { CreateProviderUseCase }