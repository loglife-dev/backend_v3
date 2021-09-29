import { Request, Response } from "express";
import { container } from "tsyringe";
import { ServiceRepository } from "../../../service/infra/typeorm/repositories/ServiceRepository";
import { ServiceGroupRepository } from "../../../serviceGroup/infra/typeorm/repositories/ServiceGroupRepository";
import { SetToBoardRepository } from "../../../setToBoard/infra/typeorm/repositories/SetToBoardRepository";
import { CreateBoardServiceUseCase } from "./BoardServiceUseCase";

class CreateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceGroupRepository = new ServiceGroupRepository()
        const serviceRepository = new ServiceRepository();
        const setToBoardRepository = new SetToBoardRepository();
        const { service_id, board_id, arrival_latitude, arrival_longitude, arrival_timestamp, operational_number, cte, cte_loglife,
            board_volume, board_weight, cte_photo, real_weight, taxed_weight, cte_transfer_cost, board_observation, validate_observation,
            departure_latitude, departure_longitude, departure_timestamp } = request.body;

        const createBoardServiceUseCase = container.resolve(CreateBoardServiceUseCase);

        const service = await serviceRepository.findById(service_id);

        const serviceGroup = await serviceGroupRepository.findById(service.group_id);

        const board = await setToBoardRepository.findById(board_id);
        board.step = 'GOING';
        await setToBoardRepository.Update(board);

        for (let serviceID of serviceGroup.service_list) {

            const service = await serviceRepository.findById(serviceID);
            service.step = 'board-service'
            await serviceRepository.Update(service);

            await createBoardServiceUseCase.execute({
                service_id: serviceID,
                board_id,
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

        }

        return response.sendStatus(201)

    }
}
export { CreateBoardServiceController }