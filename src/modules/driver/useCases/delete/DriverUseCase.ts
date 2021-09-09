import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IDriverRepository } from "../../repositories/IDriverRepository";


@injectable()
class DeleteDriverUseCase {
    constructor(
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute(id: string): Promise<void> {
        const driver = await this.driverRepository.findById(id)

        if (!driver) {
            throw new AppError("Driver does not exists!");
        }

        await this.driverRepository.Delete(driver);

    }
}

export { DeleteDriverUseCase }