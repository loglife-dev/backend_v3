import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISetToBoardDTO } from "../../dtos/ISetToBoardDTO";
import { SetToBoard } from "../../infra/typeorm/entities/SetToBoard";
import { ISetToBoardRepository } from "../../repositories/ISetToBoardRepository";

@injectable()
class UpdateSetToBoardUseCase {
    constructor(
        @inject("SetToBoardRepository")
        private readonly setToBoardRepository: ISetToBoardRepository) { }

    async execute({
        id,
        service_id,
        step,
        branch_id,
        driver_id,
        observation,
    }: ISetToBoardDTO): Promise<SetToBoard> {
        const board = await this.setToBoardRepository.findById(id);

        if (!board) {
            throw new AppError("SetToBoard does not exists!");
        }

        Object.assign(board, {
            id,
            service_id,
            step,
            branch_id,
            driver_id,
            observation,
        });
        const updateSetToBoard = await this.setToBoardRepository.Update(board);

        return updateSetToBoard;
    }
}
export { UpdateSetToBoardUseCase }