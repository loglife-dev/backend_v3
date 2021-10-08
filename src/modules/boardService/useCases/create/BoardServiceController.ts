import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBoardServiceUseCase } from "./BoardServiceUseCase";

class CreateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, branch_id,  driver_id,  arrival_latitude, arrival_longitude, arrival_timestamp, operational_number, cte, cte_loglife,
            board_volume, board_weight, cte_photo, real_weight, taxed_weight, cte_transfer_cost, board_observation, validate_observation,
            departure_latitude, departure_longitude, departure_timestamp } = request.body;

        const createBoardServiceUseCase = container.resolve(CreateBoardServiceUseCase);

        const createBoard = await createBoardServiceUseCase.execute({
            service_id,
            branch_id,
            driver_id,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            operational_number,
            cte,
            cte_loglife,
            board_volume,
            board_weight,
            cte_photo,
            real_weight,
            taxed_weight,
            cte_transfer_cost,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            board_observation,
            validate_observation,
        })
        return response.json(createBoard);
    }

}
export { CreateBoardServiceController }