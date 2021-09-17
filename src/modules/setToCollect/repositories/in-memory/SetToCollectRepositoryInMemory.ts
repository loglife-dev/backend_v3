import { ISetToCollectDTO } from "../../dtos/ISetToCollectDTO";
import { SetToCollect } from "../../infra/typeorm/entities/SetToCollect";
import { ISetToCollectRepository } from "../ISetToCollectRepository";


class SetToCollectRepositoryInMemory implements ISetToCollectRepository {
    setToCollect: SetToCollect[] = [];

    async Get(): Promise<SetToCollect[]> {
        const all = this.setToCollect;
        return all;
    }

    async findById(id: string): Promise<SetToCollect> {
        const setToCollects = this.setToCollect.find((setToCollects) => setToCollects.id === id);

        return setToCollects;
    }

    async Create({
        id,
        service_id,
        step,
        address_id,
        provider_id,
        driver_id,
        observation,
    }: ISetToCollectDTO): Promise<SetToCollect> {
        const setToCollect = new SetToCollect();

        Object.assign(setToCollect, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            step,
            address_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            provider_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            driver_id: "fee4d482-744c-48a4-aa23-881859bb6074",
            observation,
        });
        this.setToCollect.push(setToCollect);

        return setToCollect;
    }

    async Update(setToCollect: SetToCollect): Promise<SetToCollect> {
        this.setToCollect.push(setToCollect);

        return setToCollect;
    }

    async Delete(setToCollect: SetToCollect): Promise<void> {
        const findIndex = this.setToCollect.findIndex(setToCollect => setToCollect === setToCollect);

        this.setToCollect.splice(findIndex, 1);
    }

}

export { SetToCollectRepositoryInMemory }