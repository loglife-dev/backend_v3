import { IServiceDTO } from "../../modules/service/dtos/IServiceDTO";
import { ServiceRepositoryInMemory } from "../../modules/service/repositories/in-memory/ServiceRepositoryInMemory";
import { CreateServiceUseCase } from "../../modules/service/useCases/create/ServiceUseCase";
import { UpdateServiceUseCase } from "../../modules/service/useCases/update/ServiceUseCase";

let serviceRepositoryInMemory: ServiceRepositoryInMemory;
let createServiceUseCase: CreateServiceUseCase;
let updateServiceUseCase: UpdateServiceUseCase;

describe("Update service", () => {
    beforeEach(() => {
        serviceRepositoryInMemory = new ServiceRepositoryInMemory();
        createServiceUseCase = new CreateServiceUseCase(serviceRepositoryInMemory);
        updateServiceUseCase = new UpdateServiceUseCase(serviceRepositoryInMemory);
    });

    it("Should be able to update one service", async () => {
        const service: IServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "todo",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        }
        await createServiceUseCase.execute(service);

        const updateService = await updateServiceUseCase.execute({
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "feito",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        })
        expect(updateService.step).toBe("feito")
    });
})