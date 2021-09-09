import { IProviderDTO } from "../../dtos/IProviderDTO";
import { Provider } from "../../infra/typeorm/entities/Provider";
import { IProviderRepository } from "../IProviderRepository";


class ProviderRepositoryInMemory implements IProviderRepository {
    providers: Provider[] = [];

    async Get(): Promise<Provider[]> {
        const all = this.providers;
        return all;
    }
    async Create({
        id,
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
        const provider = new Provider();

        Object.assign(provider, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name,
            trading_name,
            hub_id: "fee4d482-744c-48a4-aa23-881859bb6074",
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
        this.providers.push(provider);

        return provider;
    }

    async Update(provider: Provider): Promise<Provider> {
        this.providers.push(provider);

        return provider;
    }

    async Delete(provider: Provider): Promise<void> {
        const findIndex = this.providers.findIndex(provider => provider === provider);

        this.providers.splice(findIndex, 1);
    }

    async findById(id: string): Promise<Provider> {
        const provider = this.providers.find((provider) => provider.id === id);

        return provider;
    }

    async findByEmail(email: string): Promise<Provider> {
        const provider = this.providers.find((provider) => provider.email === email);

        return provider;
    }

}

export { ProviderRepositoryInMemory }