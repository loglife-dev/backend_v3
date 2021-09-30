import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { SetToBoard } from "../../../setToBoard/infra/typeorm/entities/SetToBoard";
import { ISetToBoardRepository } from "../../../setToBoard/repositories/ISetToBoardRepository";
import { IBoardServiceDTO } from "../../dtos/BoardServiceDTO";
import { BoardService } from "../../infra/typeorm/entities/BoardService";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";


@injectable()
class UpdateBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository,
        @inject("SetToBoardRepository")
        private readonly setToBoardServiceRepository: ISetToBoardRepository) { }

    async execute({
        id,
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
        const boardService = await this.boardServiceRepository.findById(id)

        if (!boardService) {
            throw new AppError("BoardService does not exists!");
        }

        boardService.service_id = service_id;
        boardService.board_id = board_id;
        boardService.arrival_latitude = arrival_latitude;
        boardService.arrival_longitude = arrival_longitude;
        boardService.arrival_timestamp = arrival_timestamp;
        boardService.operational_number = operational_number;
        boardService.cte = cte;
        boardService.cte_loglife = cte_loglife;
        boardService.board_volume = board_volume;
        boardService.board_weight = board_weight;
        boardService.cte_photo = cte_photo;
        boardService.real_weight = real_weight;
        boardService.taxed_weight = taxed_weight;
        boardService.cte_transfer_cost = cte_transfer_cost;
        boardService.departure_latitude = departure_latitude;
        boardService.departure_longitude = departure_longitude;
        boardService.departure_timestamp = departure_timestamp;
        boardService.board_observation = board_observation;
        boardService.validate_observation = validate_observation;

        const updateBoardService = await this.boardServiceRepository.Update(boardService);

        return updateBoardService;
    }
}
export { UpdateBoardServiceUseCase }
