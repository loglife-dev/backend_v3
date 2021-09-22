import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISetToBoardRepository } from "../../repositories/ISetToBoardRepository";

@injectable()
class DeleteSetToBoardUseCase {
    constructor(
        @inject("SetToBoardRepository")
        private readonly setToBoardRepository: ISetToBoardRepository) { }

    async execute(id: string): Promise<void> {
        const board = await this.setToBoardRepository.findById(id);

        if (!board) {
            throw new AppError("SetToBoard does not exists!");
        }
        await this.setToBoardRepository.Delete(board);
    }
}

export { DeleteSetToBoardUseCase }