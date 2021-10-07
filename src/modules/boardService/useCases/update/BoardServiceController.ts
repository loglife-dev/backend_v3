import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ServiceRepository } from '../../../service/infra/typeorm/repositories/ServiceRepository';
import { UpdateBoardServiceUseCase } from './BoardServiceUseCase';

class UpdateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceRepository = new ServiceRepository()
        const { id } = request.params
        const { branch_id, driver_id, operational_number, cte, cte_loglife,
            board_volume, board_weight, cte_photo, real_weight, taxed_weight, cte_transfer_cost, board_observation, 
            validate_observation, hasValidate } = request.body;

        if(hasValidate ===  true){
            const serviceId = await serviceRepository.findById(id);
            serviceId.step = 'toAllocateService'
            await serviceRepository.Update(serviceId);

        }

        const updateBoardServiceUseCase = container.resolve(UpdateBoardServiceUseCase);

        const updateResponse = await updateBoardServiceUseCase.execute({
            id,
            branch_id,
            driver_id,
            step: 'DONE',
            operational_number,
            cte, cte_loglife,
            board_volume,
            board_weight,
            cte_photo,
            real_weight,
            taxed_weight,
            cte_transfer_cost,
            board_observation,
            validate_observation,
        })
        return response.json(updateResponse)



    }

}



export { UpdateBoardServiceController }