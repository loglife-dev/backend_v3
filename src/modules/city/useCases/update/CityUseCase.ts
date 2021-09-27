import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubRepository } from "../../../hub/repositories/IHubRepositories";
import { ICityDTO } from "../../dtos/ICityDTO";
import { City } from "../../infra/entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";

@injectable()
class UpdateCityUseCase {
    constructor(
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository,
        @inject("HubRepository")
        private hubRepository: IHubRepository) { }

    async execute({
        id,
        name,
        state,
        hub_id,
        schedule_deadline,
        observation,
    }: ICityDTO): Promise<City> {
        const city = await this.cityRepository.findById(id)

        if (!city) {
            throw new AppError("Hub does not exists!");
        }

        const cityExistByName = await this.cityRepository.findByName(name)

        if (cityExistByName && city.name !== name) {
            throw new AppError("Name already exists!");
        }

        const hubId = await this.hubRepository.findById(hub_id);

        if (!hubId) {
            throw new AppError("HubId does not exists!");
        }

        city.name = name;
        city.state = state;
        city.hub_id = hub_id;
        city.schedule_deadline = schedule_deadline;
        city.observation = observation;


        const updatedCity = await this.cityRepository.Update(city);

        return updatedCity;
    }
}

export { UpdateCityUseCase }