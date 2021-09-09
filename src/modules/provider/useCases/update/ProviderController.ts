import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateProviderUseCase } from "./ProviderUseCase";


class UpdateProviderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { company_name, trading_name, hub_id, email, material, unit_cost, payment_conditional, day_expiration_1, day_expiration_2, payment_type, cellphone,
            telephone, cep, state, city,street, number, neighborhood, complement, business_open, business_close, saturday_open, saturday_close, sunday_open, sunday_close, observation, } = request.body;

        const updateProviderUseCase = container.resolve(UpdateProviderUseCase)

        const updateProvider = await updateProviderUseCase.execute({
            id,
            company_name,
            trading_name,
            hub_id,
            email,
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
        })
        return response.json(updateProvider);
    }
}

export { UpdateProviderController };