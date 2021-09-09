import { IAddressDTO } from "../../modules/address/dtos/IAddressDTO";
import { AddressRepositoryInMemory } from "../../modules/address/repositories/in-memory/AddressRepositoryInMemory";
import { CreateAddressUseCase } from "../../modules/address/useCases/create/AddressUseCase";
import { DeleteAddressUseCase } from "../../modules/address/useCases/delete/AddressUseCase";


let createAddressUseCase: CreateAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let deleteAddressUseCase: DeleteAddressUseCase;

describe("Delete a Address", () => {
    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
        deleteAddressUseCase = new DeleteAddressUseCase(addressRepositoryInMemory);
    });

    it("should be able to delete a address", async () => {
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
        const findId = await deleteAddressUseCase.execute(address.id);

        expect(findId).toBe(undefined);
    })

})
