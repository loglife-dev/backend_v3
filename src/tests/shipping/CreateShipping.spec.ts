import { IShippingDTO } from "../../modules/shipping/dtos/IShippingDTO";
import { ShippingRepositoryInMemory } from "../../modules/shipping/repositories/in-memory/ShippingRepositoryInMemory";
import { CreateShippingUseCase } from "../../modules/shipping/useCases/create/ShippingUseCase";
import { AppError } from "../../shared/errors/AppError";


let createShippingUseCase: CreateShippingUseCase;
let shippingRepositoryInMemory: ShippingRepositoryInMemory;

describe("Create Shipping", () => {
    beforeEach(() => {
        shippingRepositoryInMemory = new ShippingRepositoryInMemory();
        createShippingUseCase = new CreateShippingUseCase(shippingRepositoryInMemory);
    });

    it("should be able to create a new shipping", async () => {
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
        const createShipping = await shippingRepositoryInMemory.findByCnpj(shipping.cnpj);
        expect(createShipping).toHaveProperty("id");
    });

    it("should not be able to create a new shipping with cnpj exists", async () => {

        expect(async () => {
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
            await createShippingUseCase.execute(shipping);

        }).rejects.toBeInstanceOf(AppError)
        
    })
})