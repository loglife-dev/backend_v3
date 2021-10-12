import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceUseCase } from "./ServiceUseCase";

class CreateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { protocol, step, customer_id, collect_date} = request.body;
        const createServiceUseCase = container.resolve(CreateServiceUseCase);

        const service = await createServiceUseCase.execute({
            protocol,
            step,
            customer_id,
            collect_date,
        });

        const serviceResponse = {
            protocol: service.protocol,
            step: service.step,
            customer_id: service.customer_id,
            collect_date: service.collect_date,
        };
        return response.status(201).json(serviceResponse);

    }
}
export { CreateServiceController }