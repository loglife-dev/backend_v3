import { IAddressDTO } from "../../dtos/IAddressDTO";
import { Address } from "../../infra/entities/Address";
import { IAddressRepository } from "../IAddressRepository";


class AddressRepositoryInMemory implements IAddressRepository {
    addresses: Address[] = [];

    async Get(id: string): Promise<Address> {
        const address = this.addresses.find((address) => address.id === id);
        return address;
    }

    async GetAll(): Promise<Address[]> {
        const all = this.addresses;
        return all;
    }

    async Create({
        id,
        customer_id,
        type,
        cnpj_cpf,
        trading_name,
        branch,
        responsible_name,
        responsible_email,
        responsible_telephone,
        cep,
        state,
        city_id,
        street,
        number,
        neighborhood,
        complement,
        reference_point,
        icms,
        business_open,
        business_close,
        saturday_open,
        saturday_close,
        sunday_open,
        sunday_close,
        observation,
    }: IAddressDTO): Promise<Address> {
        const address = new Address();

        Object.assign(address, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            customer_id:  "fee4d482-744c-48a4-aa23-881859bb6074",
            type,
            cnpj_cpf,
            trading_name,
            branch,
            responsible_name,
            responsible_email,
            responsible_telephone,
            cep,
            state,
            city_id: "09feae4e-2707-40ab-a9cd-098437332f8d",
            street,
            number,
            neighborhood,
            complement,
            reference_point,
            icms,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation,
        });
        this.addresses.push(address);

        return address;
    }

    async Update(address: Address): Promise<Address> {
        this.addresses.push(address);

        return address;
    }

    async Delete(address: Address): Promise<void> {
        const findIndex = this.addresses.findIndex(address => address === address)

        this.addresses.splice(findIndex, 1);
    }

    async findByCnpjCpf(cnpj_cpf: string): Promise<Address> {
        const address = this.addresses.find((address) => address.cnpj_cpf === cnpj_cpf)

        return address;
    }
}

export { AddressRepositoryInMemory }