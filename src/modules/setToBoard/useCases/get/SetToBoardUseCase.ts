import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { SetToBoard } from "../../infra/typeorm/entities/SetToBoard";
import { ISetToBoardRepository } from "../../repositories/ISetToBoardRepository";

@injectable()
class GetSetToBoardUseCase {
    constructor(
        @inject("SetToBoardRepository")
        private readonly setToBoardRepository: ISetToBoardRepository) { }

    async execute(id: string): Promise<SetToBoard> {
        const board = await this.setToBoardRepository.findById(id)

        if (!board) {
            throw new AppError("SetToBoard does not exists.")
        }

        return board;
    }
}

@injectable()
class GetAllSetToBoardUseCase {
    constructor(
        @inject("SetToBoardRepository")
        private readonly setToBoardRepository: ISetToBoardRepository) { }

    async execute(): Promise<SetToBoard[]> {
        const board = await this.setToBoardRepository.Get()

        return board;
    }
}

export { GetSetToBoardUseCase, GetAllSetToBoardUseCase };