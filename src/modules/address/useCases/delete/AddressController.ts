import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteAddressUseCase } from "./AddressUseCase";


class DeleteAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteAddressUseCase = container.resolve(DeleteAddressUseCase);

        await deleteAddressUseCase.execute(id)

        return response.sendStatus(200)
    }
}
export { DeleteAddressController }