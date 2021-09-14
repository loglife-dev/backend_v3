import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateBudgetUseCase } from './BudgetUseCase';

class UpdateBudgetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { customer_id, source_hub_id, destination_hub_id, source_cities, destination_cities, source_address_qty, destination_address_qty, deadline, service_type,
            franchising, modal, vehicle, caixa_termica, embalagem_secundaria, gelo_seco, gelox, isopor3l, isopor7l, terciaria3l, terciaria8l, price, price_kg_extra,
            transfer_budget, price_add_collect, price_add_delivery, price_unsuccessful_collect, observation } = request.body;

        const updateBudgetUseCase = container.resolve(UpdateBudgetUseCase)

        const budget = await updateBudgetUseCase.execute({
            id,
            customer_id,
            source_hub_id,
            destination_hub_id,
            source_cities,
            destination_cities,
            source_address_qty,
            destination_address_qty,
            deadline,
            service_type,
            franchising,
            modal,
            vehicle,
            caixa_termica,
            embalagem_secundaria,
            gelo_seco,
            gelox,
            isopor3l,
            isopor7l,
            terciaria3l,
            terciaria8l,
            price,
            price_kg_extra,
            transfer_budget,
            price_add_collect,
            price_add_delivery,
            price_unsuccessful_collect,
            observation,
        })
        return response.json(budget);
    }
}


export { UpdateBudgetController }