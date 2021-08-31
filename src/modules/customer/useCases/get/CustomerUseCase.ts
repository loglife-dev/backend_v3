import { inject, injectable } from "tsyringe";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";


@injectable()
class GetCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

    public async execute(id: string): Promise<Customer> {
        const customer = await this.customerRepository.Get(id);

        return customer;
    }
}

@injectable()
class GetAllCustomerseCase {
    constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

    public async execute(): Promise<Customer[]> {
        const customer = await this.customerRepository.GetAll()

        return customer;
    }
}

export { GetCustomerUseCase, GetAllCustomerseCase };