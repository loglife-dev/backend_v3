import { IDriverDTO } from "../../dtos/IDriverDTO";
import { Driver } from "../../infra/typeorm/entities/Driver";
import { IDriverRepository } from "../IDriverRepository";



class DriverRepositoryInMemory implements IDriverRepository {
    drivers: Driver[] = [];

    async Get(id: string): Promise<Driver> {
        const driver = this.drivers.find((driver) => driver.id === id);
        return driver;
    }

    async GetAll(): Promise<Driver[]> {
        const all = this.drivers;
        return all;
    }

    async Create({
        id,
        situation,
        firstname,
        lastname,
        collector_id,
        cpf,
        email,
        observation,

    }: IDriverDTO): Promise<Driver> {
        const driver = new Driver();

        Object.assign(driver, {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            situation,
            firstname,
            lastname,
            collector_id,
            cpf,
            email,
            observation,
        });
        this.drivers.push(driver);

        return driver;

    }

    async Update(driver: Driver): Promise<Driver> {
        this.drivers.push(driver);

        return driver;
    }

    async Delete(driver: Driver): Promise<void> {
        const findIndex = this.drivers.findIndex(driver => driver === driver)

        this.drivers.splice(findIndex, 1);
    }

    async findByCpf(cpf: string): Promise<Driver> {
        const driver = this.drivers.find((driver) => driver.cpf === cpf);

        return driver;
    }
}

export { DriverRepositoryInMemory }