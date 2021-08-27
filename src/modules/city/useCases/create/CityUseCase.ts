import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICityDTO } from "../../dtos/ICityDTO";
import { City } from "../../infra/entities/City";
import { ICityRepository } from "../../repositories/ICityRepository";



@injectable()
class CreateCityUseCase {
    constructor(
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

     async execute({
        name,
        state,
        hub_id,
        deadline_collect,
        observation,

    }: ICityDTO): Promise<City> {  

        if ( name ==="" || state ===""){
            throw new AppError("fill fieds", 400)
        }
       
        const cityAlreadyExists = await this.cityRepository.findByName(name);

        if (cityAlreadyExists) {
            throw new AppError("There is already a registered user with this City!!", 400)
        }

        const city = new City();

        Object.assign(city, {
            name,
            state,
            hub_id,
            deadline_collect,
            observation,
        });

        const createCity = await this.cityRepository.Create(city)

        return createCity;

    }
}

export { CreateCityUseCase };
