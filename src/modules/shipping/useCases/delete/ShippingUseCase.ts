import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IShippingRepository } from "../../repositories/IShippingRepository";

@injectable()
class DeleteShippingUseCase {
    constructor(
        @inject("ShippingRepository")
        private readonly shippingRepository: IShippingRepository) { }

    async execute(id: string): Promise<void> {
        const shipping = await this.shippingRepository.findById(id);

        if (!shipping) {
            throw new AppError("Shipping does not exists!")
        }
        await this.shippingRepository.Delete(shipping);
    }
}
export { DeleteShippingUseCase }