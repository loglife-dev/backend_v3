import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateServiceUseCase } from "./ServiceUseCase";

class UpdateServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { isStep, isServiceType, collect_date } = request.body;

        let newStep = ''

        if (isStep === 'collectingService') {
            if (isServiceType === 'FRACIONADO') {
                newStep = 'toBoardService'
            } else if (isServiceType === 'DEDICADO') {
                newStep = 'toDeliveryService'
            }
        } else if (isStep === 'deliveringService') {
            newStep = 'finishedService'
        } else if (isStep === 'unsuccessService') {
            newStep = 'unsuccessService'
        }

        const updateServiceUseCase = container.resolve(UpdateServiceUseCase);

        const service = await updateServiceUseCase.execute({
            id,
            step: newStep,
            collect_date,
        });
        return response.json(service);
    }
}
export { UpdateServiceController }