import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Permission } from "../../infra/typeorm/entities/Permission";
import { IPermissionRepository } from "../../repositories/IPermissionRepository";


@injectable()
class GetPermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute(id: string): Promise<Permission> {
        const permission = await this.permissionRepository.findById(id);

        if (!permission) {
            throw new AppError("Permission does not exists!")
        }
        return permission;
    }
}

@injectable()
class GetAllPermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute(): Promise<Permission[]> {
        const permission = await this.permissionRepository.Get()

        return permission;
    }
}

export { GetPermissionUseCase, GetAllPermissionUseCase };