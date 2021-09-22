import { IServiceDTO } from "../../modules/service/dtos/IServiceDTO";
import { ServiceRepositoryInMemory } from "../../modules/service/repositories/in-memory/ServiceRepositoryInMemory";
import { CreateServiceUseCase } from "../../modules/service/useCases/create/ServiceUseCase";
import { DeleteServiceUseCase } from "../../modules/service/useCases/delete/ServiceUseCase";

let createServiceUseCase: CreateServiceUseCase;
let serviceRepositoryInMemory: ServiceRepositoryInMemory;
let deleteServiceUseCase: DeleteServiceUseCase;

describe("Delete Service", () => {
    beforeEach(() => {
        serviceRepositoryInMemory = new ServiceRepositoryInMemory();
        createServiceUseCase = new CreateServiceUseCase(serviceRepositoryInMemory);
        deleteServiceUseCase = new DeleteServiceUseCase(serviceRepositoryInMemory);
    });

    it("Should be able to exclude one service", async () => {
        const service: IServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "todo",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        }
        await createServiceUseCase.execute(service);
        const findId = await deleteServiceUseCase.execute(service.id);

        expect(findId).toBe(undefined);
    })
})