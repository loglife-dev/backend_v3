import { ISetToBoardDTO } from "../../dtos/ISetToBoardDTO";
import { SetToBoard } from "../../infra/typeorm/entities/SetToBoard";
import { ISetToBoardRepository } from "../ISetToBoardRepository";

class SetToBoardRepositoryInMemory implements ISetToBoardRepository {
    boards: SetToBoard[] = []

    async Get(): Promise<SetToBoard[]> {
        const all = this.boards;
        return all;
    }

    async findById(id: string): Promise<SetToBoard> {
        const board = this.boards.find((board) => board.id === id);

        return board;
    }

    async Create({
        id,
        group_id,
        step,
        branch_id,
        driver_id,
        observation,
    }: ISetToBoardDTO): Promise<SetToBoard> {
        const setToBoard = new SetToBoard();

        Object.assign(setToBoard,{
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            group_id : "fee4d482-744c-48a4-aa23-881859bb6074",
            step,
            branch_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation,
        });
        this.boards.push(setToBoard);

        return setToBoard;
    }

    async Update(setToBoard: SetToBoard): Promise<SetToBoard> {
        this.boards.push(setToBoard);

        return setToBoard;
    }

    async Delete(setToBoard: SetToBoard): Promise<void> {
        const findIndex = this.boards.findIndex(setToBoard => setToBoard === setToBoard);

        this.boards.splice(findIndex, 1);

    }

}

export { SetToBoardRepositoryInMemory }