import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICityRepository } from "../../../city/repositories/ICityRepository";
import { ICustomerRepository } from "../../../customer/repositories/ICustomerRepository";
import { IAddressDTO } from "../../dtos/IAddressDTO";
import { Address } from "../../infra/entities/Address";
import { IAddressRepository } from "../../repositories/IAddressRepository";


@injectable()
class UpdateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository,
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

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
        const address = await this.addressRepository.findById(id)

        if (!address) {
            throw new AppError("Address does not exists!");
        }

        const addressExistsCnpj_Cpf = await this.addressRepository.findByCnpjCpf(cnpj_cpf);

        if (addressExistsCnpj_Cpf && address.cnpj_cpf !== cnpj_cpf) {
            throw new AppError("Cnpj_cpf already exists!");
        }

        const customerId = await this.customerRepository.findById(customer_id);

        if (!customerId) {
            throw new AppError("CustomerId does not exists!");
        }

        const cityId = await this.cityRepository.findById(city_id);

        if (!cityId) {
            throw new AppError("CityId does not exists!");
        }

        address.customer_id = customer_id;
        address.type = type;
        address.cnpj_cpf = cnpj_cpf;
        address.trading_name = trading_name;
        address.branch = branch;
        address.responsible_name = responsible_name;
        address.responsible_email = responsible_email;
        address.responsible_telephone = responsible_telephone;
        address.cep = cep;
        address.state = state;
        address.city_id = city_id;
        address.street = street;
        address.number = number;
        address.neighborhood = neighborhood;
        address.complement = complement
        address.reference_point = reference_point;
        address.icms = icms;
        address.business_open = business_open;
        address.business_close = business_close;
        address.saturday_open = saturday_open;
        address.saturday_close = saturday_close;
        address.sunday_open = sunday_close;
        address.sunday_close = sunday_close;
        address.observation = observation

        const updateAddress = await this.addressRepository.Update({
            ...address,
            customerId,
            cityId,
        });

        return updateAddress;

    }
}

export { UpdateAddressUseCase }