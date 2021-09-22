import { ServiceGroupRepositoryInMemory } from "../../modules/serviceGroup/repositories/in-memory/ServiceGroupRepositoryInMemory";
import { CreateServiceGroupUseCase } from "../../modules/serviceGroup/useCases/create/ServiceGroupUseCase";

let createServiceGroupUseCase: CreateServiceGroupUseCase;
let serviceGroupRepositoryInMemory: ServiceGroupRepositoryInMemory;

describe("Create ServiceGroup", () => {
    beforeEach(() => {
        serviceGroupRepositoryInMemory = new ServiceGroupRepositoryInMemory();
        createServiceGroupUseCase = new CreateServiceGroupUseCase(serviceGroupRepositoryInMemory);
    })

    it("should be able to create a new serviceGroup", async () => {
        const group: IServiceGroupDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list: ["1"],
        }
        await createServiceGroupUseCase.execute(group);
        const findId = await serviceGroupRepositoryInMemory.findById(group.id);

        expect(findId).toHaveProperty("id");
    });
})