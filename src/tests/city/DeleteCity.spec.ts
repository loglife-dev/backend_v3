import { ICityDTO } from "../../modules/city/dtos/ICityDTO";
import { CityRepositoryInMemory } from "../../modules/city/repositories/in-memory/CityRepositoryInMemory";
import { CreateCityUseCase } from "../../modules/city/useCases/create/CityUseCase";
import { DeleteCityUseCase } from "../../modules/city/useCases/delete/CityUseCase";



let createCityUseCase: CreateCityUseCase;
let cityRepositoryInMemory: CityRepositoryInMemory;
let deleteCityUseCase: DeleteCityUseCase;

describe("Delete a city", () => {

    beforeEach(() => {
        cityRepositoryInMemory = new CityRepositoryInMemory();
        createCityUseCase = new CreateCityUseCase(cityRepositoryInMemory);
        deleteCityUseCase = new DeleteCityUseCase(cityRepositoryInMemory);
    });

    it("Should be able to exclude one city", async () => {
        const city: ICityDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'test city',
            state: 'Amazonas',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            deadline_collect: new Date(),
            observation: 'describe'
        }
        await createCityUseCase.execute({
            id: city.id,
            name: city.name,
            state: city.state,
            hub_id: city.hub_id,
            deadline_collect: city.deadline_collect,
            observation: city.observation,
        });
        const findId = await deleteCityUseCase.execute(city.id)

        expect(findId).toBe(undefined)

    })
})