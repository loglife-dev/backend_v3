import { ISetToCollectDTO } from "../../modules/setToCollect/dtos/ISetToCollectDTO";
import { SetToCollectRepositoryInMemory } from "../../modules/setToCollect/repositories/in-memory/SetToCollectRepositoryInMemory";
import { CreateSetToCollectUseCase } from "../../modules/setToCollect/useCases/create/SetToCollectUseCase";
import { UpdateSetToCollectUseCase } from "../../modules/setToCollect/useCases/update/SetToCollectUseCase";

let setToCollectRepositoryInMemory: SetToCollectRepositoryInMemory;
let createSetToCollectUseCase: CreateSetToCollectUseCase;
let updateSetToCollectUseCase: UpdateSetToCollectUseCase;

describe("Update SetToCollect", () => {
     beforeEach(() => {
        setToCollectRepositoryInMemory = new SetToCollectRepositoryInMemory();
        createSetToCollectUseCase = new CreateSetToCollectUseCase(setToCollectRepositoryInMemory)
        updateSetToCollectUseCase = new UpdateSetToCollectUseCase(setToCollectRepositoryInMemory);
     });

     it("Should be able to update one SetToCollect", async () => {
        const setToCollect: ISetToCollectDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "todo",
            address_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            provider_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "em test"
        }
        await createSetToCollectUseCase.execute(setToCollect);

        const updateCollect = await updateSetToCollectUseCase.execute({
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "feito",
            address_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            provider_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "finalizado"
        })
        expect(updateCollect.step).toBe("feito")
        expect(updateCollect.observation).toBe("finalizado")
    });
})