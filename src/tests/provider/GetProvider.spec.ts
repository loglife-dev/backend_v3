import { IProviderDTO } from "../../modules/provider/dtos/IProviderDTO";
import { ProviderRepositoryInMemory } from "../../modules/provider/repositories/in-memory/ProviderRepositoryInMemory";
import { CreateProviderUseCase } from "../../modules/provider/useCases/create/ProviderUseCase";
import { GetAllProviderUseCase, GetProviderUseCase } from "../../modules/provider/useCases/get/ProviderUseCase";


let getAllProviderUseCase: GetAllProviderUseCase;
let providerRepositoryInMemory: ProviderRepositoryInMemory;
let createProviderUseCase: CreateProviderUseCase;
let getProviderUseCase: GetProviderUseCase;


describe("List all Provider", () => {
    beforeEach(() => {
        providerRepositoryInMemory = new ProviderRepositoryInMemory();
        createProviderUseCase = new CreateProviderUseCase(providerRepositoryInMemory);
        getAllProviderUseCase = new GetAllProviderUseCase(providerRepositoryInMemory);
        getProviderUseCase = new GetProviderUseCase(providerRepositoryInMemory);
    });

    it("should be able to list all provider", async () => {
        const provider: IProviderDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name: "provider_test",
            trading_name: "PL LDT",
            hub_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            email: "emailtest@gmail.com",
            material: "plastico",
            unit_cost: "25,00",
            payment_conditional: "50,00",
            day_expiration_1: "10/09/2021",
            day_expiration_2: "12/09/2021",
            payment_type: "dinheiro",
            cellphone: "33333",
            telephone: "(92) 223245",
            cep: "68099965",
            state: "Amazonas",
            city: "Manaus",
            street: "São josé",
            number: "10000",
            neighborhood: "flores",
            complement: "Cosme ferreira",
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: "obs"
        };
        await createProviderUseCase.execute(provider);
        const all = await getAllProviderUseCase.execute();

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

    it("should be able to findOne id provider", async () => {
        const provider: IProviderDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name: "provider_test",
            trading_name: "PL LDT",
            hub_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            email: "emailtest@gmail.com",
            material: "plastico",
            unit_cost: "25,00",
            payment_conditional: "50,00",
            day_expiration_1: "10/09/2021",
            day_expiration_2: "12/09/2021",
            payment_type: "dinheiro",
            cellphone: "33333",
            telephone: "(92) 223245",
            cep: "68099965",
            state: "Amazonas",
            city: "Manaus",
            street: "São josé",
            number: "10000",
            neighborhood: "flores",
            complement: "Cosme ferreira",
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: "obs"
        };
        await createProviderUseCase.execute(provider);

        const findProviderid = await getProviderUseCase.execute(provider.id)

        expect(findProviderid.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6");
    })
})