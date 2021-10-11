import { response } from "express";
import { inject, injectable } from "tsyringe";
import { RequestedService } from "../../../../infra/typeorm/entities/RequestedService";
import { IRequestedServiceRepository } from "../../../../repositories/IRequestdServiceRepository";

@injectable()
class GetReportSlaUseCase {
    constructor(
        @inject("RequestedServiceRepository")
        private readonly requestedServiceRepository: IRequestedServiceRepository) { }

    async execute({
        startFilter,
        endFilter,
    }): Promise<RequestedService[]>{
        const requested = await this.requestedServiceRepository.filterSla(startFilter, endFilter)
        
    

        return requested;
    }

}

export { GetReportSlaUseCase }