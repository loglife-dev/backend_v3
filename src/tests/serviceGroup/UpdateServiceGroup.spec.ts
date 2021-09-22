import { ServiceGroupRepositoryInMemory } from "../../modules/serviceGroup/repositories/in-memory/ServiceGroupRepositoryInMemory";
import { CreateServiceGroupUseCase } from "../../modules/serviceGroup/useCases/create/ServiceGroupUseCase";
import { UpdateServiceGroupUseCase } from "../../modules/serviceGroup/useCases/update/ServiceGroupUseCase";

let createServiceGroupUseCase: CreateServiceGroupUseCase;
let serviceGroupRepositoryInMemory: ServiceGroupRepositoryInMemory;
let updateServiceGroupUseCase: UpdateServiceGroupUseCase;

describe("Update ServiceGroup", () => {
    beforeEach(() => {
        serviceGroupRepositoryInMemory = new ServiceGroupRepositoryInMemory();
        createServiceGroupUseCase = new CreateServiceGroupUseCase(serviceGroupRepositoryInMemory);
        updateServiceGroupUseCase = new UpdateServiceGroupUseCase(serviceGroupRepositoryInMemory);
    });

    it("Should be able to update one serviceGroup", async () => {
        const group: IServiceGroupDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list: ["1"],
        }
        await createServiceGroupUseCase.execute(group);
        const find = await serviceGroupRepositoryInMemory.findById(group.id);

        const updateServiceGroup = await updateServiceGroupUseCase.execute({
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list: ["2"],
        })
        expect(updateServiceGroup.service_list).toStrictEqual(["2"])
    });
})
