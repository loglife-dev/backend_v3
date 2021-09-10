import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllBranchUseCase, GetBranchUseCase } from "./BranchUseCase";

class GetBranchController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getBranchUseCase = container.resolve(GetBranchUseCase);

        const branch = await getBranchUseCase.execute(id);

        return response.json(branch);
    }
}

class GetAllBranchController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllBranchUseCase = container.resolve(GetAllBranchUseCase);

        const branch = await getAllBranchUseCase.execute();

        return response.json(branch)
    }
}

export { GetBranchController, GetAllBranchController }