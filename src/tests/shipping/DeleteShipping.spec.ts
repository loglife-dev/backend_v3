import { IShippingDTO } from "../../modules/shipping/dtos/IShippingDTO";
import { ShippingRepositoryInMemory } from "../../modules/shipping/repositories/in-memory/ShippingRepositoryInMemory";
import { CreateShippingUseCase } from "../../modules/shipping/useCases/create/ShippingUseCase";
import { DeleteShippingUseCase } from "../../modules/shipping/useCases/delete/ShippingUseCase";

let createShippingUseCase: CreateShippingUseCase;
let shippingRepositoryInMemory: ShippingRepositoryInMemory;
let deleteShippingUseCase: DeleteShippingUseCase;

describe("Delete a Shipping", () => {
    beforeEach(() => {
        shippingRepositoryInMemory = new ShippingRepositoryInMemory();
        createShippingUseCase = new CreateShippingUseCase(shippingRepositoryInMemory);
        deleteShippingUseCase = new DeleteShippingUseCase(shippingRepositoryInMemory);
    });

    it("Should be able to exclude one city", async () => {
        const shipping: IShippingDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name: 'shipping name',
            trading_name: 'trading shippind',
            cnpj: '88899992',
            email: 'shipping@gmail.com',
            modal: 'modal test',
            cellphone: '92 999009',
            telephone: '92 888883',
            observation: 'test observation'
        }
        await createShippingUseCase.execute(shipping);

        const findId = await deleteShippingUseCase.execute(shipping.id);

        expect(findId).toBe(undefined);
    });
})