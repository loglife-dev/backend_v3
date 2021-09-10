import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteCollectorCostUseCase } from "./CollectorCostUseCase";

class DeleteCollectorCostController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCollectorCostUseCase = container.resolve(DeleteCollectorCostUseCase);

        await deleteCollectorCostUseCase.execute(id);

        return response.sendStatus(200);
    }
}
export { DeleteCollectorCostController }