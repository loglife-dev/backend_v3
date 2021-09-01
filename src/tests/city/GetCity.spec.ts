import { ICityDTO } from "../../modules/city/dtos/ICityDTO";
import { CityRepositoryInMemory } from "../../modules/city/repositories/in-memory/CityRepositoryInMemory";
import { CreateCityUseCase } from "../../modules/city/useCases/create/CityUseCase";
import { GetAllCityUseCase, GetCityUseCase } from "../../modules/city/useCases/get/CityUseCase";


let getAllCityUseCase: GetAllCityUseCase;
let cityRepositoryInMemory: CityRepositoryInMemory;
let createCityUseCase: CreateCityUseCase;
let getCityFindByIdUseCase: GetCityUseCase;

describe("List all city", () => {
    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory();
        getAllCityUseCase = new GetAllCityUseCase(cityRepositoryInMemory);
        createCityUseCase = new CreateCityUseCase(cityRepositoryInMemory);
    });

    it("Should be able to list all city", async () => {
        const city: ICityDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'test city',
            state: 'Amazonas',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            schedule_deadline: new Date(),
            observation: 'describe'
        };

        await createCityUseCase.execute(city);

        const all = await getAllCityUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })
})


describe("Find by id to city", () => {
    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory();
        getCityFindByIdUseCase = new GetCityUseCase(cityRepositoryInMemory);
        createCityUseCase = new CreateCityUseCase(cityRepositoryInMemory);
    })

    it("Should be able to findOne id city", async () => {

        const city: ICityDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'test city',
            state: 'Amazonas',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            schedule_deadline: new Date(),
            observation: 'describe'
        };

        await createCityUseCase.execute(city);

        const findcityId = await getCityFindByIdUseCase.execute(city.id)

        expect(findcityId.id).toBe("59fde46d-40ad-46ac-a674-a8506c4791f6")
    })

})