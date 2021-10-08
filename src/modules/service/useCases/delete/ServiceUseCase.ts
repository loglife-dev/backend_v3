import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
class DeleteServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }
    
    async execute(id: string): Promise<void> {
        const service = await this.serviceRepository.findById(id);      

        if (!service) {
            throw new AppError("Service does not exists!");
        }
        await this.serviceRepository.Delete(service);
    }
}
export { DeleteServiceUseCase}