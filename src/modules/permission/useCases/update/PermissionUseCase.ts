import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPermissionDTO } from "../../dtos/IPermissionDTO";
import { Permission } from "../../infra/typeorm/entities/Permission";
import { IPermissionRepository } from "../../repositories/IPermissionRepository";


@injectable()
class UpdatePermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute({
        id,
        value,
        key,
        group,
        order,
    }: IPermissionDTO): Promise<Permission> {
        const permission = await this.permissionRepository.findById(id)

        if (!permission) {
            throw new AppError("Permission does not exists!");
        }

        const permissionExistKey = await this.permissionRepository.findByKey(key)

        if (permissionExistKey && permission.key !== key) {
            throw new AppError("Key already exists!");
        }

        permission.value = value,
        permission.key = key;
        permission.group = group;
        permission.order = order;

        const updatePermission = await this.permissionRepository.Update(permission);

        return updatePermission;
    }
}

export { UpdatePermissionUseCase }