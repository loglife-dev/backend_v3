import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IDriverRepository } from "../../../repositories/IDriverRepository";
import { Driver } from "../entities/Driver";


class DriverRepository extends BaseRepository<Driver> implements IDriverRepository {
    constructor() {
        super(Driver)
    }

    async Get(): Promise<Driver[]> {
        const driver = await this.repository.find({
            relations:  ["collectorId"],
           
        });
        return driver;
    }

    async findById(id: string): Promise<Driver> {
        const driver = await this.repository.findOne({ id })
        return driver;
    }

    async findByCpf(cpf: string): Promise<Driver> {
        return this.repository.findOne({ cpf })
    }
}
export { DriverRepository }