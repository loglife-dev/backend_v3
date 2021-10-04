import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateCustomerUseCase } from "./CustomerUseCase";

class UpdateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { type, situation, trading_firstname, company_lastname, cnpj_cpf, cost_center, deadline_delivery, operational_email, financial_email, cellphone,
            telephone, cep, state, city, street, number, neighborhood, complement, municipal_register, state_register, icms, iss, payment_conditional,
            day_expiration_1, day_expiration_2, payment_type, emission_type, observation, } = request.body;

        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase)

        const updateCustomer = await updateCustomerUseCase.execute({
            id,
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
        })
        return response.json(updateCustomer);
    }
}

export { UpdateCustomerController };