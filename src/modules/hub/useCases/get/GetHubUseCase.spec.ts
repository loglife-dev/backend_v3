import { v4 as uuidv4 } from "uuid"
import { IHubDTO } from "../../dtos/IHubDTO";
import { HubRepositoryInMemory } from "../../repositories/in-memory/HubRepositoryInMemory";
import { CreateHubUseCase } from "../create/HubUseCase";
import { GetAllHubUseCase, GetHubUseCase } from "./HubUseCase";

let getAllHubUseCase: GetAllHubUseCase;
let hubRepositoryInMemory: HubRepositoryInMemory;
let createHubUseCase: CreateHubUseCase;


let getHubFindByIdUseCase: GetHubUseCase;

describe('List all hub', () => {
    beforeEach(() => {
        hubRepositoryInMemory = new HubRepositoryInMemory();
        getAllHubUseCase = new GetAllHubUseCase(hubRepositoryInMemory);
        createHubUseCase = new CreateHubUseCase(hubRepositoryInMemory);

    });

    it("Should be able to list all hub", async () => {
        const hub: IHubDTO = {
            name: 'Test Hub',
            state: 'Amazonas',
            observation: 'describe'
        };

        await createHubUseCase.execute(hub);

        const all = await getAllHubUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })
})

describe("Find by id to hub", () => {
    beforeEach(() => {
        hubRepositoryInMemory = new HubRepositoryInMemory();
        getHubFindByIdUseCase = new GetHubUseCase(hubRepositoryInMemory);
        createHubUseCase = new CreateHubUseCase(hubRepositoryInMemory);
    })

    it("Should be able to findOne id hub", async () => {

        const hub: IHubDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Test Hub',
            state: 'Amazonas',
            observation: 'describe'
        };

        await createHubUseCase.execute(hub);

        const findHubId = await getHubFindByIdUseCase.execute(hub.id)

        expect(findHubId.id).toBe("29d2b86a-0679-11ec-9a03-0242ac130003")
    })

})


