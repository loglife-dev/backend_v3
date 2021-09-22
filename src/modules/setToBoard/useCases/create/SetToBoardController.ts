import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSetToBoardUseCase } from "./SetToBoardUseCase";

class CreateSetToBoardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { service_id, step, branch_id, driver_id, observation } = request.body;
        const createSetToBoardUseCase = container.resolve(CreateSetToBoardUseCase);

        const board = await createSetToBoardUseCase.execute({
            service_id,
            step,
            branch_id,
            driver_id,
            observation,
        });

        const boardResponse = {
            service_id: board.service_id,
            step: board.step,
            branch_id: board.branch_id,
            driver_id: board.driver_id,
            observation: board.observation,
        };
        return response.status(201).json(boardResponse);

    }
}

export { CreateSetToBoardController }