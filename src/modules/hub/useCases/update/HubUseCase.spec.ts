import { IHubDTO } from "../../dtos/IHubDTO";
import { HubRepositoryInMemory } from "../../repositories/in-memory/HubRepositoryInMemory";
import { CreateHubUseCase } from "../create/HubUseCase";
import { UpdateHubUseCase } from "./HubUseCase";



let createHubUseCase: CreateHubUseCase;
let hubRepositoryInMemory: HubRepositoryInMemory;
let updateHUbUseCase: UpdateHubUseCase;

describe("Update hub", () => {

    beforeEach(() => {
        hubRepositoryInMemory = new HubRepositoryInMemory();
        createHubUseCase = new CreateHubUseCase(hubRepositoryInMemory);
        updateHUbUseCase = new UpdateHubUseCase(hubRepositoryInMemory);
    });

    it("Should be able to update one hub", async () => {
        const hub: IHubDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Test Hub',
            state: 'Amazonas',
            observation: 'describe'
        }

        await createHubUseCase.execute({
            id: hub.id,
            name: hub.name,
            state: hub.state,
            observation: hub.observation
        });

        const findHub = await hubRepositoryInMemory.findById(hub.id)

        const updateHub = await updateHUbUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'test2',
            state: 'Brasilian',
            observation: 'describe not found'
        });

        expect(updateHub.name).toBe("test2")
    })

})