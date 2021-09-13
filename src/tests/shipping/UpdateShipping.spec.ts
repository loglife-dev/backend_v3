import { IShippingDTO } from "../../modules/shipping/dtos/IShippingDTO";
import { ShippingRepositoryInMemory } from "../../modules/shipping/repositories/in-memory/ShippingRepositoryInMemory";
import { CreateShippingUseCase } from "../../modules/shipping/useCases/create/ShippingUseCase";
import { UpdateShippingUseCase } from "../../modules/shipping/useCases/update/ShippingUseCase";

let createShippingUseCase: CreateShippingUseCase;
let shippingRepositoryInMemory: ShippingRepositoryInMemory;
let updateShippingUseCase: UpdateShippingUseCase;

describe("Update shipping", () => {
    beforeEach(() => {
        shippingRepositoryInMemory = new ShippingRepositoryInMemory();
        createShippingUseCase = new CreateShippingUseCase(shippingRepositoryInMemory);
        updateShippingUseCase = new UpdateShippingUseCase(shippingRepositoryInMemory);
    });
    it("Should be able to update one shipping", async () => {
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
        const findCity = await shippingRepositoryInMemory.findById(shipping.id)
       
        const updateShipping = await updateShippingUseCase.execute({
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name: 'shipping name',
            trading_name: 'trading test',
            cnpj: '88899992',
            email: 'shipping@gmail.com',
            modal: 'modal test',
            cellphone: '92 999009',
            telephone: '92 888883',
            observation: 'test observation'
        });

        expect(updateShipping.trading_name).toBe('trading test');
    })
})