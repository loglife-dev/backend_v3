import { inject, injectable } from "tsyringe";
import { Driver } from "../../infra/typeorm/entities/Driver";
import { IDriverRepository } from "../../repositories/IDriverRepository";



@injectable()
class GetDriverUseCase {
    constructor(
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute(id: string): Promise<Driver> {
        const driver = await this.driverRepository.Get(id);

        return driver;
    }
}

@injectable()
class GetAllDriverUseCase {
    constructor(
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute(): Promise<Driver[]> {
        const driver = await this.driverRepository.GetAll()

        return driver;
    }
}

export { GetDriverUseCase, GetAllDriverUseCase };