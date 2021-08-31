import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeletePermissionUseCase } from "./PermissionUseCase";


class DeletePermissionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deletePermissionUseCase = container.resolve(DeletePermissionUseCase);

        await deletePermissionUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeletePermissionController }