import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { BoardService } from "../../infra/typeorm/entities/BoardService";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";

@injectable()
class GetBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository) { }

    async execute(id: string): Promise<BoardService> {
        const board = await this.boardServiceRepository.findById(id)

        if (!board) {
            throw new AppError("BoardService does not exists.")
        }

        return board;
    }
}

@injectable()
class GetAllBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository) { }

    async execute(): Promise<BoardService[]> {
        const board = await this.boardServiceRepository.Get()

        return board;
    }
}

export { GetBoardServiceUseCase, GetAllBoardServiceUseCase };