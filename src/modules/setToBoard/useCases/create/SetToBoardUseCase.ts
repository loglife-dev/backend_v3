import { inject, injectable } from "tsyringe";
import { ISetToBoardDTO } from "../../dtos/ISetToBoardDTO";
import { SetToBoard } from "../../infra/typeorm/entities/SetToBoard";
import { ISetToBoardRepository } from "../../repositories/ISetToBoardRepository";

@injectable()
class CreateSetToBoardUseCase {
    constructor(
        @inject("SetToBoardRepository")
        private readonly setToBoardRepository: ISetToBoardRepository) { }

    async execute({
        service_id,
        step,
        branch_id,
        driver_id,
        observation,
    }: ISetToBoardDTO): Promise<SetToBoard> {
        const setToBoard = new SetToBoard();

        Object.assign(setToBoard, {
            service_id,
            step,
            branch_id,
            driver_id,
            observation,
        });
        const createBoard = await this.setToBoardRepository.Create(setToBoard);

        return createBoard

    }
}
export { CreateSetToBoardUseCase }