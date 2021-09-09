import { inject, injectable } from "tsyringe";
import { Permission } from "../../infra/typeorm/entities/Permission";
import { IPermissionRepository } from "../../repositories/IPermissionRepository";


@injectable()
class GetPermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute(id: string): Promise<Permission> {
        const permission = await this.permissionRepository.findById(id);

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