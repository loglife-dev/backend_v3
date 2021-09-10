import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IShippingDTO } from "../../dtos/IShippingDTO";
import { Shipping } from "../../infra/typeorm/entities/Shipping";
import { IShippingRepository } from "../../repositories/IShippingRepository";

@injectable()
class UpdateShippingUseCase {
    constructor(
        @inject("ShippingRepository")
        private readonly shippingRepository: IShippingRepository) { }

    async execute({
        id,
        company_name,
        trading_name,
        cnpj,
        email,
        modal,
        cellphone,
        telephone,
        observation,
    }: IShippingDTO): Promise<Shipping> {
        const shipping = await this.shippingRepository.findById(id);

        if (!shipping) {
            throw new AppError("Shipping does not exists!");
        }
        const shippingCnpjExists = await this.shippingRepository.findByCnpj(cnpj);

        if (shippingCnpjExists && shipping.cnpj !== cnpj) {
            throw new AppError("Cnpj already exists!");
        }

        Object.assign(shipping, {
            id,
            company_name,
            trading_name,
            cnpj,
            email,
            modal,
            cellphone,
            telephone,
            observation,
        });
        const updateShipping = await this.shippingRepository.Update(shipping);

        return updateShipping;

    }
}
export { UpdateShippingUseCase }