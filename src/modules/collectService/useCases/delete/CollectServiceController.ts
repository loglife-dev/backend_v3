import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteCollectServiceUseCase } from "./CollectServiceUseCase";

class DeleteCollectServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCollectServiceUseCase = container.resolve(DeleteCollectServiceUseCase);

        await deleteCollectServiceUseCase.execute(id);

        return response.sendStatus(200);
    }
}
export { DeleteCollectServiceController }