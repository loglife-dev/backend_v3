import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteSetToBoardUseCase } from "./SetToBoardUseCase";

class DeleteSetToBoardController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteSetToBoardUseCase = container.resolve(DeleteSetToBoardUseCase);

        await deleteSetToBoardUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteSetToBoardController }