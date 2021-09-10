import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteShippingUseCase } from "./ShippingUseCase";


class DeleteShippingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteShippingUseCase = container.resolve(DeleteShippingUseCase);

        await deleteShippingUseCase.execute(id);

        return response.sendStatus(200)
    }
}
export { DeleteShippingController }