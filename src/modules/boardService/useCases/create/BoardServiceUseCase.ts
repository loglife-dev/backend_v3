import { inject, injectable } from "tsyringe";
import { IBoardServiceDTO } from "../../dtos/BoardServiceDTO";
import { BoardService } from "../../infra/typeorm/entities/BoardService";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";

@injectable()
class CreateBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository) { }

    async execute({
        service_id,
        board_id,
        arrival_latitude,
        arrival_longitude,
        arrival_timestamp,
        operational_number,
        cte,
        cte_loglife,
        board_volume,
        board_weight,
        cte_photo,
        real_weight,
        taxed_weight,
        cte_transfer_cost,
        departure_latitude,
        departure_longitude,
        departure_timestamp,
        board_observation,
        validate_observation,
    }: IBoardServiceDTO): Promise<BoardService> {
        const boardService = new BoardService();

        Object.assign(boardService, {
            service_id,
            board_id,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            operational_number,
            cte,
            cte_loglife,
            board_volume,
            board_weight,
            cte_photo,
            real_weight,
            taxed_weight,
            cte_transfer_cost,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            board_observation,
            validate_observation,
        });
        const createBoard = await this.boardServiceRepository.Create(boardService);

        return createBoard

    }
}
export { CreateBoardServiceUseCase }