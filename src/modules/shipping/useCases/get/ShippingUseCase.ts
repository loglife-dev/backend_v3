import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Shipping } from "../../infra/typeorm/entities/Shipping";
import { IShippingRepository } from "../../repositories/IShippingRepository";

@injectable()
class GetShippingUseCase {
    constructor(
        @inject("ShippingRepository")
        private readonly shippingRepository: IShippingRepository) { }

    async execute(id: string): Promise<Shipping> {
        const shipping = await this.shippingRepository.findById(id);

        if (!shipping) {
            throw new AppError("Shipping does not exists!")
        }

        return shipping;
    }
}

@injectable()
class GetAllShippingUseCase {
    constructor(
        @inject("ShippingRepository")
        private readonly shippingRepository: IShippingRepository) { }

    async execute(): Promise<Shipping[]> {
        const shipping = await this.shippingRepository.Get();

        return shipping;
    }
}

export { GetShippingUseCase, GetAllShippingUseCase }