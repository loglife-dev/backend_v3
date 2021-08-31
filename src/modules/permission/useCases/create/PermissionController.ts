import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePermissionUseCase } from "./PermissionUseCase";

class CreatePermissionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { key, group, order } = request.body;

        const createPermissionUseCase = container.resolve(CreatePermissionUseCase);

        const permission = await createPermissionUseCase.execute({
            key,
            group,
            order,
        });

        const permissionResponse = {
            key: permission.key,
            group: permission.group,
            order: permission.order,
        }

        return response.status(201).json(permissionResponse);
    }
}
export { CreatePermissionController };