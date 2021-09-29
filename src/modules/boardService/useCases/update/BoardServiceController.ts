import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ServiceRepository } from '../../../service/infra/typeorm/repositories/ServiceRepository';
import { ServiceGroupRepository } from '../../../serviceGroup/infra/typeorm/repositories/ServiceGroupRepository';
import { SetToBoardRepository } from '../../../setToBoard/infra/typeorm/repositories/SetToBoardRepository';
import { BoardServiceRepository } from '../../infra/typeorm/repositories/BoardServiceRepository';
import { UpdateBoardServiceUseCase } from './BoardServiceUseCase';

class UpdateBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceRepository = new ServiceRepository();
        const serviceGroupRepository = new ServiceGroupRepository();
        const setToBoardRepository = new SetToBoardRepository()
        const boardServiceRepository = new BoardServiceRepository();
        const { id } = request.params
        const { service_id, board_id, operational_number, cte, cte_loglife,
            board_volume, board_weight, cte_photo, real_weight, taxed_weight, cte_transfer_cost, board_observation, validate_observation,
            departure_latitude, departure_longitude, departure_timestamp } = request.body;


        const service = await serviceRepository.findById(service_id);

        const serviceGroup = await serviceGroupRepository.findById(service.group_id);

        const board = await setToBoardRepository.findById(board_id);
        board.step = 'DONE';
        await setToBoardRepository.Update(board);

        const updateBoardServiceUseCase = container.resolve(UpdateBoardServiceUseCase);
        
        for (let serviceID of serviceGroup.service_list) {

            const service = await serviceRepository.findById(serviceID);
            service.step = 'board-FINISH'
            await serviceRepository.Update(service);

            //const boardService = await boardServiceRepository.findById(id);

            await updateBoardServiceUseCase.execute({
                id,
                service_id: serviceID,
                board_id,
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

        return response.sendStatus(200);
    }
}


export { UpdateBoardServiceController }