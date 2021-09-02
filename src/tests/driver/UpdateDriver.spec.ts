import { IDriverDTO } from "../../modules/driver/dtos/IDriverDTO";
import { DriverRepositoryInMemory } from "../../modules/driver/repositories/in-memory/DriverRepositoryInMemory";
import { CreateDriverUseCase } from "../../modules/driver/useCases/create/DriverUseCase";
import { UpdateDriverUseCase } from "../../modules/driver/useCases/update/DriverUseCase";


let createDriverUseCase: CreateDriverUseCase;
let driverRepositoryInMemory: DriverRepositoryInMemory;
let updateDriverUseCase: UpdateDriverUseCase;

describe("Update driver", () => {
    beforeEach(() => {
        driverRepositoryInMemory = new DriverRepositoryInMemory();
        createDriverUseCase = new CreateDriverUseCase(driverRepositoryInMemory);
        updateDriverUseCase = new UpdateDriverUseCase(driverRepositoryInMemory);
    });

    it("Should be able to update one driver", async () => {
        const driver: IDriverDTO= {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            situation: 'em adamento',
            firstname: 'José',
            lastname:  'Ricardo',
            collector_id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            cpf: '9991',
            email: 'ricado@email.com',
            observation: 'sem restrições',
        }

        await createDriverUseCase.execute(driver);

        const findCity = await driverRepositoryInMemory.findByCpf(driver.cpf);

       
        const updateDriver = await updateDriverUseCase.execute({
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            situation: 'entregue',
            firstname: 'José',
            lastname:  'Ricardo',
            collector_id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            cpf: '9991',
            email: 'ricado@email.com',
            observation: 'em perfeito estado',
        });

        expect(updateDriver.situation).toBe("entregue");
        expect(updateDriver.observation).toBe("em perfeito estado");
    })
})