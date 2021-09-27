import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorDTO } from "../../dtos/ICollectorDTO";
import { Collector } from "../../infra/typeorm/entities/Collector";
import { ICollectorRepository } from "../../repositories/ICollectorRepository";


@injectable()
class UpdateCollectorUseCase {
    constructor(
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

    async execute({
        id,
        situation,
        company_name,
        trading_name,
        hub_list,
        cnpj,
        operational_email,
        financial_email,
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
        const collector = await this.collectorRepository.findById(id)

        if (!collector) {
            throw new AppError("Collector does not exists!");
        }

        const collectorExistsCnpj = await this.collectorRepository.findByCnpj(cnpj);

        if (collectorExistsCnpj && collector.id !== id) {
            throw new AppError("Collector already exists!");
        }

        collector.situation = situation;
        collector.company_name = company_name;
        collector.trading_name = trading_name;
        collector.hub_list = hub_list;
        collector.cnpj = cnpj;
        collector.operational_email = operational_email;
        collector.financial_email = financial_email;
        collector.delay_cost = delay_cost;
        collector.cellphone = cellphone;
        collector.telephone = telephone;
        collector.cep = cep;
        collector.state = state;
        collector.city = city;
        collector.street = street;
        collector.number = number;
        collector.neighborhood = neighborhood;
        collector.complement = complement;
        collector.municipal_register = municipal_register;
        collector.payment_type = payment_type;
        collector.day_expiration = day_expiration
        collector.business_open = business_open;
        collector.business_close = business_close;
        collector.saturday_open = saturday_open;
        collector.saturday_close = saturday_close;
        collector.sunday_open = sunday_open;
        collector.sunday_close = sunday_close;
        collector.observation = observation;


        const updatedCollector = await this.collectorRepository.Update(collector);

        return updatedCollector;
    }
}

export { UpdateCollectorUseCase }