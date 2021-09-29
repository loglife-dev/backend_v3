import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";

@injectable()
class DeleteBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository) { }

    async execute(id: string): Promise<void> {
        const board = await this.boardServiceRepository.findById(id)

        if (!board) {
            throw new AppError("BoardService does not exists!");
        }
        await this.boardServiceRepository.Delete(board);
    }
}

export { DeleteBoardServiceUseCase }