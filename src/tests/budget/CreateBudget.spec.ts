import { IBudgetDTO } from "../../modules/budget/dtos/IBudgetDTO";
import { BudgetRepositoryInMemory } from "../../modules/budget/repositories/in-memory/BudgetRepositoryInMemory";
import { CreateBudgetUseCase } from "../../modules/budget/useCases/create/BudgetUseCase";

let createBudgetUseCase: CreateBudgetUseCase;
let budgetRepositoryInMemory: BudgetRepositoryInMemory;

describe("Create Budget", () => {
    beforeEach(() => {
        budgetRepositoryInMemory = new BudgetRepositoryInMemory();
        createBudgetUseCase = new CreateBudgetUseCase(budgetRepositoryInMemory);
    });

    it("should be able to create a new Budget", async () => { 
        const budget: IBudgetDTO = {
            id:'59fde46d-40ad-46ac-a674-a8506c4791f6',
            customer_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            source_hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            destination_hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            source_cities: ['1'],
            destination_cities: ['2'],
            source_address_qty: 4 ,
            destination_address_qty: 1,
            deadline: 2,
            service_type: 'service test',
            franchising: 2,
            modal: 'modal test',
            vehicle: 'vehicle test',
            caixa_termica: 1,
            embalagem_secundaria: 1,
            gelo_seco: 1,
            gelox: 1,
            isopor3l: 0,
            isopor7l: 1,
            terciaria3l: 0,
            terciaria8l: 2,
            price: 50.00,
            price_kg_extra: 20,
            transfer_budget: 1,
            price_add_collect: 80.00,
            price_add_delivery: 40.00,
            price_unsuccessful_collect: 100.00,
            observation: 'em test'
        }
        await createBudgetUseCase.execute(budget);

        expect(budget).toHaveProperty("id")
    })
})