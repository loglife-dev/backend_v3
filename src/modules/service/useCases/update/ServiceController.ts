import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateServiceUseCase } from "./ServiceUseCase";

class UpdateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { step, customer_id } = request.body;

        const updateServiceUseCase = container.resolve(UpdateServiceUseCase);

        const service = await updateServiceUseCase.execute({
            id,
            step,
            customer_id,
        });
        return response.json(service);
    }
}
export { UpdateServiceController }