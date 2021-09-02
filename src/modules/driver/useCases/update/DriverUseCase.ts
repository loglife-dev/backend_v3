import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IDriverDTO } from "../../dtos/IDriverDTO";
import { Driver } from "../../infra/typeorm/entities/Driver";
import { IDriverRepository } from "../../repositories/IDriverRepository";



@injectable()
class UpdateDriverUseCase {
    constructor(
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute({
        id,
        situation,
        firstname,
        lastname,
        collector_id,
        cpf,
        email,
        observation,

    }: IDriverDTO): Promise<Driver> {
        const driverExist = await this.driverRepository.Get(id)

        if (!driverExist) {
            throw new AppError("Driver does not exists!");
        }

        const driverByCpf = await this.driverRepository.findByCpf(cpf)

        if (driverByCpf && driverExist.cpf !== cpf) {
            throw new AppError("Cpf already exists!");
        }


        Object.assign(driverExist, {
            id,
            situation,
            firstname,
            lastname,
            collector_id,
            cpf,
            email,
            observation,

        });

        const updatedDriver = await this.driverRepository.Update(
            driverExist
        );

        return updatedDriver;
    }
}

export { UpdateDriverUseCase }