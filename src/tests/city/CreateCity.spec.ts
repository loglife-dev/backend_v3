import { CityRepositoryInMemory } from "../../modules/city/repositories/in-memory/CityRepositoryInMemory";
import { CreateCityUseCase } from "../../modules/city/useCases/create/CityUseCase";


let createCityUseCase: CreateCityUseCase;
let cityRepositoryInMemory: CityRepositoryInMemory;

describe("Create City", () => {

    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory();
        createCityUseCase = new CreateCityUseCase(cityRepositoryInMemory);

    });

    it("should be able to create a new city", async () => {

        const city = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'test city',
            state: 'Amazonas',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            schedule_deadline: new Date(),
            observation: 'describe'
        }

        await createCityUseCase.execute({
            id: city.id,
            name: city.name,
            state: city.state,
            hub_id: city.hub_id,
            schedule_deadline: city.schedule_deadline,
            observation: city.observation,

        });

        const cityCreated = await cityRepositoryInMemory.findByName(city.name);

        expect(cityCreated).toHaveProperty("id")
    })
})