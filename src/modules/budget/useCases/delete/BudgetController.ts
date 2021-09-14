import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteBudgetUseCase } from "./BudgetUseCase";

class DeleteBudgetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteBudgetUseCase = container.resolve(DeleteBudgetUseCase);

        await deleteBudgetUseCase.execute(id);

        return response.sendStatus(200);
    }
}
export { DeleteBudgetController }