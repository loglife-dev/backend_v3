import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBudgetUseCase } from "./BudgetUseCase";

class CreateBudgetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { customer_id, source_hub_id, destination_hub_id, source_cities, destination_cities, source_address_qty, destination_address_qty, deadline, service_type,
            franchising, modal, vehicle, caixa_termica, embalagem_secundaria, gelo_seco, gelox, isopor3l, isopor7l, terciaria3l, terciaria8l, price, price_kg_extra,
            transfer_budget, price_add_collect, price_add_delivery, price_unsuccessful_collect, observation } = request.body;

        const createBudgetUseCase = container.resolve(CreateBudgetUseCase);

        const budget = await createBudgetUseCase.execute({
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

        const budgetResponse = {
            customer_id: budget.customer_id,
            source_hub_id: budget.source_hub_id,
            destination_hub_id: budget.destination_hub_id,
            source_cities: budget.source_cities,
            destination_cities: budget.destination_cities,
            source_address_qty: budget.source_address_qty,
            destination_address_qty: budget.destination_address_qty,
            deadline: budget.deadline,
            service_type: budget.service_type,
            franchising: budget.franchising,
            modal: budget.modal,
            vehicle: budget.vehicle,
            caixa_termica: budget.caixa_termica,
            embalagem_secundaria: budget.embalagem_secundaria,
            gelo_seco: budget.gelo_seco,
            gelox: budget.gelox,
            isopor3l: budget.isopor3l,
            isopor7l: budget.isopor7l,
            terciaria3l: budget.terciaria3l,
            terciaria8l: budget.terciaria8l,
            price: budget.price,
            price_kg_extra: budget.price_kg_extra,
            transfer_budget: budget.transfer_budget,
            price_add_collect: budget.price_add_collect,
            price_add_delivery: budget.price_add_delivery,
            price_unsuccessful_collect: budget.price_unsuccessful_collect,
            observation: budget.observation,
        }


        return response.status(201).json(budgetResponse);
    }
}
export { CreateBudgetController }