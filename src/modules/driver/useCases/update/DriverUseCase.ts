import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorRepository } from "../../../collector/repositories/ICollectorRepository";
import { IDriverDTO } from "../../dtos/IDriverDTO";
import { Driver } from "../../infra/typeorm/entities/Driver";
import { IDriverRepository } from "../../repositories/IDriverRepository";

@injectable()
class UpdateDriverUseCase {
    constructor(
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository,
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

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
        const driverExist = await this.driverRepository.findById(id)

        if (!driverExist) {
            throw new AppError("Driver does not exists!");
        }

        const driverByCpf = await this.driverRepository.findByCpf(cpf)

        if (driverByCpf && driverExist.cpf !== cpf) {
            throw new AppError("Cpf already exists!");
        }

        const collector = await this.collectorRepository.findById(collector_id);

        driverExist.situation = situation;
        driverExist.firstname = firstname;
        driverExist.lastname = lastname;
        driverExist.cpf = cpf;
        driverExist.email = email;
        driverExist.observation = observation;

        const UpdateResponse = await this.driverRepository.Update({
            ...driverExist,
            collector
        });

        return UpdateResponse;
    }
}

export { UpdateDriverUseCase }