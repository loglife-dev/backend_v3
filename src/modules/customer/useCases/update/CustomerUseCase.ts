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
    const customer = await this.customerRepository.findById(id)

    if (!customer) {
      throw new AppError("Customer does not exists!");
    }

    const customerExistCnpj_cpf = await this.customerRepository.findByCnpjAndCpf(cnpj_cpf);

    if (customerExistCnpj_cpf && customer.cnpj_cpf !== cnpj_cpf) {
      throw new AppError("Cnpj_cpf already exists!");
    }

    customer.type = type;
    customer.situation = situation;
    customer.trading_firstname = trading_firstname;
    customer.company_lastname = company_lastname;
    customer.cnpj_cpf = cnpj_cpf;
    customer.deadline_delivery = deadline_delivery;
    customer.operational_email = operational_email;
    customer.financial_email = financial_email;
    customer.cellphone = cellphone;
    customer.telephone = telephone;
    customer.cep = cep;
    customer.state = state;
    customer.city = city;
    customer.street = street;
    customer.number = number;
    customer.neighborhood = neighborhood;
    customer.complement = complement;
    customer.municipal_register = municipal_register;
    customer.state_register = state_register;
    customer.icms = icms;
    customer.iss = iss;
    customer.payment_conditional = payment_conditional;
    customer.day_expiration_1 = day_expiration_1;
    customer.day_expiration_2 = day_expiration_2;
    customer.payment_type = payment_type;
    customer.emission_type = emission_type;
    customer.observation = observation;


    const updatedCustomer = await this.customerRepository.Update(customer);

    return updatedCustomer;
  }
}

export { UpdateCustomerUseCase }