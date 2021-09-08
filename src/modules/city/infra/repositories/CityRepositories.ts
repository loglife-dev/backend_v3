import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepositories";
import { ICityRepository } from "../../repositories/ICityRepository";
import { City } from "../entities/City";


class CityRepository extends BaseRepository<City> implements ICityRepository {
    constructor() {
        super(City);
    }


    public async findByName(name: string): Promise<City> {
        return this.repository.findOne({ name })
    }

    public async findById(id: string): Promise<City> {
        return this.repository.findOne({
            where: { id },
            relations: ["hubId"]
        })
    }

    public async list(): Promise<City[]> {
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