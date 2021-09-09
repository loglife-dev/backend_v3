import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressRepository } from "../../repositories/IAddressRepository";



@injectable()
class DeleteAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private  addressRepository: IAddressRepository) { }

    async execute(id: string): Promise<void> {
        const address = await this.addressRepository.findById(id)

        if (!address) {
            throw new AppError("Address does not exists!");
        }

        await this.addressRepository.Delete(address);

    }
}

export { DeleteAddressUseCase }