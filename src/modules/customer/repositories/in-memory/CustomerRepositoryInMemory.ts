import { ICustomerDTO } from "../../dtos/ICustomerDTO";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../ICustomerRepository";


class CustomerRepositoryInMemory implements ICustomerRepository {
    customers: Customer[] = [];

    
    async Get(): Promise<Customer[]> {
        const all = this.customers;
        return all;
    }

    async Create({
        id,
        type,
        situation,
        trading_firstname,
        company_lastname,
        cnpj_cpf,
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
        const customer = new Customer();

        Object.assign(customer, {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            type,
            situation,
            trading_firstname,
            company_lastname,
            cnpj_cpf,
            deadline_delivery: new Date(),
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

        })
        this.customers.push(customer);

        return customer;
    }
    
    async Update(customer: Customer): Promise<Customer> {
        this.customers.push(customer);

        return customer;
    }
    
    async Delete(customer: Customer): Promise<void> {
        const findIndex = this.customers.findIndex(customer => customer === customer)

        this.customers.splice(findIndex, 1);
    }
    async findById(id: string): Promise<Customer> {
        const customer = this.customers.find((customer) => customer.id === id);

        return customer;
    }

    async findByCnpjAndCpf(cnpj_cpf: string): Promise<Customer> {
        const customer = this.customers.find((customer) => customer.cnpj_cpf === cnpj_cpf);

        return customer;
    }

}

export { CustomerRepositoryInMemory }