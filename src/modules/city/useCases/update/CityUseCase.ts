import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICityDTO } from "../../dtos/ICityDTO";
import { City } from "../../infra/entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";


@injectable()
class UpdateCityUseCase {
    constructor(
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

    async execute({
        id,
        name,
        state,
        hub_id,
        schedule_deadline,
        observation,
    }: ICityDTO): Promise<City> {
        const cityExist = await this.cityRepository.Get(id)

        if (!cityExist) {
            throw new AppError("Hub does not exists!");
        }

        const cityExistByName = await this.cityRepository.findByName(name)

        if (cityExistByName && cityExist.name !== name) {
            throw new AppError("Hub already exists!");
        }


        Object.assign(cityExist, {
            id,
            name,
            state,
            hub_id,
            schedule_deadline,
            observation,

        });

        const updatedCity = await this.cityRepository.Update(
            cityExist
        );

        return updatedCity;
    }
}

export { UpdateCityUseCase }