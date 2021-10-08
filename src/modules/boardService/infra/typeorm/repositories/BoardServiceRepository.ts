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

    async findById(id: string): Promise<BoardService> {
        return this.repository.findOne({
            where: { service_id: id },
            relations: ["serviceId", "branchId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        })
    }

    async Get(): Promise<BoardService[]> {
        return this.repository.find({
            relations: ["serviceId", "branchId", "driverId"],
            order: {
                created_at: 'ASC'
            }
        });
    }


}
export { BoardServiceRepository }