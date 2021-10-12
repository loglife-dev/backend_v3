import { response } from "express";
import { inject, injectable } from "tsyringe";
import { ServiceRepository } from "../../../../infra/typeorm/repositories/ServiceRepository";

@injectable()
class GetReportSlaUseCase {
    constructor(
        @inject("ServiceRepository")
        private readonly serviceRepository: ServiceRepository) { }

    async execute({
        startFilter,
        endFilter,
    }): Promise<any[]>{
        const requested = await this.serviceRepository.filterSla(startFilter, endFilter)
        
        const requestedList = requested.map(service => {
            if(service.step === 'finishedService'){
                return service;
            }
        })  
        
        const response = requestedList.map(service => {
            console.log(service)
            return {
                protocol: service.protocol,
                customer: service.customer_id,
                step: service.step,
                sourceBranch: service.requestedServiceId.sourceBranchId.nickname,
                
            }
        })
        console.log(response)

        return requestedList;
    }

}

export { GetReportSlaUseCase }