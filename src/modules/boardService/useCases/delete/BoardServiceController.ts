import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteBoardServiceUseCase } from "./BoardServiceUseCase";

class DeleteBoardServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteBoardServiceUseCase = container.resolve(DeleteBoardServiceUseCase);

        await deleteBoardServiceUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteBoardServiceController }