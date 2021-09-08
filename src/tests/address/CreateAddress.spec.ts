
import { IAddressDTO } from "../../modules/address/dtos/IAddressDTO";
import { AddressRepositoryInMemory } from "../../modules/address/repositories/in-memory/AddressRepositoryInMemory";
import { CreateAddressUseCase } from "../../modules/address/useCases/create/AddressUseCase";
import { AppError } from "../../shared/errors/AppError";

let createAddressUseCase: CreateAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe("Create Address", () => {
    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);

    });

    it("should be able to create a new address", async () => {
        const address: IAddressDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            type: "fisica",
            cnpj_cpf: "038999999",
            trading_name: "plastfrios",
            branch: "Congelados",
            responsible_name: "Jhonatan Gomes",
            responsible_email: "jhonatan@gmail.com",
            responsible_telephone: "(92) 99999",
            cep: "6804444",
            state: "Amazonas",
            city_id: "09feae4e-2707-40ab-a9cd-098437332f8d",
            street: "Giberto Mestrinho",
            number: "332",
            neighborhood: "cts",
            complement: "Avenida Iraque",
            reference_point: "Ao lado da igreja catolica cristo ressuscitado",
            icms: "011111",
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: "ok"
        };
        await createAddressUseCase.execute(address);
        const addressCreated = await addressRepositoryInMemory.findByCnpjCpf(address.cnpj_cpf);

        expect(addressCreated).toHaveProperty("id");
    })

    it("should not be able to create a new address with cnpj_cpf exists", async () => {

        expect(async () => {
            const address: IAddressDTO = {
                id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
                customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
                type: "fisica",
                cnpj_cpf: "038999999",
                trading_name: "plastfrios",
                branch: "Congelados",
                responsible_name: "Jhonatan Gomes",
                responsible_email: "jhonatan@gmail.com",
                responsible_telephone: "(92) 99999",
                cep: "6804444",
                state: "Amazonas",
                city_id: "09feae4e-2707-40ab-a9cd-098437332f8d",
                street: "Giberto Mestrinho",
                number: "332",
                neighborhood: "cts",
                complement: "Avenida Iraque",
                reference_point: "Ao lado da igreja catolica cristo ressuscitado",
                icms: "011111",
                business_open: new Date(),
                business_close: new Date(),
                saturday_open: new Date(),
                saturday_close: new Date(),
                sunday_open: new Date(),
                sunday_close: new Date(),
                observation: "ok"
            };
            await createAddressUseCase.execute(address);
            await createAddressUseCase.execute(address);

        }).rejects.toBeInstanceOf(AppError)

    })
})