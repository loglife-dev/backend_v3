import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBudgetDTO } from "../../dtos/IBudgetDTO";
import { Budget } from "../../infra/typeorm/entities/Budget";
import { IBudgetRepository } from "../../repositories/IBudgetRepository";

@injectable()
class UpdateBudgetUseCase {
    constructor(
        @inject("BudgetRepository")
        private readonly budGetRepository: IBudgetRepository) { }

    async execute({
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
    }: IBudgetDTO): Promise<Budget> {
        const budgetExists = await this.budGetRepository.findById(id)

        if (!budgetExists) {
            throw new AppError("Budget does not exists!");
        }

        Object.assign(budgetExists, {
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
        });
        const updateBudget = await this.budGetRepository.Update(budgetExists);

        return updateBudget;

    }
}

export { UpdateBudgetUseCase }