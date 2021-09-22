import { ISetToBoardDTO } from "../../modules/setToBoard/dtos/ISetToBoardDTO";
import { SetToBoardRepositoryInMemory } from "../../modules/setToBoard/repositories/in-memory/SetToBoardRepositoryInMemory";
import { CreateSetToBoardUseCase } from "../../modules/setToBoard/useCases/create/SetToBoardUseCase";
import { UpdateSetToBoardUseCase } from "../../modules/setToBoard/useCases/update/UpdateSetToBoardUseCase";

let createSetToBoardUseCase: CreateSetToBoardUseCase;
let setToBoardRepositoryInMemory: SetToBoardRepositoryInMemory;
let updateSetToBoardUseCase: UpdateSetToBoardUseCase;

describe("Update SetToBoard", () => {
    beforeEach(() => {
        setToBoardRepositoryInMemory = new SetToBoardRepositoryInMemory();
        createSetToBoardUseCase =  new CreateSetToBoardUseCase(setToBoardRepositoryInMemory);
        updateSetToBoardUseCase = new UpdateSetToBoardUseCase(setToBoardRepositoryInMemory);
    });

    it("Should be able to update one serviceGroup", async () => {
         const board: ISetToBoardDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "teste step",
            branch_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "observation teste"
        }
        await createSetToBoardUseCase.execute(board);
        const find = await setToBoardRepositoryInMemory.findById(board.id);

        const updateBoard = await updateSetToBoardUseCase.execute({
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "feito",
            branch_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "observation teste"
        })
        expect(updateBoard.step).toBe("feito");
    });
})