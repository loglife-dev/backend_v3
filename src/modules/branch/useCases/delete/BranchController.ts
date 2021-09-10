import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteBranchUseCase } from "./BranchUseCase";

class DeleteBranchController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteBranchUseCase = container.resolve(DeleteBranchUseCase);

        await deleteBranchUseCase.execute(id);

        return response.sendStatus(200);
    }
}
export { DeleteBranchController }