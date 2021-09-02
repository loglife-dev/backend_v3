import { IDriverDTO } from "../../modules/driver/dtos/IDriverDTO";
import { Driver } from "../../modules/driver/infra/typeorm/entities/Driver";
import { DriverRepositoryInMemory } from "../../modules/driver/repositories/in-memory/DriverRepositoryInMemory";
import { CreateDriverUseCase } from "../../modules/driver/useCases/create/DriverUseCase";
import { AppError } from "../../shared/errors/AppError";


let createDriverUseCase: CreateDriverUseCase;
let driverRepositoryInMemory: DriverRepositoryInMemory;

describe("Create Driver", () => {
    beforeEach(() => {
        driverRepositoryInMemory = new DriverRepositoryInMemory();
        createDriverUseCase = new CreateDriverUseCase(driverRepositoryInMemory);

    });

    it("should be able to create a new driver", async () => {
        const driver: IDriverDTO = {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            situation: 'em adamento',
            firstname: 'José',
            lastname: 'Ricardo',
            collector_id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            cpf: '9991',
            email: 'ricado@email.com',
            observation: 'sem restrições',
        }
        await createDriverUseCase.execute(driver);
        const createDriver = await driverRepositoryInMemory.findByCpf(driver.cpf);

        expect(createDriver).toHaveProperty("id")
    })

    it("should not be able to create a new driver with cpf exists", async () => {

        expect(async () => {
            const driver: IDriverDTO = {
                id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
                situation: 'em adamento',
                firstname: 'José',
                lastname: 'Ricardo',
                collector_id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
                cpf: '9991',
                email: 'ricado@email.com',
                observation: 'sem restrições',
            }
            await createDriverUseCase.execute(driver);
            await createDriverUseCase.execute(driver);

        }).rejects.toBeInstanceOf(AppError)
    })
})