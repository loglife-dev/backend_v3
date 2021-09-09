import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepositories";
import { ICityRepository } from "../../repositories/ICityRepository";
import { City } from "../entities/City";


class CityRepository extends BaseRepository<City> implements ICityRepository {
    constructor() {
        super(City);
    }

     async findByName(name: string): Promise<City> {
        return this.repository.findOne({ name })
    }

     async findById(id: string): Promise<City> {
        return this.repository.findOne({
            where: { id },
            relations: ["hubId"],
            order: {
                name: "ASC"
            }
        })
    }

     async Get(): Promise<City[]> {
        const all = await this.repository.find({
            relations: ["hubId"],
            order: {
                name: "ASC"
            },
        })

        return all;
    }
}

export { CityRepository }