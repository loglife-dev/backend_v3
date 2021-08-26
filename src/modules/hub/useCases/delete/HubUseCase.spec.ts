import { IHubDTO } from "../../dtos/IHubDTO";
import { HubRepositoryInMemory } from "../../repositories/in-memory/HubRepositoryInMemory";
import { CreateHubUseCase } from "../create/HubUseCase";
import { DeleteHubUseCase } from "./HubUseCase";


let createHubUseCase: CreateHubUseCase;
let hubRepositoryInMemory: HubRepositoryInMemory;
let deleteHubUseCase: DeleteHubUseCase;


describe("Delete a hub", () => {

    beforeEach(() => {
        hubRepositoryInMemory = new HubRepositoryInMemory();
        createHubUseCase = new CreateHubUseCase(hubRepositoryInMemory);
        deleteHubUseCase = new DeleteHubUseCase(hubRepositoryInMemory);
    })

    it("Should be able to exclude one hub", async () => {
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
        const findId = await deleteHubUseCase.execute(hub.id)


    })


})



