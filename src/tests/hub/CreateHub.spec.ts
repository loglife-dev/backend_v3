import { CreateHubUseCase } from "../../modules/hub/useCases/create/HubUseCase"
import { HubRepositoryInMemory } from "../../modules/hub/repositories/in-memory/HubRepositoryInMemory"
import { AppError } from "../../shared/errors/AppError";
import { IHubDTO } from "../../modules/hub/dtos/IHubDTO";

let createHubUseCase: CreateHubUseCase;
let hubRepositoryInMemory: HubRepositoryInMemory;

describe("Create Hub", () => {
    beforeEach(() => {
        hubRepositoryInMemory = new HubRepositoryInMemory();
        createHubUseCase = new CreateHubUseCase(hubRepositoryInMemory);

    });

    it("should be able to create a new hub", async () => {

        const hub: IHubDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Test Hub',
            state: 'Amazonas',
            observation: 'describe'
        }

        await createHubUseCase.execute(hub)
        const hubCreated = await hubRepositoryInMemory.findByName(hub.name);

        expect(hubCreated).toHaveProperty("id")

    })

    it("should not be able to create a new hub with name exists", async () => {

        expect(async () => {
            const hub: IHubDTO = {
                id: '29d2b86a-0679-11ec-9a03-0242ac130003',
                name: 'Test Hub',
                state: 'Amazonas',
                observation: 'describe'
            }
            await createHubUseCase.execute(hub);

            await createHubUseCase.execute(hub);
        }).rejects.toBeInstanceOf(AppError)
    })

})



