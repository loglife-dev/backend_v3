import { inject, injectable } from "tsyringe";
import { City } from "../../infra/entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";


@injectable()
class GetCityUseCase {
    constructor(
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

    async execute(id: string): Promise<City> {
        const city = await this.cityRepository.findById(id)

        return city;
    }
}

@injectable()
class GetAllCityUseCase {
    constructor(
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

    async execute(): Promise<City[]> {
        const city = await this.cityRepository.Get()

        return city;
    }
}

export { GetCityUseCase, GetAllCityUseCase };