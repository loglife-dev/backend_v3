import { IAddressDTO } from "../../modules/address/dtos/IAddressDTO";
import { AddressRepositoryInMemory } from "../../modules/address/repositories/in-memory/AddressRepositoryInMemory";
import { CreateAddressUseCase } from "../../modules/address/useCases/create/AddressUseCase";
import { GetAddressUseCase, GetAllAddressUseCase } from "../../modules/address/useCases/get/AddressUseCase";


let getAllAddressUseCase: GetAllAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let createAddressUseCase: CreateAddressUseCase;
let getAddressUseCase: GetAddressUseCase;

describe("List all address", () => {
    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
        getAllAddressUseCase = new GetAllAddressUseCase(addressRepositoryInMemory);
        getAddressUseCase = new GetAddressUseCase(addressRepositoryInMemory);
    });

    it("Should be able to list all address", async () => {
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

        const all = await getAllAddressUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
       
    })

    it("Should be able to findOne id address", async () => {
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

        const findAddressId = await getAddressUseCase.execute(address.id)

        expect(findAddressId.id).toBe('59fde46d-40ad-46ac-a674-a8506c4791f6');
    })
})