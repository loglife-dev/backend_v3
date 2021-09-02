import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteCollectorUseCase } from "./CollectorUseCase";



class DeleteCollectorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCollectorUseCase = container.resolve(DeleteCollectorUseCase);

        await deleteCollectorUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteCollectorController }