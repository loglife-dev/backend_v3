import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateServiceUseCase } from "./ServiceUseCase";

class UpdateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { step } = request.body;

        const updateServiceUseCase = container.resolve(UpdateServiceUseCase);

        const service = await updateServiceUseCase.execute({
            id,
            step,
        });
        return response.json(service);
    }
}
export { UpdateServiceController }