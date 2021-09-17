import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteSetToCollectUseCase } from "./SetToCollectUseCase";

class DeleteSetToCollectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteSetoCollectUseCase = container.resolve(DeleteSetToCollectUseCase);

        await deleteSetoCollectUseCase.execute(id);

        return response.sendStatus(200);
    }
}

export { DeleteSetToCollectController }