import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdatePermissionUseCase } from "./PermissionUseCase";


class UpdatePermissionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { key, value, group, order } = request.body;

        const updatePermissionUseCase = container.resolve(UpdatePermissionUseCase)

        const updatedPermission = await updatePermissionUseCase.execute({
            id,
            value,
            key,
            group,
            order,
        })
        return response.json(updatedPermission);
    }
}

export { UpdatePermissionController };