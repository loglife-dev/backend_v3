import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateCollectorUseCase } from "./CollectorUseCase";

class UpdateCollectorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { situation, company_name, trading_name, hub_list, cnpj, operational_email, delay_cost, cellphone, telephone,
            cep, state, city, street, number, neighborhood, complement, municipal_register, payment_type, day_expiration, business_open,
            business_close, saturday_open, saturday_close, sunday_open, sunday_close, observation } = request.body;

        const updateCollector = container.resolve(UpdateCollectorUseCase)

        const updatedCollector = await updateCollector.execute({
            id,
            situation,
            company_name,
            trading_name,
            hub_list,
            cnpj,
            operational_email,
            delay_cost,
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
            payment_type,
            day_expiration,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation
        })
        return response.json(updatedCollector);
    }
}

export { UpdateCollectorController };