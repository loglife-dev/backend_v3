import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICustomerRepository } from "../../../customer/repositories/ICustomerRepository";
import { IHubRepository } from "../../../hub/repositories/IHubRepositories";
import { IBudgetDTO } from "../../dtos/IBudgetDTO";
import { Budget } from "../../infra/typeorm/entities/Budget";
import { IBudgetRepository } from "../../repositories/IBudgetRepository";

@injectable()
class UpdateBudgetUseCase {
    constructor(
        @inject("BudgetRepository")
        private readonly budGetRepository: IBudgetRepository,
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
        @inject("HubRepository")
        private readonly hubRepository: IHubRepository) { }

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
        const budget = await this.budGetRepository.findById(id)

        if (!budget) {
            throw new AppError("Budget does not exists!");
        }

        const customerId = await this.customerRepository.findById(customer_id);
        if (!customerId) {
            throw new AppError("CustomerId does not exists!");
        }

        const sourceHubId = await this.hubRepository.findById(source_hub_id);
        if (!sourceHubId) {
            throw new AppError("SourceHubId does not exists!");
        }

        const destinationHubId = await this.hubRepository.findById(destination_hub_id);
        if (!destinationHubId) {
            throw new AppError("DestinationHubId does not exists!");
        }

        budget.customer_id = customer_id,
        budget.source_hub_id = source_hub_id,
        budget.destination_hub_id = destination_hub_id;
        budget.source_cities = source_cities;
        budget.destination_cities = destination_cities;
        budget.source_address_qty = source_address_qty;
        budget.destination_address_qty = destination_address_qty;
        budget.deadline = deadline;
        budget.service_type = service_type;
        budget.franchising = franchising;
        budget.modal = modal;
        budget.vehicle = vehicle;
        budget.caixa_termica = caixa_termica;
        budget.embalagem_secundaria = embalagem_secundaria;
        budget.gelo_seco = gelo_seco;
        budget.gelox = gelox;
        budget.isopor3l = isopor3l;
        budget.isopor7l = isopor7l;
        budget.terciaria3l = terciaria3l;
        budget.terciaria8l = terciaria8l;
        budget.price = price;
        budget.price_kg_extra = price_kg_extra;
        budget.transfer_budget = transfer_budget;
        budget.price_add_collect = price_add_collect;
        budget.price_add_delivery = price_add_delivery;
        budget.price_unsuccessful_collect = price_unsuccessful_collect;
        budget.observation = observation;

        const updateBudget = await this.budGetRepository.Update({
            ...budget,
            sourceHubId,
            destinationHubId,
        });

        return updateBudget;

    }
}

export { UpdateBudgetUseCase }