import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ServiceRepository } from '../../../service/infra/typeorm/repositories/ServiceRepository';
import { UpdateBoardServiceUseCase } from './BoardServiceUseCase';

class UpdateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceRepository = new ServiceRepository()
        const { id } = request.params
        const files = request.files as any;
        const { branch_id, driver_id, operational_number, cte, cte_loglife,
            board_volume, board_weight, real_weight, taxed_weight, cte_transfer_cost, departure_latitude, departure_longitude,
            departure_timestamp, board_observation,
            validate_observation, hasValidate } = request.body;


        if (hasValidate) {
            const serviceId = await serviceRepository.findById(id);
            serviceId.step = 'toAllocateService'
            await serviceRepository.Update(serviceId);

        } else {
            const serviceId = await serviceRepository.findById(id);
            serviceId.step = 'toBoardValidate'
            await serviceRepository.Update(serviceId);

        }

        let cte_photo = ''

        for (let file of files) {
            if (file.fieldname === 'cte_photo') {
                cte_photo = file.key
            }
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
            cte_photo: cte_photo,
            real_weight,
            taxed_weight,
            cte_transfer_cost,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            board_observation,
            validate_observation,
        })
        return response.json(updateResponse)



    }

}



export { UpdateBoardServiceController }