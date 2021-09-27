import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { ISetToBoardRepository } from "../../../repositories/ISetToBoardRepository";
import { SetToBoard } from "../entities/SetToBoard";

class SetToBoardRepository extends BaseRepository<SetToBoard> implements ISetToBoardRepository {
    constructor() {
        super(SetToBoard)
    }

    async Get(): Promise<SetToBoard[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<SetToBoard> {
        return this.repository.findOne({ 
            where: { id },
            relations: ["serviceId", "branchId", "driverId"]
        })
    }

}
export { SetToBoardRepository }