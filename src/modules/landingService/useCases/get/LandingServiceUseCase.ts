import { inject, injectable } from "tsyringe";
import { LandingService } from "../../infra/typeorm/entities/LandingService";
import { ILandingServiceRepository } from "../../repositories/ILandingServiceRepository";

@injectable()
class GetLandingServiceUseCase {
    constructor(
        @inject("LandingServiceRepository")
        private readonly landingServiceRepository: ILandingServiceRepository) { }

    async execute(id: string): Promise<LandingService> {
        const landing = await this.landingServiceRepository.findById(id)

        return landing;
    }
}

@injectable()
class GetAllLandingServiceUseCase {
    constructor(
        @inject("LandingServiceRepository")
        private readonly landingServiceRepository: ILandingServiceRepository) { }

    async execute(): Promise<LandingService[]> {
        const landing = await this.landingServiceRepository.Get()

        return landing;
    }
}

export { GetLandingServiceUseCase, GetAllLandingServiceUseCase };