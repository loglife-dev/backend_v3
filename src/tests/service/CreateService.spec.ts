import { Generated } from "typeorm";
import { IServiceDTO } from "../../modules/service/dtos/IServiceDTO";
import { ServiceRepositoryInMemory } from "../../modules/service/repositories/in-memory/ServiceRepositoryInMemory";
import { CreateServiceUseCase } from "../../modules/service/useCases/create/ServiceUseCase";
import { AppError } from "../../shared/errors/AppError";

let createServiceUseCase: CreateServiceUseCase;
let serviceRepositoryInMemory: ServiceRepositoryInMemory;

describe("Create Service", () => {
    beforeEach(() => {
        serviceRepositoryInMemory = new ServiceRepositoryInMemory();
        createServiceUseCase = new CreateServiceUseCase(serviceRepositoryInMemory);
    })

    it("should be able to create a new service", async () => {
        const service: IServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "todo",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        }
        await createServiceUseCase.execute(service);
        const findId = await serviceRepositoryInMemory.findByProtocol(service.protocol);

        expect(findId).toHaveProperty("id");
    });

    it("should not be able to create a protocol on a non-existent service", async () => {
        const service: IServiceDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol: 1,
            step: "todo",
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        }
        await createServiceUseCase.execute(service);

        expect(
            createServiceUseCase.execute({
                id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
                protocol: 1,
                step: "todo",
                customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
                group_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            })
        ).rejects.toBeInstanceOf(AppError)
    })
})