import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllBudgetUseCase, GetBudgetUseCase } from "./BudgetUseCase";

class GetBudgetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getBudgetUseCase = container.resolve(GetBudgetUseCase);

        const budget = await getBudgetUseCase.execute(id);

        return response.json(budget);
    }
}

class GetAllBudgetController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllBudgetUseCase = container.resolve(GetAllBudgetUseCase);

        const budget = await getAllBudgetUseCase.execute();

        return response.json(budget)
    }
}

export { GetBudgetController, GetAllBudgetController }