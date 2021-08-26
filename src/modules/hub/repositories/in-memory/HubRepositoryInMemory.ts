import { IHubDTO } from "../../dtos/IHubDTO";
import { Hub } from "../../infra/typeorm/entities/Hub";
import { IHubRepository } from "../IHubRepositories";


class HubRepositoryInMemory implements IHubRepository {

    hubs: Hub[] = [];

    async Get(id: string): Promise<Hub> {
        const hub = this.hubs.find((hub) => hub.id === id);
       return hub;
    }

    async GetAll(): Promise<Hub[]> {
       const all = this.hubs;
       return all;
    }
    async Create({
        id,
        name,
        state,
        observation
    }: IHubDTO): Promise<Hub> {
        const hub = new Hub();

        Object.assign(hub, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name,
            state,
            observation,

        })
        this.hubs.push(hub);

        return hub;
    }

    async Update(hub: Hub): Promise<Hub> {
        this.hubs.push(hub);

        return hub;
    }

    async Delete(hub: Hub): Promise<void> {
        const findIndex = this.hubs.findIndex( hub => hub === hub)

        this.hubs.splice(findIndex, 1);
        

    }

    async findByName(name: string): Promise<Hub> {
       const hub = this.hubs.find((hub) => hub.name === name)

       return hub;
    }

    async findById(id: string): Promise<Hub> {
        const hub = this.hubs.find((hub) => hub.id === id)

       return hub;
    }


}

export { HubRepositoryInMemory}