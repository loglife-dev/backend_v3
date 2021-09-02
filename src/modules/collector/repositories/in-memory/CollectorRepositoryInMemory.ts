import { ICollectorDTO } from "../../dtos/ICollectorDTO";
import { Collector } from "../../infra/typeorm/entities/Collector";
import { ICollectorRepository } from "../ICollectorRepository";



class CollectorRepositoryInMemory implements ICollectorRepository {
    collectors: Collector[] = [];

    async Get(id: string): Promise<Collector> {
        const collector = this.collectors.find((collector) => collector.id === id);
        return collector;
    }

    async GetAll(): Promise<Collector[]> {
        const all = this.collectors;
        return all;
    }

    async Create({
        id,
        situation,
        company_name,
        trading_name,
        hub_list,
        cnpj,
        operational_email,
        delay_cost,
        cellphone,
        telephone,
        cep,
        state,
        city,
        street,
        number,
        neighborhood,
        complement,
        municipal_register,
        payment_type,
        day_expiration,
        business_open,
        business_close,
        saturday_open,
        saturday_close,
        sunday_open,
        sunday_close,
        observation
    }: ICollectorDTO): Promise<Collector> {
        const collector = new Collector();

        Object.assign(collector, {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            situation,
            company_name,
            trading_name,
            hub_list,
            cnpj,
            operational_email,
            delay_cost,
            cellphone,
            telephone,
            cep,
            state,
            city,
            street,
            number,
            neighborhood,
            complement,
            municipal_register,
            payment_type,
            day_expiration,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation
        });
        this.collectors.push(collector);

        return collector;
    }

    async Update(collector: Collector): Promise<Collector> {
        this.collectors.push(collector);

        return collector;
    }

    async Delete(collector: Collector): Promise<void> {
        const findIndex = this.collectors.findIndex(collector => collector === collector)

        this.collectors.splice(findIndex, 1);
    }

    async findById(id: string): Promise<Collector> {
        const collector = this.collectors.find((collector) => collector.id === id)

        return collector;
    }

    async findByCnpj(cnpj: string): Promise<Collector> {
        const collector = this.collectors.find((collector) => collector.cnpj === cnpj)

        return collector;
    }

}

export { CollectorRepositoryInMemory }