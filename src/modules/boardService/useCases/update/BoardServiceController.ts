import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ServiceRepository } from '../../../service/infra/typeorm/repositories/ServiceRepository';
import { BoardServiceRepository } from '../../infra/typeorm/repositories/BoardServiceRepository';
import { UpdateBoardServiceUseCase } from './BoardServiceUseCase';

class UpdateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { service_id,  address_id, driver_id, step, board_id, operational_number, cte, cte_loglife,
            board_volume, board_weight, cte_photo, real_weight, taxed_weight, cte_transfer_cost, board_observation, validate_observation,
            departure_latitude, departure_longitude, departure_timestamp } = request.body;

        const updateBoardServiceUseCase = container.resolve(UpdateBoardServiceUseCase);

        const updateResponse = await updateBoardServiceUseCase.execute({
            service_id,
            address_id,
            driver_id,
            step,
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
            departure_latitude,
            departure_longitude,
            departure_timestamp
        })
        return response.json(updateResponse)



    }

}



export { UpdateBoardServiceController }