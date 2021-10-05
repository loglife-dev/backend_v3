import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateBoardServiceUseCase } from './BoardServiceUseCase';

class UpdateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { address_id, driver_id, step, operational_number, cte, cte_loglife,
            board_volume, board_weight, cte_photo, real_weight, taxed_weight, cte_transfer_cost, board_observation, validate_observation } = request.body;

        const updateBoardServiceUseCase = container.resolve(UpdateBoardServiceUseCase);

        const updateResponse = await updateBoardServiceUseCase.execute({
            id,
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
        })
        return response.json(updateResponse)



    }

}



export { UpdateBoardServiceController }