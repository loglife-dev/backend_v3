import { ISetToCollectDTO } from "../../modules/setToCollect/dtos/ISetToCollectDTO";
import { SetToCollectRepositoryInMemory } from "../../modules/setToCollect/repositories/in-memory/SetToCollectRepositoryInMemory";
import { CreateSetToCollectUseCase } from "../../modules/setToCollect/useCases/create/SetToCollectUseCase";
import { DeleteSetToCollectUseCase } from "../../modules/setToCollect/useCases/delete/SetToCollectUseCase";

let createSetToCollectUseCase: CreateSetToCollectUseCase;
let setToCollectRepositoryInMemory: SetToCollectRepositoryInMemory;
let deleteSetToCollectUseCase: DeleteSetToCollectUseCase;

describe("Delete SetToCollect", () => {
    beforeEach(() => {
        setToCollectRepositoryInMemory = new SetToCollectRepositoryInMemory();
        createSetToCollectUseCase = new CreateSetToCollectUseCase(setToCollectRepositoryInMemory);
        deleteSetToCollectUseCase = new DeleteSetToCollectUseCase(setToCollectRepositoryInMemory);
    });

    it("Should be able to exclude one setToCollect", async () => {
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
        const findId = await deleteSetToCollectUseCase.execute(setToCollect.id);

        expect(findId).toBe(undefined);
    })
})