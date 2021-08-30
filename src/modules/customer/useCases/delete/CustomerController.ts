import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteCustomerUseCase } from "./CustomerUseCase";


class DeleteCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCustomerseCase = container.resolve(DeleteCustomerUseCase);

        await deleteCustomerseCase.execute(id);

        return response.sendStatus(200)
    }
}

export { DeleteCustomerController }