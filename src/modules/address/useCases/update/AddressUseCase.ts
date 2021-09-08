import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressDTO } from "../../dtos/IAddressDTO";
import { Address } from "../../infra/entities/Address";
import { IAddressRepository } from "../../repositories/IAddressRepository";


@injectable()
class UpdateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository) { }

    async execute({
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
        const addressExists = await this.addressRepository.Get(id);

        if (!addressExists) {
            throw new AppError("Address does not exists!");
        }

        const addressExistsCnpj_Cpf = await this.addressRepository.findByCnpjCpf(cnpj_cpf);

        if (addressExistsCnpj_Cpf && addressExists.cnpj_cpf !== cnpj_cpf) {
            throw new AppError("Cnpj_cpf already exists!");
        }

      
        Object.assign(addressExists, {
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
        });
        const updateAddress = await this.addressRepository.Update(addressExists);

        return updateAddress;

    }
}

export { UpdateAddressUseCase }