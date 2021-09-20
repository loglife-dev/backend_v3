import { ISetToCollectDTO } from "../../modules/setToCollect/dtos/ISetToCollectDTO";
import { SetToCollectRepositoryInMemory } from "../../modules/setToCollect/repositories/in-memory/SetToCollectRepositoryInMemory";
import { CreateSetToCollectUseCase } from "../../modules/setToCollect/useCases/create/SetToCollectUseCase";

let createSetToCollectUseCase: CreateSetToCollectUseCase;
let setToCollectRepositoryInMemory: SetToCollectRepositoryInMemory;

describe("Create SetToCollect", () => {
    beforeEach(() => {
        setToCollectRepositoryInMemory = new SetToCollectRepositoryInMemory();
        createSetToCollectUseCase = new CreateSetToCollectUseCase(setToCollectRepositoryInMemory);
    });

    it("should be able to create a new SetToCollect", async () => {
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

        const findId = await setToCollectRepositoryInMemory.findById(setToCollect.id);

        expect(findId).toHaveProperty("id");
    });
})