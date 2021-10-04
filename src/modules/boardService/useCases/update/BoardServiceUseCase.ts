import { response } from "express";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IBoardServiceDTO } from "../../dtos/BoardServiceDTO";
import { BoardService } from "../../infra/typeorm/entities/BoardService";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";


@injectable()
class UpdateBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        id,
        service_id,
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
    }: IBoardServiceDTO): Promise<BoardService[]> {
        const data = await this.boardServiceRepository.findByBoardId(board_id);

        const board = await this.setToBoardRepository.findById(board_id);
        board.step = 'DONE';
        await this.setToBoardRepository.Update(board);

        const serviceGroup = await this.serviceGroupRepository.findById(board.group_id);

        serviceGroup.service_list.map(async res => {
            const service = await this.serviceRepository.findById(res);
            service.step = 'BOARD'
            await this.serviceRepository.Update(service);
        })

        data.forEach(async res => {
            res.cte_photo = cte_photo;
            res.service_id = service_id;
            res.board_id = board_id;
            res.operational_number = operational_number;
            res.cte = cte;
            res.cte_loglife = cte_loglife;
            res.board_volume = board_volume;
            res.board_weight = board_weight;
            res.cte_photo = cte_photo;
            res.real_weight = real_weight;
            res.taxed_weight = taxed_weight;
            res.cte_transfer_cost = cte_transfer_cost;
            res.board_observation = board_observation;
            res.validate_observation = validate_observation;
            await this.boardServiceRepository.save(res)
        });


        return data
    }
}
export { UpdateBoardServiceUseCase }
