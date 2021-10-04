import { request } from "express";
import { getRepository, Repository } from "typeorm";
import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IBoardServiceDTO } from "../../../dtos/BoardServiceDTO";
import { IBoardServiceRepository } from "../../../repositories/IBoardServiceRepository";
import { BoardService } from "../entities/BoardService";

class BoardServiceRepository extends BaseRepository<BoardService> implements IBoardServiceRepository {
    constructor() {
        super(BoardService)
    }

    async findByBoardId(service_id: string): Promise<BoardService> {
        return this.repository.createQueryBuilder()
            .select("boardService")
            .from(BoardService, "boardService")
            .where("boardService.service_id =:id", { id: service_id })
            .getOne()

    }

    async create({
        service_id,
        address_id,
        driver_id,
        step,
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
        const boardService = this.repository.create({
            service_id,
            address_id,
            driver_id,
            step,
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

        await this.repository.save(boardService)

        return boardService;
    }


    async findById(id: string): Promise<BoardService> {
        return this.repository.findOne({
            where: { id },
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        })
    }

    async Get(): Promise<BoardService[]> {
        return this.repository.find({
            relations: ["serviceId", "addressId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        });
    }


}
export { BoardServiceRepository }