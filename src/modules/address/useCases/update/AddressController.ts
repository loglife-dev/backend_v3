import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateAddressUseCase } from "./AddressUseCase";

class UpdateAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { customer_id, type, cnpj_cpf, trading_name, branch, responsible_name, responsible_email, responsible_telephone, cep, state, city_id, street, number,
            neighborhood, complement, reference_point, icms, business_open, business_close, saturday_open, saturday_close, sunday_open, sunday_close, observation } = request.body;

        const updateAddressUseCase = container.resolve(UpdateAddressUseCase)

        const updateAddress = await updateAddressUseCase.execute({
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
        })
        return response.json(updateAddress);
    }
}


export { UpdateAddressController }