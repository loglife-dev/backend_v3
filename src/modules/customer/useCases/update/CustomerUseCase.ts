import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICustomerDTO } from "../../dtos/ICustomerDTO";
import { Customer } from "../../infra/typeorm/entities/Customer";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";




@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private readonly customerRepository: ICustomerRepository) { }

  async execute({
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
    const customerAlreadyExists = await this.customerRepository.findById(id)

    if (!customerAlreadyExists) {
      throw new AppError("Customer does not exists!");
    }

    const customerExistCnpj_cpf = await this.customerRepository.findByCnpjAndCpf(cnpj_cpf);

    if (customerExistCnpj_cpf && customerAlreadyExists.cnpj_cpf !== cnpj_cpf) {
      throw new AppError("Cnpj_cpf already exists!");
    }


    Object.assign(customerAlreadyExists, {
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

    });

    const updatedCustomer = await this.customerRepository.Update(
      customerAlreadyExists
    );

    return updatedCustomer;
  }
}

export { UpdateCustomerUseCase }