import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IBranchRepository } from "../../../repositories/IBranchRepository";
import { Branch } from "../entities/Branch";


class BranchRepository extends BaseRepository<Branch> implements IBranchRepository {
    constructor() {
        super(Branch)
    }

    async Get(): Promise<Branch[]> {
        return this.repository.find({
            relations: ["hubId", "shippingId"],
            order: {
                nickname: 'ASC'
            }
        });
    }

    async findById(id: string): Promise<Branch> {
        return this.repository.findOne({
            where: { id },
            relations: ["hubId", "shippingId"],
            order: {
                nickname: 'ASC'
            }
        })
    }

    async findByNickname(nickname: string): Promise<Branch> {
        return this.repository.findOne({ nickname })
    }

}

export { BranchRepository }