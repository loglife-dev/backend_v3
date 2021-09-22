import { ISetToBoardDTO } from "../../modules/setToBoard/dtos/ISetToBoardDTO";
import { SetToBoardRepositoryInMemory } from "../../modules/setToBoard/repositories/in-memory/SetToBoardRepositoryInMemory";
import { CreateSetToBoardUseCase } from "../../modules/setToBoard/useCases/create/SetToBoardUseCase";

let createSetToBoardUseCase: CreateSetToBoardUseCase;
let setToBoardRepositoryInMemory: SetToBoardRepositoryInMemory;

describe("Create SetToBoard", () => {
    beforeEach(() => {
        setToBoardRepositoryInMemory = new SetToBoardRepositoryInMemory();
        createSetToBoardUseCase = new CreateSetToBoardUseCase(setToBoardRepositoryInMemory);
    });

    it("should be able to create a new setToBoard", async () => {
        const board: ISetToBoardDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "teste step",
            branch_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "observation teste"
        }
        await createSetToBoardUseCase.execute(board);
        const findId = await setToBoardRepositoryInMemory.findById(board.id);

        expect(findId).toHaveProperty("id");
    });
})