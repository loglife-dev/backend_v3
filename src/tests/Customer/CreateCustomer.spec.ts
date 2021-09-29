import { ICustomerDTO } from "../../modules/customer/dtos/ICustomerDTO";
import { CustomerRepositoryInMemory } from "../../modules/customer/repositories/in-memory/CustomerRepositoryInMemory";
import { CreateCustomerUseCase } from "../../modules/customer/useCases/create/CustomerUseCase";
import { AppError } from "../../shared/errors/AppError";
import { customerRoutes } from "../../shared/infra/routes/customer.routes";



let createCustomerUseCase: CreateCustomerUseCase;
let customerRepositoryInMemory: CustomerRepositoryInMemory;


describe("Create Customer", () => {
    beforeEach(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);

    });

    it("should be able to create a new customer", async () => {

        const customer: ICustomerDTO = {
            id: "09feae4e-2707-40ab-a9cd-098437332f8d",
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
        }

        await createCustomerUseCase.execute({
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            type: customer.type,
            situation: customer.situation,
            trading_firstname: customer.trading_firstname,
            company_lastname: customer.company_lastname,
            cnpj_cpf: customer.cnpj_cpf,
            deadline_delivery: new Date(),
            operational_email: customer.operational_email,
            financial_email: customer.financial_email,
            cellphone: customer.cellphone,
            telephone: customer.telephone,
            cep: customer.cep,
            state: customer.state,
            city: customer.city,
            street: customer.street,
            number: customer.number,
            neighborhood: customer.neighborhood,
            complement: customer.complement,
            municipal_register: customer.municipal_register,
            state_register: customer.state_register,
            icms: customer.icms,
            iss: customer.iss,
            payment_conditional: customer.payment_conditional,
            day_expiration_1: customer.day_expiration_1,
            day_expiration_2: customer.day_expiration_2,
            payment_type: customer.payment_type,
            emission_type: customer.emission_type,
            observation: customer.observation,
        });
        const customerCreated = await customerRepositoryInMemory.findByCnpjAndCpf(customer.cnpj_cpf);


        expect(customerCreated).toHaveProperty("id");
    })

    it("should not be able to create a new hub with cnpj_cpf exists", () => {

        expect(async () => {
            const customer = {
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
            }
             
            await createCustomerUseCase.execute({
                id: customer.id,
                type: customer.type,
                situation: customer.situation,
                trading_firstname: customer.trading_firstname,
                company_lastname: customer.company_lastname,
                cnpj_cpf: customer.cnpj_cpf,
                deadline_delivery: new Date(),
                operational_email: customer.operational_email,
                financial_email: customer.financial_email,
                cellphone: customer.cellphone,
                telephone: customer.telephone,
                cep: customer.cep,
                state: customer.state,
                city: customer.city,
                street: customer.street,
                number: customer.number,
                neighborhood: customer.neighborhood,
                complement: customer.complement,
                municipal_register: customer.municipal_register,
                state_register: customer.state_register,
                icms: customer.icms,
                iss: customer.iss,
                payment_conditional: customer.payment_conditional,
                day_expiration_1: customer.day_expiration_1,
                day_expiration_2: customer.day_expiration_2,
                payment_type: customer.payment_type,
                emission_type: customer.emission_type,
                observation: customer.observation,
            });

            await createCustomerUseCase.execute({
                id: customer.id,
                type: customer.type,
                situation: customer.situation,
                trading_firstname: customer.trading_firstname,
                company_lastname: customer.company_lastname,
                cnpj_cpf: customer.cnpj_cpf,
                deadline_delivery: new Date(),
                operational_email: customer.operational_email,
                financial_email: customer.financial_email,
                cellphone: customer.cellphone,
                telephone: customer.telephone,
                cep: customer.cep,
                state: customer.state,
                city: customer.city,
                street: customer.street,
                number: customer.number,
                neighborhood: customer.neighborhood,
                complement: customer.complement,
                municipal_register: customer.municipal_register,
                state_register: customer.state_register,
                icms: customer.icms,
                iss: customer.iss,
                payment_conditional: customer.payment_conditional,
                day_expiration_1: customer.day_expiration_1,
                day_expiration_2: customer.day_expiration_2,
                payment_type: customer.payment_type,
                emission_type: customer.emission_type,
                observation: customer.observation,
            });
        }).rejects.toBeInstanceOf(AppError);
    })
})