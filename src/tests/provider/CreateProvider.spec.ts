import { IProviderDTO } from "../../modules/provider/dtos/IProviderDTO";
import { ProviderRepositoryInMemory } from "../../modules/provider/repositories/in-memory/ProviderRepositoryInMemory";
import { CreateProviderUseCase } from "../../modules/provider/useCases/create/ProviderUseCase";
import { AppError } from "../../shared/errors/AppError";

let createProviderUseCase: CreateProviderUseCase;
let providerRepositoryInMemory: ProviderRepositoryInMemory;

describe("Create Provider", () => {
    beforeEach(() => {
        providerRepositoryInMemory = new ProviderRepositoryInMemory();
        createProviderUseCase = new CreateProviderUseCase(providerRepositoryInMemory);
    });
    it("should be able to create a new provider", async () => {
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
        const providerCreated = await providerRepositoryInMemory.findByEmail(provider.email);

        expect(providerCreated).toHaveProperty("id");
    })

    it("should not be able to create a new provider with email exists", async () => {

        expect(async () => {
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
            await createProviderUseCase.execute(provider);
            
        }).rejects.toBeInstanceOf(AppError)
    })
})