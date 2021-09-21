import { IProviderDTO } from "../../modules/provider/dtos/IProviderDTO";
import { ProviderRepositoryInMemory } from "../../modules/provider/repositories/in-memory/ProviderRepositoryInMemory";
import { CreateProviderUseCase } from "../../modules/provider/useCases/create/ProviderUseCase";
import { DeleteProviderUseCase } from "../../modules/provider/useCases/delete/ProviderUseCase";

let createProviderUseCase: CreateProviderUseCase;
let providerRepositoryInMemory: ProviderRepositoryInMemory;
let deleteProviderUseCase: DeleteProviderUseCase;

describe("Delete a Provider", () => {
    beforeEach(() => {
        providerRepositoryInMemory = new ProviderRepositoryInMemory();
        createProviderUseCase = new CreateProviderUseCase(providerRepositoryInMemory);
        deleteProviderUseCase = new DeleteProviderUseCase(providerRepositoryInMemory);
    });
    it("should be able to delete a provider", async () => {
        const provider: IProviderDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name: "provider_test",
            trading_name: "PL LDT",
            hub_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            email: "emailtest@gmail.com",
            cnpj: "9999999",
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
        const findId = await deleteProviderUseCase.execute(provider.id);

        expect(findId).toBe(undefined)

    })
})