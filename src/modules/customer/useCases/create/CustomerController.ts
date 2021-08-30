import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomerUseCase } from "./CustomerUseCase";


class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { type, situation, trading_firstname, company_lastname, cnpj_cpf, deadline_delivery, operational_email,
            financial_email, cellphone, telephone, cep, state, city, street, number, neighborhood, complement,
            municipal_register, state_register, icms, iss, payment_conditional, day_expiration_1, day_expiration_2,
            payment_type, emission_type, observation } = request.body;

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

        const customer = await createCustomerUseCase.execute({
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

        const customerResponse = {
            type: customer.type,
            situation: customer.situation,
            trading_firstname: customer.trading_firstname,
            company_lastname: customer.company_lastname,
            cnpj_cpf: customer.cnpj_cpf,
            deadline_delivery: customer.deadline_delivery,
            operational_email: customer.operational_email,
            financial_email: customer.financial_email,
            cellphone: customer.cellphone,
            telephone: customer.telephone,
            cep: customer.cep,
            state: customer.state,
            city: customer.city,
            street: customer.street,
            number: customer.number,
            neighborhood: customer.neighborhood,
            complement: customer.complement,
            municipal_register: customer.municipal_register,
            state_register: customer.state_register,
            icms: customer.icms,
            iss: customer.iss,
            payment_conditional: customer.payment_conditional,
            day_expiration_1: customer.day_expiration_1,
            day_expiration_2: customer.day_expiration_2,
            payment_type: customer.payment_type,
            emission_type: customer.emission_type,
            observation: customer.observation
        }

        return response.status(201).json(customerResponse);
    }
}

export { CreateCustomerController }