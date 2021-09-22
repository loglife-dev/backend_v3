import { ServiceGroupRepositoryInMemory } from "../../modules/serviceGroup/repositories/in-memory/ServiceGroupRepositoryInMemory";
import { CreateServiceGroupUseCase } from "../../modules/serviceGroup/useCases/create/ServiceGroupUseCase";
import { DeleteServiceGroupUseCase } from "../../modules/serviceGroup/useCases/delete/ServiceGroupUseCase";

let createServiceGroupUseCase: CreateServiceGroupUseCase;
let serviceGroupRepositoryInMemory: ServiceGroupRepositoryInMemory;
let deleteServiceGroupUseCase: DeleteServiceGroupUseCase;

describe("Delete ServiceGroup", () => {
    beforeEach(() => {
        serviceGroupRepositoryInMemory = new ServiceGroupRepositoryInMemory();
        createServiceGroupUseCase = new CreateServiceGroupUseCase(serviceGroupRepositoryInMemory);
        deleteServiceGroupUseCase = new DeleteServiceGroupUseCase(serviceGroupRepositoryInMemory);

    });

    it("Should be able to exclude one serviceGroup", async () => {
        const group: IServiceGroupDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list: ["1"],
        }
        await createServiceGroupUseCase.execute(group);
        const findId = await deleteServiceGroupUseCase.execute(group.id);

        expect(findId).toBe(undefined);
    })
})