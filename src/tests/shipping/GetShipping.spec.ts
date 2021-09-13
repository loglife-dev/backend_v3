import { IShippingDTO } from "../../modules/shipping/dtos/IShippingDTO";
import { ShippingRepositoryInMemory } from "../../modules/shipping/repositories/in-memory/ShippingRepositoryInMemory";
import { CreateShippingUseCase } from "../../modules/shipping/useCases/create/ShippingUseCase";
import { GetAllShippingUseCase, GetShippingUseCase } from "../../modules/shipping/useCases/get/ShippingUseCase";

let getAllShippingUseCase: GetAllShippingUseCase;
let getShippingUseCase: GetShippingUseCase;
let createShippingUseCase: CreateShippingUseCase;
let shippingRepositoryInMemory: ShippingRepositoryInMemory;

describe("List all Shipping", () => {
    beforeEach(() => {
        shippingRepositoryInMemory = new ShippingRepositoryInMemory();
        createShippingUseCase = new CreateShippingUseCase(shippingRepositoryInMemory);
        getAllShippingUseCase = new GetAllShippingUseCase(shippingRepositoryInMemory);
        getShippingUseCase = new GetShippingUseCase(shippingRepositoryInMemory);
    });


    it("Should be able to list all shipping", async () => {
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

        const all = await getAllShippingUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id shipping", async () => {
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

        const findShippingId = await getShippingUseCase.execute(shipping.id);

        expect(findShippingId.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6");
    })
});
