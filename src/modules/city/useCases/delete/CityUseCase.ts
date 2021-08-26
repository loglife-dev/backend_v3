import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICityRepository } from "../../repositories/ICityRepository";


@injectable()
class DeleteCityUseCase {
    constructor(
        @inject("CityRepository")
        private readonly cityRepository: ICityRepository) { }

    async execute(id: string): Promise<void> {
        const city = await this.cityRepository.Get(id)

        if (!city) {
            throw new AppError("City does not exists!");
        }

        await this.cityRepository.Delete(city);

    }
}

export { DeleteCityUseCase }