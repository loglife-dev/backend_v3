import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICustomerDTO } from "../../dtos/ICustomerDTO";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";



@injectable()
class CreateCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

    async execute({
        type,
        situation,
        trading_firstname,
        company_lastname,
        cnpj_cpf,
        cost_center,
        deadline_delivery,
        operational_email,
        financial_email,
        cellphone,
        telephone,
        cep,
        state,
        city,
        street,
        number,
        neighborhood,
        complement,
        municipal_register,
        state_register,
        icms,
        iss,
        payment_conditional,
        day_expiration_1,
        day_expiration_2,
        payment_type,
        emission_type,
        observation,
    }: ICustomerDTO): Promise<Customer> {

        const CnpjAndCpfAlreadyExists = await this.customerRepository.findByCnpjAndCpf(cnpj_cpf);

        if (CnpjAndCpfAlreadyExists) {
            throw new AppError("There is already a registered user with this Customer!!", 400)
        }

        const customer = new Customer();

        Object.assign(customer, {
            type,
            situation,
            trading_firstname,
            company_lastname,
            cnpj_cpf,
            cost_center,
            deadline_delivery,
            operational_email,
            financial_email,
            cellphone,
            telephone,
            cep,
            state,
            city,
            street,
            number,
            neighborhood,
            complement,
            municipal_register,
            state_register,
            icms,
            iss,
            payment_conditional,
            day_expiration_1,
            day_expiration_2,
            payment_type,
            emission_type,
            observation,
        });

        const createCustomer = await this.customerRepository.Create(customer)

        return createCustomer;
    }
}

export { CreateCustomerUseCase }