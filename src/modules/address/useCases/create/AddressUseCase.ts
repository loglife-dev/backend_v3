import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressDTO } from "../../dtos/IAddressDTO";
import { Address } from "../../infra/entities/Address";
import { IAddressRepository } from "../../repositories/IAddressRepository";

@injectable()
class CreateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository) { }

    async execute({
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
        const addressAlreadyExists = await this.addressRepository.findByCnpjCpf(cnpj_cpf);

        if (addressAlreadyExists) {
            throw new AppError("There is already a registered cnpj_cpf with this Address!!", 400)
        }

        const address = new Address();
        Object.assign(address, {
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

        const createAddress = await this.addressRepository.Create(address);

        return createAddress;

    }
}
export { CreateAddressUseCase }