import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";



@injectable()
class DeleteCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository) { }

  async execute(id: string): Promise<void> {
    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer does not exists!");
    }


    await this.customerRepository.Delete(customer);
  }
}

export { DeleteCustomerUseCase }