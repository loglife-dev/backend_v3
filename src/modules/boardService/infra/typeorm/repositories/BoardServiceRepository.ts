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


    async findByBoardId(board_id: string): Promise<BoardService[]> {
        return this.repository.createQueryBuilder()
            .select("boardService")
            .from(BoardService, "boardService")
            .where("boardService.board_id =:id", { id: board_id })
            .getMany()

    }

    async All(): Promise<BoardService[]> {
        const boardServices = await this.repository.find();

        return boardServices;
    }

    async create({
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
        const boardService = this.repository.create({
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

        await this.repository.save(boardService)

        return boardService;
    }

    async save(boardService: BoardService): Promise<BoardService> {
        const boardServices = await this.repository.save(boardService)

        return boardServices;
    }

    async findById(id: string): Promise<BoardService> {
        return this.repository.findOne({
            where: { id },
            relations: ["serviceId", "setToBoardId"],
            order: {
                created_at: 'ASC'
            }
        })
    }

    async UpdateByBoardId(boardService: BoardService): Promise<void> {
        await this.repository.createQueryBuilder()
            .update(BoardService)
            .set(request.body)
            .where("board_id = :board_id")
            .execute()
    }

    async Get(): Promise<BoardService[]> {
        return this.repository.find({
            order: {
                id: 'ASC'
            }
        });
    }


}
export { BoardServiceRepository }