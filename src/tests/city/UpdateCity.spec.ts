import { ICityDTO } from "../../modules/city/dtos/ICityDTO";
import { CityRepositoryInMemory } from "../../modules/city/repositories/in-memory/CityRepositoryInMemory";
import { CreateCityUseCase } from "../../modules/city/useCases/create/CityUseCase";
import { UpdateCityUseCase } from "../../modules/city/useCases/update/CityUseCase";

let createCityUseCase: CreateCityUseCase;
let cityRepositoryInMemory: CityRepositoryInMemory;
let updateCityUseCase: UpdateCityUseCase;


describe("Update city", () => {

    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory();
        createCityUseCase = new CreateCityUseCase(cityRepositoryInMemory);
        updateCityUseCase = new UpdateCityUseCase(cityRepositoryInMemory);
    });

    it("Should be able to update one city", async () => {
        const city: ICityDTO = {
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

        const findCity = await cityRepositoryInMemory.findById(city.id)

        const updateCity = await updateCityUseCase.execute({
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'test city2',
            state: 'Amazonas',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            schedule_deadline: new Date(),
            observation: 'describe observation'
        });

        expect(updateCity.name).toBe("test city2");

    })
})