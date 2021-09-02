import { IDriverDTO } from "../../modules/driver/dtos/IDriverDTO";
import { DriverRepositoryInMemory } from "../../modules/driver/repositories/in-memory/DriverRepositoryInMemory";
import { CreateDriverUseCase } from "../../modules/driver/useCases/create/DriverUseCase";
import { DeleteDriverUseCase } from "../../modules/driver/useCases/delete/DriverUseCase";


let createDriverUseCase: CreateDriverUseCase;
let driverRepositoryInMemory: DriverRepositoryInMemory;
let deleteDriverUseCase: DeleteDriverUseCase;

describe("Delete a driver", () => {
    beforeEach(() => {
        driverRepositoryInMemory = new DriverRepositoryInMemory();
        createDriverUseCase = new CreateDriverUseCase(driverRepositoryInMemory);
        deleteDriverUseCase = new DeleteDriverUseCase(driverRepositoryInMemory);
    });

    it("Should be able to exclude one driver", async () => {
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
        const findId = await deleteDriverUseCase.execute(driver.id);

        expect(findId).toBe(undefined)
    })
})