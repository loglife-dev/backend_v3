
import { Generated } from "typeorm";
import { IServiceDTO } from "../../dtos/IServiceDTO";
import { Service } from "../../infra/typeorm/entities/Service";
import { IServiceRepository } from "../IServiceRepository";



class ServiceRepositoryInMemory implements IServiceRepository {
    services: Service[] = [];

    async Get(): Promise<Service[]> {
        const all = this.services;
        return all;
    }

    async Create({
        id,
        protocol,
        step,
        customer_id,
    }: IServiceDTO): Promise<Service> {
        const service = new Service();

        Object.assign(service, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            protocol,
            step,
            customer_id: "fee4d482-744c-48a4-aa23-881859bb6074",
        });
        this.services.push(service);

        return service;
    }

    async Update(service: Service): Promise<Service> {
        this.services.push(service);

        return service;
    }

    async Delete(service: Service): Promise<void> {
        const findIndex = this.services.findIndex(service => service === service);

        this.services.splice(findIndex, 1);
    }

    async findById(id: string): Promise<Service> {
        const service = this.services.find((service) => service.id === id);

        return service;
    }

    async findByProtocol(protocol: number): Promise<Service> {
        const service = this.services.find((service) => service.protocol === protocol);

        return service;
    }

}
export { ServiceRepositoryInMemory }