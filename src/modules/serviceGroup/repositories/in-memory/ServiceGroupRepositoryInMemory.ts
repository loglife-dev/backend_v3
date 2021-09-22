import { ServiceGroup } from "../../infra/typeorm/entities/ServiceGroup";
import { IServiceGroupRepository } from "../IServiceGroupRepository";

class ServiceGroupRepositoryInMemory implements IServiceGroupRepository {
    groups: ServiceGroup[] = [];

    async Get(): Promise<ServiceGroup[]> {
        const all = this.groups;
        return all;
    }

    async findById(id: string): Promise<ServiceGroup> {
        const group = this.groups.find((group) => group.id === id);

        return group;
    }

    async Create({
        id,
        service_list,
    }: IServiceGroupDTO): Promise<ServiceGroup> {
        const serviceGroup = new ServiceGroup();

        Object.assign(serviceGroup, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            service_list,
        });
        this.groups.push(serviceGroup);

        return serviceGroup;
    }

    async Update(serviceGroup: ServiceGroup): Promise<ServiceGroup> {
        this.groups.push(serviceGroup);

        return serviceGroup;
    }

    async Delete(serviceGroup: ServiceGroup): Promise<void> {
        const findIndex = this.groups.findIndex(serviceGroup => serviceGroup === serviceGroup);

        this.groups.splice(findIndex, 1);
    }

}
export { ServiceGroupRepositoryInMemory }