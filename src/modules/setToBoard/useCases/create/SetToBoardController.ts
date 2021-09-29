import { Request, Response } from "express";
import { container } from "tsyringe";
import { ServiceRepository } from "../../../service/infra/typeorm/repositories/ServiceRepository";
import { ServiceGroup } from "../../../serviceGroup/infra/typeorm/entities/ServiceGroup";
import { ServiceGroupRepository } from "../../../serviceGroup/infra/typeorm/repositories/ServiceGroupRepository";
import { CreateSetToBoardUseCase } from "./SetToBoardUseCase";

class CreateSetToBoardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const serviceGroup = new ServiceGroup()
        const serviceRepository = new ServiceRepository();
        const serviceGroupRepository = new ServiceGroupRepository()
        const { service_list, branch_id, driver_id, observation } = request.body;
        const createSetToBoardUseCase = container.resolve(CreateSetToBoardUseCase);

        Object.assign(serviceGroup, {
            service_list: service_list
        });
        await serviceGroupRepository.Create(serviceGroup);

        for (let serviceID of service_list) {
            const service = await serviceRepository.findById(serviceID);
            service.group_id = serviceGroup.id
            service.step = 'set-to-board'
            await serviceRepository.Update(service);
        }

        const board = await createSetToBoardUseCase.execute({
            group_id: serviceGroup.id,
            step: 'TODO',
            branch_id,
            driver_id,
            observation,
        });
        
        const boardResponse = {
            group_id: board.group_id,
            step: board.step,
            branch_id: board.branch_id,
            driver_id: board.driver_id,
            observation: board.observation,
        };
        return response.status(201).json(boardResponse);

    }
}

export { CreateSetToBoardController }