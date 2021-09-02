import { IDriverDTO } from "../../modules/driver/dtos/IDriverDTO";
import { DriverRepositoryInMemory } from "../../modules/driver/repositories/in-memory/DriverRepositoryInMemory";
import { CreateDriverUseCase } from "../../modules/driver/useCases/create/DriverUseCase";
import { GetAllDriverUseCase, GetDriverUseCase } from "../../modules/driver/useCases/get/DriverUseCase";


let getAllDriverUseCase: GetAllDriverUseCase;
let getDriverUseCase: GetDriverUseCase;
let createDriverUseCase: CreateDriverUseCase;
let driverRepositoryInMemory: DriverRepositoryInMemory;


describe("List all driver", () => {
    beforeEach(() => {
        driverRepositoryInMemory = new DriverRepositoryInMemory();
        getAllDriverUseCase = new GetAllDriverUseCase(driverRepositoryInMemory);
        createDriverUseCase = new CreateDriverUseCase(driverRepositoryInMemory);
        getDriverUseCase = new GetDriverUseCase(driverRepositoryInMemory);
    });

    it("should be able to list all driver", async () => {
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

        const all = await getAllDriverUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id driver", async () => {

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

        const findDriverId = await getDriverUseCase.execute(driver.id)

        expect(findDriverId.id).toBe('59fde46d-40ad-46,ac-a674-a8506c4791f6')
    })

});