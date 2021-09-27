import { inject, injectable } from "tsyringe";
import { IProviderDTO } from "../../dtos/IProviderDTO";
import { IProviderRepository } from "../../repositories/IProviderRepository";
import { Provider } from "../../infra/typeorm/entities/Provider";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubRepository } from "../../../hub/repositories/IHubRepositories";

@injectable()
class UpdateProviderUseCase {
    constructor(
        @inject("ProviderRepository")
        private readonly providerRepository: IProviderRepository,
        @inject("HubRepository")
        private readonly hubRepository: IHubRepository) { }

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

        if (cnpjAlreadyExists && provider.id !== id) {
            throw new AppError("Cnpj already exists!")
        }
        const hubId = await this.hubRepository.findById(hub_id);

        provider.company_name = company_name;
        provider.trading_name = trading_name;
        provider.hub_id = hub_id;
        provider.email = email;
        provider.cnpj = cnpj;
        provider.material = material;
        provider.unit_cost = unit_cost;
        provider.payment_conditional = payment_conditional;
        provider.day_expiration_1 = day_expiration_1;
        provider.day_expiration_2 = day_expiration_2;
        provider.payment_type = payment_type;
        provider.cellphone = cellphone;
        provider.telephone = telephone;
        provider.cep = cep;
        provider.state = state;
        provider.city = city;
        provider.street = street;
        provider.number = number;
        provider.neighborhood = neighborhood;
        provider.complement = complement;
        provider.business_open = business_open;
        provider.business_close = business_close=
        provider.saturday_open = saturday_open;
        provider.saturday_close = saturday_close;
        provider.sunday_open = sunday_open;
        provider.sunday_close = sunday_close;
        provider.observation = observation;
        const updateProvider = await this.providerRepository.Update({
            ...provider,
            hubId
        });

        return updateProvider;

    }
}
export { UpdateProviderUseCase }