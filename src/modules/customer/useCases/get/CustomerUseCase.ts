import { inject, injectable } from "tsyringe";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";


@injectable()
class GetCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

    async execute(id: string): Promise<Customer> {
        const customer = await this.customerRepository.findById(id)

        return customer;
    }
}

@injectable()
class GetAllCustomerseCase {
    constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

    async execute(): Promise<Customer[]> {
        const customer = await this.customerRepository.Get()

        return customer;
    }
}

export { GetCustomerUseCase, GetAllCustomerseCase };