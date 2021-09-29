import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateSetToBoardUseCase } from "./UpdateSetToBoardUseCase";

class UpdateSetToBoardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { group_id, step, branch_id, driver_id, observation } = request.body;

        const updateSetToBoardUseCase = container.resolve(UpdateSetToBoardUseCase);

        
        const group = await updateSetToBoardUseCase.execute({
            id,
            group_id,
            step,
            branch_id,
            driver_id,
            observation,
        });
        return response.json(group);
    }
}
export { UpdateSetToBoardController }