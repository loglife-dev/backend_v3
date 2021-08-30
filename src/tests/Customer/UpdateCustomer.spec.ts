import { ICustomerDTO } from "../../modules/customer/dtos/ICustomerDTO";
import { CustomerRepositoryInMemory } from "../../modules/customer/repositories/in-memory/CustomerRepositoryInMemory";
import { CreateCustomerUseCase } from "../../modules/customer/useCases/create/CustomerUseCase";
import { UpdateCustomerUseCase } from "../../modules/customer/useCases/update/CustomerUseCase";


let createCustomerUseCase: CreateCustomerUseCase;
let customerRepositoryInMemory: CustomerRepositoryInMemory;
let updateCustomerUseCase: UpdateCustomerUseCase;


describe("Update customer", () => {
    beforeEach(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);
        updateCustomerUseCase = new UpdateCustomerUseCase(customerRepositoryInMemory);

    });

    it("Should be able to update one customer", async () => {
        const customer: ICustomerDTO = {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            type: "fisica",
            situation: "obs",
            trading_firstname: "name empresa",
            company_lastname: "name company",
            cnpj_cpf: "1111",
            deadline_delivery: new Date,
            operational_email: "test@gmail.com",
            financial_email: "test@finacial@gmail.com",
            cellphone: "(92) 9990-9999",
            telephone: "99999999",
            cep: "69086642",
            state: "amazonas",
            city: "Manaus",
            street: "Ingalterra",
            number: "332",
            neighborhood: "test",
            complement: "Proximo ao mercado beatriz",
            municipal_register: "test muni",
            state_register: "test etate",
            icms: "2222",
            iss: "1111",
            payment_conditional: "aaa",
            day_expiration_1: "30-08-2021",
            day_expiration_2: "30-08-2021",
            payment_type: "Dinheiro",
            emission_type: "11",
            observation: "11"
        };
        await createCustomerUseCase.execute(customer);

        const updateCustomer = await updateCustomerUseCase.execute({
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            type: "fisica",
            situation: "obs",
            trading_firstname: "name empresa",
            company_lastname: "name company",
            cnpj_cpf: "1111",
            deadline_delivery: new Date,
            operational_email: "test2@gmail.com",
            financial_email: "test2@finacial@gmail.com",
            cellphone: "(92) 9990-9999",
            telephone: "99999999",
            cep: "69086642",
            state: "amazonas",
            city: "Manaus",
            street: "Ingalterra",
            number: "332",
            neighborhood: "test",
            complement: "Proximo ao mercado beatriz",
            municipal_register: "test muni",
            state_register: "test state2",
            icms: "2222",
            iss: "1111",
            payment_conditional: "aaa",
            day_expiration_1: "30-08-2021",
            day_expiration_2: "30-08-2021",
            payment_type: "Cartão",
            emission_type: "11",
            observation: "11"
        });

        expect(updateCustomer.operational_email).toBe("test2@gmail.com");
        expect(updateCustomer.financial_email).toBe("test2@finacial@gmail.com")
    })
})