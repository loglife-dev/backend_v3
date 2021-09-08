import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAddressUseCase } from "./AddressUseCase";


class CreateAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { customer_id, type, cnpj_cpf, trading_name, branch, responsible_name, responsible_email, responsible_telephone, cep, state, city_id, street, number,
            neighborhood, complement, reference_point, icms, business_open, business_close, saturday_open, saturday_close, sunday_open, sunday_close, observation } = request.body;

        const createAddressUseCase = container.resolve(CreateAddressUseCase);

        const address = await createAddressUseCase.execute({
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
        });

        const addressResponse = {
            customer_id: address.customer_id,
            type: address.type,
            cnpj_cpf: address.cnpj_cpf,
            trading_name: address.trading_name,
            branch: address.branch,
            responsible_name: address.responsible_name,
            responsible_email: address.responsible_email,
            responsible_telephone: address.responsible_telephone,
            cep: address.cep,
            state: address.state,
            city_id: address.city_id,
            street: address.street,
            number: address.number,
            neighborhood: address.neighborhood,
            complement: address.complement,
            reference_point: address.reference_point,
            icms: address.icms,
            business_open: address.business_open,
            business_close: address.business_close,
            saturday_open: address.saturday_open,
            saturday_close: address.saturday_close,
            sunday_open: address.sunday_open,
            sunday_close: address.sunday_close,
            observation: address.observation,
        }


        return response.status(201).json(addressResponse);
    }
}
export { CreateAddressController }