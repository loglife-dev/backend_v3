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
        const collectorExists = await this.collectorRepository.Get(id)

        if (!collectorExists) {
            throw new AppError("Collector does not exists!");
        }

        const collectorExistsCnpj = await this.collectorRepository.findByCnpj(cnpj);

        if (collectorExistsCnpj && collectorExists.id !== id) {
            throw new AppError("Collector already exists!");
        }


        Object.assign(collectorExists, {
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
        });

        const updatedCollector = await this.collectorRepository.Update(
            collectorExists
        );

        return updatedCollector;
    }
}

export { UpdateCollectorUseCase }