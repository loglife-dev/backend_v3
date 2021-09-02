import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorDTO } from "../../dtos/ICollectorDTO";
import { Collector } from "../../infra/typeorm/entities/Collector";
import { ICollectorRepository } from "../../repositories/ICollectorRepository";


@injectable()
class CreateCollectorUseCase {
    constructor(
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

    async execute({
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

        const collectorAlreadyExists = await this.collectorRepository.findByCnpj(cnpj);

        if (collectorAlreadyExists) {
            throw new AppError("There is already a registered user with this Collector!!", 400)
        }

        const collector = new Collector();

        Object.assign(collector, {
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

        const createCollector = await this.collectorRepository.Create(collector);

        return createCollector;

    }
}

export { CreateCollectorUseCase };