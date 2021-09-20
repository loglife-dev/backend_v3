import { ISetToCollectDTO } from "../../modules/setToCollect/dtos/ISetToCollectDTO";
import { SetToCollectRepositoryInMemory } from "../../modules/setToCollect/repositories/in-memory/SetToCollectRepositoryInMemory";
import { CreateSetToCollectUseCase } from "../../modules/setToCollect/useCases/create/SetToCollectUseCase";
import { GetAllSetToCollectUseCase, GetSetToCollectUseCase } from "../../modules/setToCollect/useCases/get/SetToCollectUseCase";

let getAllSetToCollectUseCase: GetAllSetToCollectUseCase;
let getSetToCollectUseCase: GetSetToCollectUseCase;
let createSetToCollectUseCase: CreateSetToCollectUseCase;
let setToCollectRepositoryInMemory: SetToCollectRepositoryInMemory;

describe("List all SetToCollect", () => {
    beforeEach(() => {
        setToCollectRepositoryInMemory = new SetToCollectRepositoryInMemory();
        createSetToCollectUseCase = new CreateSetToCollectUseCase(setToCollectRepositoryInMemory);
        getAllSetToCollectUseCase = new GetAllSetToCollectUseCase(setToCollectRepositoryInMemory);
        getSetToCollectUseCase = new GetSetToCollectUseCase(setToCollectRepositoryInMemory);
    });

    it("Should be able to list all SetToCollect", async () => {
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

        const all = await getAllSetToCollectUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

    it("Should be able to findOne id SetToCollect", async () => {
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

        const findSetToCollect = await getSetToCollectUseCase.execute(setToCollect.id);

        expect(findSetToCollect.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6");
        console.log(setToCollect)
    })
})