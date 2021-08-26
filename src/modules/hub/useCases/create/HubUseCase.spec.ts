import { CreateHubUseCase } from "./HubUseCase"
import { HubRepositoryInMemory } from "../../repositories/in-memory/HubRepositoryInMemory"
import { AppError } from "../../../../shared/errors/AppError";

let createHubUseCase: CreateHubUseCase;
let hubRepositoryInMemory: HubRepositoryInMemory;

describe("Create Hub", () => {

    beforeEach(() => {
        hubRepositoryInMemory = new HubRepositoryInMemory();
        createHubUseCase = new CreateHubUseCase(hubRepositoryInMemory);

    });

    it("should be able to create a new hub", async () => {

        const hub = {
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

        })
        const hubCreated = await hubRepositoryInMemory.findByName(hub.name);
        

        expect(hubCreated).toHaveProperty("id")

    })


    it("should not be able to create a new hub with name exists", async () => {

        expect(async () => {
            const hub = {
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

            await createHubUseCase.execute({
                id: hub.id,
                name: hub.name,
                state: hub.state,
                observation: hub.observation

            });
        }).rejects.toBeInstanceOf(AppError)
    })

})



