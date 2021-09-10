import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IShippingDTO } from "../../dtos/IShippingDTO";
import { Shipping } from "../../infra/typeorm/entities/Shipping";
import { IShippingRepository } from "../../repositories/IShippingRepository";


@injectable()
class CreateShippingUseCase {
    constructor(
        @inject("ShippingRepository")
        private shippingRepository: IShippingRepository) { }

    async execute({
        company_name,
        trading_name,
        cnpj,
        email,
        modal,
        cellphone,
        telephone,
        observation,
    }: IShippingDTO): Promise<Shipping> {

        if (company_name == "" || trading_name == "" || cnpj == "" || email == "" || modal == "" || cellphone == "" || telephone == "") {
            throw new AppError("fill in all fields", 400)
        }

        const shippingCnpjExists = await this.shippingRepository.findByCnpj(cnpj);

        if (shippingCnpjExists) {
            throw new AppError("Cnpj already exists!!");
        }

        const shipping = new Shipping();

        Object.assign(shipping, {
            company_name,
            trading_name,
            cnpj,
            email,
            modal,
            cellphone,
            telephone,
            observation,
        });

        const createShipping = await this.shippingRepository.Create(shipping);

        return createShipping;

    }
}
export { CreateShippingUseCase }