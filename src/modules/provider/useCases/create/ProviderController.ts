import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProviderUseCase } from "./ProviderUseCase";

class CreateProviderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { company_name, trading_name, hub_id, email, cnpj, material, unit_cost, payment_conditional, day_expiration_1, day_expiration_2, payment_type, cellphone,
            telephone, cep, state, city, street, number, neighborhood, complement, business_open, business_close, saturday_open, saturday_close, sunday_open, sunday_close, observation, } = request.body;

        const createProviderUseCase = container.resolve(CreateProviderUseCase);

        const provider = await createProviderUseCase.execute({
            company_name,
            trading_name,
            hub_id,
            email,
            cnpj,
            material,
            unit_cost,
            payment_conditional,
            day_expiration_1,
            day_expiration_2,
            payment_type,
            cellphone,
            telephone,
            cep,
            state,
            city,
            street,
            number,
            neighborhood,
            complement,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation,
        });

        const providerResponse = {
            company_name: provider.company_name,
            trading_name: provider.trading_name,
            hub_id: provider.hub_id,
            email: provider.email,
            cnpj: provider.cnpj,
            material: provider.material,
            unit_cost: provider.unit_cost,
            payment_conditional: provider.payment_conditional,
            day_expiration_1: provider.day_expiration_1,
            day_expiration_2: provider.day_expiration_2,
            payment_type: provider.payment_type,
            cellphone: provider.cellphone,
            telephone: provider.telephone,
            cep: provider.cep,
            state: provider.state,
            city: provider.city,
            street: provider.street,
            number: provider.number,
            neighborhood: provider.neighborhood,
            complement: provider.complement,
            business_open: provider.business_open,
            business_close: provider.business_close,
            saturday_open: provider.saturday_open,
            saturday_close: provider.saturday_close,
            sunday_open: provider.sunday_open,
            sunday_close: provider.sunday_close,
            observation: provider.observation,
        }


        return response.status(201).json(providerResponse);
    }
}
export { CreateProviderController };