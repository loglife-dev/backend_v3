import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllPermissionUseCase, GetPermissionUseCase } from "./PermissionUseCase";


class GetPermissionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getPermissionUseCase = container.resolve(GetPermissionUseCase);

        const permission = await getPermissionUseCase.execute(id);

        return response.json(permission);
    }
}

class GetAllPermissionCotroller {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllPermissionUseCase = container.resolve(GetAllPermissionUseCase)

        const permission = await getAllPermissionUseCase.execute();

        return response.json(permission);
    }
}

export { GetPermissionController, GetAllPermissionCotroller }