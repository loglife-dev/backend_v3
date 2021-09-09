import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IDriverRepository } from "../../../repositories/IDriverRepository";
import { Driver } from "../entities/Driver";


class DriverRepository extends BaseRepository<Driver> implements IDriverRepository {
    constructor() {
        super(Driver)
    }

    async Get(): Promise<Driver[]> {
        return this.repository.find({
            relations: ["collectorId"],
            order: {
                firstname: 'ASC'
            }
        });
    }

    async findById(id: string): Promise<Driver> {
        return this.repository.findOne({
            where: { id },
            relations: ["collectorId"],
            order: {
                firstname: 'ASC'
            }
        })
    }

    async findByCpf(cpf: string): Promise<Driver> {
        return this.repository.findOne({ cpf })
    }
}
export { DriverRepository }