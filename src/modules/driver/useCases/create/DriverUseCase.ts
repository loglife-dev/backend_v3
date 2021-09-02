import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IDriverDTO } from "../../dtos/IDriverDTO";
import { Driver } from "../../infra/typeorm/entities/Driver";
import { IDriverRepository } from "../../repositories/IDriverRepository";


@injectable()
class CreateDriverUseCase {
    constructor(
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute({
        situation,
        firstname,
        lastname,
        collector_id,
        cpf,
        email,
        observation,

    }: IDriverDTO): Promise<Driver> {

        if (situation === "" || firstname === "" || cpf === "" || email === "") {
            throw new AppError("fill fieds", 400)
        }

        const DriverAlreadyExists = await this.driverRepository.findByCpf(cpf)

        if (DriverAlreadyExists) {
            throw new AppError("There is already a registered user with this Driver!!", 400)
        }

        const driver = new Driver();

        Object.assign(driver, {
            situation,
            firstname,
            lastname,
            collector_id,
            cpf,
            email,
            observation,
        });

        const createDriver = await this.driverRepository.Create(driver)

        return createDriver;

    }
}

export { CreateDriverUseCase };
