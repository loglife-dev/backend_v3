import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { IBoardServiceDTO } from "../dtos/BoardServiceDTO";
import { BoardService } from "../infra/typeorm/entities/BoardService";

export interface IBoardServiceRepository extends IBaseRepository<BoardService> {

    Get(): Promise<BoardService[]>;
    findById(id: string): Promise<BoardService>;
    findByBoardId(service_id: string): Promise<BoardService>;
    create(data: IBoardServiceDTO): Promise<BoardService>;
}