import { IBudgetDTO } from "../../dtos/IBudgetDTO";
import { Budget } from "../../infra/typeorm/entities/Budget";
import { IBudgetRepository } from "../IBudgetRepository";

class BudgetRepositoryInMemory implements IBudgetRepository {
    budgets: Budget[] = [];

    async Get(): Promise<Budget[]> {
        const all = this.budgets;
        return all;
    }

    async findById(id: string): Promise<Budget> {
        const budget = this.budgets.find((budget) => budget.id === id)

        return budget;
    }

    async Create({
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
        const budget = new Budget();

        Object.assign(budget, {
            id:'59fde46d-40ad-46ac-a674-a8506c4791f6',
            customer_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            source_hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            destination_hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
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
        this.budgets.push(budget);

        return budget;
    }

    async Update(budget: Budget): Promise<Budget> {
        this.budgets.push(budget);

        return budget;
    }

    async Delete(budget: Budget): Promise<void> {
        const findIndex = this.budgets.findIndex(budget => budget === budget)

        this.budgets.splice(findIndex, 1);
    }

}

export { BudgetRepositoryInMemory }