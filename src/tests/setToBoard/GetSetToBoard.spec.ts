import { ISetToBoardDTO } from "../../modules/setToBoard/dtos/ISetToBoardDTO";
import { SetToBoardRepositoryInMemory } from "../../modules/setToBoard/repositories/in-memory/SetToBoardRepositoryInMemory";
import { CreateSetToBoardUseCase } from "../../modules/setToBoard/useCases/create/SetToBoardUseCase";
import { GetAllSetToBoardUseCase, GetSetToBoardUseCase } from "../../modules/setToBoard/useCases/get/SetToBoardUseCase";

let createSetToBoardUseCase: CreateSetToBoardUseCase;
let setToBoardRepositoryInMemory: SetToBoardRepositoryInMemory;
let getAllSetToBoardUseCase: GetAllSetToBoardUseCase;
let getSetToBoardUseCase: GetSetToBoardUseCase;

describe("List all SetToBoard", () => {
    beforeEach(() => {
        setToBoardRepositoryInMemory = new SetToBoardRepositoryInMemory();
        createSetToBoardUseCase = new CreateSetToBoardUseCase(setToBoardRepositoryInMemory);
        getAllSetToBoardUseCase = new GetAllSetToBoardUseCase(setToBoardRepositoryInMemory);
        getSetToBoardUseCase = new GetSetToBoardUseCase(setToBoardRepositoryInMemory);

    })

    it("Should be able to list all SetToBoard", async () => {
        const board: ISetToBoardDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "teste step",
            branch_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "observation teste"
        }
        await createSetToBoardUseCase.execute(board);

        const all = await getAllSetToBoardUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id SetToBoard", async () => {
        const board: ISetToBoardDTO = {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step: "teste step",
            branch_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation: "observation teste"
        }
        await createSetToBoardUseCase.execute(board);

        const findBoard = await getSetToBoardUseCase.execute(board.id);

        expect(findBoard.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6");
    })
})