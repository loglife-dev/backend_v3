import { ServiceGroupRepositoryInMemory } from "../../modules/serviceGroup/repositories/in-memory/ServiceGroupRepositoryInMemory";
import { CreateServiceGroupUseCase } from "../../modules/serviceGroup/useCases/create/ServiceGroupUseCase";
import { GetAllServiceGroupUseCase, GetServiceGroupUseCase } from "../../modules/serviceGroup/useCases/get/ServiceGroupUseCase";


let getAllServiceGroupUseCase: GetAllServiceGroupUseCase;
let getServiceGroupUseCase: GetServiceGroupUseCase;
let createServiceGroupUseCase: CreateServiceGroupUseCase;
let serviceGroupRepositoryInMemory: ServiceGroupRepositoryInMemory;

describe("List all ServiceGroup", () => {
    beforeEach(() => {
        serviceGroupRepositoryInMemory = new ServiceGroupRepositoryInMemory();
        createServiceGroupUseCase = new CreateServiceGroupUseCase(serviceGroupRepositoryInMemory);
        getAllServiceGroupUseCase = new GetAllServiceGroupUseCase(serviceGroupRepositoryInMemory);
        getServiceGroupUseCase = new GetServiceGroupUseCase(serviceGroupRepositoryInMemory);
    });

    it("Should be able to list all serviceGroup", async () => {
        const group: IServiceGroupDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list: ["1"],
        }
        await createServiceGroupUseCase.execute(group);

        const all = await getAllServiceGroupUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id serviceGroup", async () => {
        const group: IServiceGroupDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list: ["1"],
        }
        await createServiceGroupUseCase.execute(group);

        const findGroup = await getServiceGroupUseCase.execute(group.id);

        expect(findGroup.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6");
    })
})