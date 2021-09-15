import { IBudgetDTO } from "../../modules/budget/dtos/IBudgetDTO";
import { BudgetRepositoryInMemory } from "../../modules/budget/repositories/in-memory/BudgetRepositoryInMemory";
import { CreateBudgetUseCase } from "../../modules/budget/useCases/create/BudgetUseCase";
import { GetAllBudgetUseCase, GetBudgetUseCase } from "../../modules/budget/useCases/get/BudgetUseCase";

let getAllBudgetUseCase: GetAllBudgetUseCase;
let getBudgetUseCase: GetBudgetUseCase;
let createBudgetUseCase: CreateBudgetUseCase;
let budgetRepositoryInMemory: BudgetRepositoryInMemory;

describe("List all budget", () => {
    beforeEach(() => {
        budgetRepositoryInMemory = new BudgetRepositoryInMemory();
        getAllBudgetUseCase = new GetAllBudgetUseCase(budgetRepositoryInMemory);
        getBudgetUseCase = new GetBudgetUseCase(budgetRepositoryInMemory);
        createBudgetUseCase = new CreateBudgetUseCase(budgetRepositoryInMemory);
    });

    it("Should be able to list all budget", async () => {
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

        const all = await getAllBudgetUseCase.execute();
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id budget", async () => {
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

        const findBudgetId = await getBudgetUseCase.execute(budget.id)

        expect(findBudgetId.id).toBe('59fde46d-40ad-46ac-a674-a8506c4791f6');
    })
})