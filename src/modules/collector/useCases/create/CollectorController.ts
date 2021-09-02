import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCollectorUseCase } from "./CollectorUseCase";

class CreateCollectorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { situation, company_name, trading_name, hub_list, cnpj, operational_email, delay_cost, cellphone, telephone,
            cep, state, city, street, number, neighborhood, complement, municipal_register, payment_type, day_expiration, business_open,
            business_close, saturday_open, saturday_close, sunday_open, sunday_close, observation } = request.body;

        const createCollectorUseCase = container.resolve(CreateCollectorUseCase);

        const collector = await createCollectorUseCase.execute({
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
        });

        const collectorResponse = {
            situation: collector.situation,
            company_name: collector.company_name,
            trading_name: collector.trading_name,
            hub_list: collector.hub_list,
            cnpj: collector.cnpj,
            operational_email: collector.operational_email,
            delay_cost: collector.delay_cost,
            cellphone: collector.cellphone,
            telephone: collector.telephone,
            cep: collector.cep,
            state: collector.state,
            city: collector.city,
            street: collector.street,
            number: collector.number,
            neighborhood: collector.neighborhood,
            complement: collector.complement,
            municipal_register: collector.municipal_register,
            payment_type: collector.payment_type,
            day_expiration: collector.day_expiration,
            business_open: collector.business_open,
            business_close: collector.business_close,
            saturday_open: collector.saturday_open,
            saturday_close: collector.saturday_close,
            sunday_open: collector.sunday_open,
            sunday_close: collector.sunday_close,
            observation: collector.observation,
        }


        return response.status(201).json(collectorResponse);
    }
}
export { CreateCollectorController };