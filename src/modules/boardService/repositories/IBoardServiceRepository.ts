import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { BoardService } from "../infra/typeorm/entities/BoardService";

export interface IBoardServiceRepository extends IBaseRepository<BoardService> {
    findByBoardId(board_id: string): Promise<BoardService>;
    Get(): Promise<BoardService[]>;
    findById(id: string): Promise<BoardService>;
}